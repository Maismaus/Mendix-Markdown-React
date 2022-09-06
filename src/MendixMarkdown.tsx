import { ReactElement, createElement, useMemo } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";
import { Toolbar } from "./components/Toolbar";
import SimpleMDE from "easymde";
import "easymde/dist/easymde.min.css";
import { MendixMarkdownContainerProps } from "../typings/MendixMarkdownProps";
import "./ui/MendixMarkdown.scss";

export function MendixMarkdown(props: MendixMarkdownContainerProps): ReactElement {
    const { textAttribute, mdeOptions, mdeSpellChecker, mdeHideIcons } = props;

    const markdownOptions = useMemo(() => {
        return {
            spellChecker: mdeSpellChecker,
            hideIcons: mdeHideIcons.split(" "),
            toolbar: Toolbar
        } as SimpleMDE.Options;
    }, []);
    // @ts-ignore key is not used
    Object.entries(mdeOptions).map(([key, value]) => {
        (markdownOptions as any)[value.key] = value.value;
    });
    return (
        <SimpleMdeReact
            options={markdownOptions}
            value={textAttribute.value}
            onChange={value => textAttribute.setValue(value)}
        />
    );
}
