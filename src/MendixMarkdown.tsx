import { ReactElement, createElement, useMemo } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";
import { Toolbar } from "./components/Toolbar";
import SimpleMDE from "easymde";
import "easymde/dist/easymde.min.css";
import { MendixMarkdownContainerProps } from "../typings/MendixMarkdownProps";
import "./ui/MendixMarkdown.scss";

export function MendixMarkdown(props: MendixMarkdownContainerProps): ReactElement {
    const { textAttribute, mdeOptions, mdeSpellChecker, mdeHideIcons, mdeToolbar } = props;

    const toolbarButtons = Toolbar(mdeToolbar);

    const markdownOptions = useMemo(() => {
        return {
            spellChecker: mdeSpellChecker,
            hideIcons: mdeHideIcons.split(" "),
            toolbar: toolbarButtons,
        } as SimpleMDE.Options;
    }, []);

    mdeOptions.forEach((option) => {
        (markdownOptions as any)[option.key] = option.value;
    });
    return <SimpleMdeReact options={markdownOptions} value={textAttribute.value} onChange={(value) => textAttribute.setValue(value)} />;
}
