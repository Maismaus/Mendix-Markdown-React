import { ReactElement } from "react";
import "easymde/dist/easymde.min.css";
import { MendixMarkdownContainerProps } from "../typings/MendixMarkdownProps";
import { MarkdownEditor } from "./components/MarkdownEditor";
import "./ui/MarkdownEditor.scss";
import { MarkdownViewer } from "./components/MarkdownViewer";

export function MendixMarkdown(props: MendixMarkdownContainerProps): ReactElement {
    const { readOnly } = props;
    if (readOnly.value == true) {
        return MarkdownViewer(props);
    }
    return MarkdownEditor(props);
}
