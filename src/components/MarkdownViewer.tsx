import { ReactElement, createElement } from "react";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { MendixMarkdownContainerProps } from "../../typings/MendixMarkdownProps";

export function MarkdownViewer(props: MendixMarkdownContainerProps): ReactElement {
    const { textAttribute, mdeRenderOptions } = props;
    if (textAttribute.value) {
        const renderedMarkdown = MarkdownRenderer(textAttribute.value?.toString(), mdeRenderOptions);
        return <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }}></div>;
    }
    return <div></div>;
}
