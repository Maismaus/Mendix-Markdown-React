import { MdeRenderOptionsType } from "../../typings/MendixMarkdownProps";
import { marked } from "marked";
// Custom tokens inspired by https://github.com/markedjs/marked/pull/2043
export function MarkdownRenderer(markdownPlainText: string, mdeRenderOptions: MdeRenderOptionsType[]): string {
    const customTokens: marked.MarkedExtension[] = mdeRenderOptions.map((renderOption) => {
        return {
            extensions: [
                {
                    name: renderOption.mdeRenderOptionName,
                    start(src: string) {
                        const rule = new RegExp(renderOption.mdeRenderOptionStart);
                        return rule.exec(src)?.index;
                    }, // First characters of the token so Marked.js knows to stop and check for a match
                    level: renderOption.mdeRenderOptionType, // Is this a block-level or inline-level tokenizer?
                    tokenizer(src) {
                        const rule = getRegExp(renderOption);
                        const match = rule.exec(src);
                        if (match) {
                            return {
                                type: renderOption.mdeRenderOptionName,
                                raw: match[0], // The text that you want your token to consume from the source
                                text: getContent(match[2], renderOption.mdeRenderPreviewTag), // Any custom properties you want the Renderer to access
                            };
                        }
                    },
                    renderer(token) {
                        return `${renderOption.mdeRenderOptionHtmlStart}${token.text}${renderOption.mdeRenderOptionHtmlEnd}\n`;
                    },
                },
            ],
        } as marked.MarkedExtension;
    });
    marked.use(...customTokens);
    return marked.parse(markdownPlainText);
}

function getRegExp(renderOption: MdeRenderOptionsType): RegExp {
    // prettier-ignore
    const regExp = new RegExp(
        "^(" + renderOption.mdeRenderOptionStart +")" + // Begin of tag regex
        "([\\S\\s]+?)" + // Any content inbetween
        "(" + renderOption.mdeRenderOptionEnd + ")" // End of tag regex
    );
    return regExp;
}

function getContent(content: string, searchCondition: string): string {
    const startIndex = content.search(searchCondition);
    if (searchCondition && startIndex > -1) {
        return content.substring(startIndex).trim();
    }
    return content.trim();
}
