import { ReactElement, createElement, useMemo } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";
import { Toolbar } from "./components/Toolbar";
import SimpleMDE from "easymde";
import { marked } from "marked";
import "easymde/dist/easymde.min.css";
import { MendixMarkdownContainerProps } from "../typings/MendixMarkdownProps";
import "./ui/MendixMarkdown.scss";

export function MendixMarkdown(props: MendixMarkdownContainerProps): ReactElement {
    const { textAttribute, mdeOptions, mdeSpellChecker, mdeHideIcons, mdeToolbar } = props;

    const markdownOptions = useMemo(() => {
        return {
            spellChecker: mdeSpellChecker,
            hideIcons: mdeHideIcons.split(" "),
            previewRender: customPreviewRender,
            toolbar: Toolbar(mdeToolbar),
        } as SimpleMDE.Options;
    }, []);

    //Add options defined in Mendix to the SimpleMDE.Options
    mdeOptions.forEach((option) => {
        (markdownOptions as any)[option.key] = option.value;
    });
    return <SimpleMdeReact options={markdownOptions} value={textAttribute.value} onChange={(value) => textAttribute.setValue(value)} />;
}

const customPreviewRender = function (text: string) {
    console.log(text);
    // Override function
    const walkTokens = (token: marked.Token) => {
        if (token.type === "heading") {
            token.depth += 1;
        }
    };
    return marked(text, {
        // renderer: renderer,
        // tokenizer: tokenizer,
        walkTokens: walkTokens,
    });
};
