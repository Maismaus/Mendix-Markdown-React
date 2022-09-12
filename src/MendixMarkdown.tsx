import { ReactElement, createElement, useMemo, useState, useCallback, useEffect } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";
import { Editor } from "codemirror";
import { Toolbar } from "./components/Toolbar";
import SimpleMDE from "easymde";
import "easymde/dist/easymde.min.css";
import { MendixMarkdownContainerProps } from "../typings/MendixMarkdownProps";
import "./ui/MendixMarkdown.scss";

export function MendixMarkdown(props: MendixMarkdownContainerProps): ReactElement {
    const { textAttribute, mdeOptions, mdeSpellChecker, mdeHideIcons, mdeToolbar, domRef } = props;

    const markdownOptions = useMemo(() => {
        return {
            spellChecker: mdeSpellChecker,
            hideIcons: mdeHideIcons.split(" "),
            toolbar: Toolbar(mdeToolbar)
        } as SimpleMDE.Options;
    }, []);

    //Add options defined in Mendix to the SimpleMDE.Options
    mdeOptions.forEach(option => {
        (markdownOptions as any)[option.key] = option.value;
    });

    //Create CodeMirror reference so we can use the CodeMirror object later
    const [codemirrorInstance, setCodemirrorInstance] = useState<Editor | null>(null);
    const getCmInstanceCallback = useCallback((editor: Editor) => {
        setCodemirrorInstance(editor);
    }, []);

    /* Create event listener listening for events from outside.
     * Use a JavaScript function with the following content: document.body.dispatchEvent(new CustomEvent('changeMarkdown' + mdref, { detail: content }));
     * This will create a custom event triggering a change in the Markdown editor.
     * Use mdref if you have multiple Markdown editors on the page
     */
    function changeMarkdown(e: CustomEvent) {
        codemirrorInstance?.replaceSelection(e.detail);
    }
    const eventListenerHook = "changeMarkdown" + domRef?.value;
    useEffect(() => {
        document.body.addEventListener(eventListenerHook, changeMarkdown);
        return () => document.body.removeEventListener(eventListenerHook, changeMarkdown);
    });

    //TODO include readonly mode
    //TODO include custom markdown functions
    return (
        <SimpleMdeReact
            options={markdownOptions}
            value={textAttribute.value}
            onChange={value => textAttribute.setValue(value)}
            getCodemirrorInstance={getCmInstanceCallback}
        />
    );
}
