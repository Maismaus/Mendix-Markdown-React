import { ReactElement, createElement, useMemo, useState, useCallback, useEffect } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";
import { Editor } from "codemirror";
import { Toolbar } from "./Toolbar";
import { MarkdownRenderer } from "./MarkdownRenderer";
import SimpleMDE from "easymde";
import "easymde/dist/easymde.min.css";
import { MendixMarkdownContainerProps } from "../../typings/MendixMarkdownProps";

export function MarkdownEditor(props: MendixMarkdownContainerProps): ReactElement {
    const { textAttribute, mdeOptions, mdeHideIcons, mdeSpellChecker, mdeToolbarButtons, mdeRenderOptions, domEventListener } = props;

    const toolbar = useMemo(() => {
        return Toolbar(mdeToolbarButtons);
    }, [mdeToolbarButtons]);

    const markdownOptions = useMemo(() => {
        return {
            spellChecker: mdeSpellChecker,
            previewRender: (markdownPlainText: string) => {
                return MarkdownRenderer(markdownPlainText, mdeRenderOptions);
            },
            hideIcons: mdeHideIcons.split(" "),
            toolbar: toolbar,
        } as SimpleMDE.Options;
    }, [mdeHideIcons, mdeSpellChecker]);

    // Add options defined in Mendix to the SimpleMDE.Options
    mdeOptions.forEach((option) => {
        (markdownOptions as any)[option.key] = option.value;
    });

    // Create CodeMirror reference so we can use the CodeMirror object later
    const [codemirrorInstance, setCodemirrorInstance] = useState<Editor | null>(null);
    const getCmInstanceCallback = useCallback((editor: Editor) => {
        setCodemirrorInstance(editor);
    }, []);
    useEffect(() => {
        console.debug("Mounting");
        /* Create event listener listening for events from outside.
         * Use a JavaScript function with the following content: document.body.dispatchEvent(new CustomEvent('changeMarkdown' + mdref, { detail: content }));
         * This will create a custom event triggering a change in the Markdown editor.
         * Use mdref if you have multiple Markdown editors on the page
         */
        function changeMarkdown(e: CustomEvent): void {
            codemirrorInstance?.replaceSelection(e.detail);
        }
        const eventListenerHook = "changeMarkdown" + domEventListener?.value;
        document.body.addEventListener(eventListenerHook, changeMarkdown);
        return () => {
            document.body.removeEventListener(eventListenerHook, changeMarkdown);
            console.debug("Unmounting");
        };
    }, [codemirrorInstance, domEventListener]);
    return <SimpleMdeReact key="1" options={markdownOptions} value={textAttribute.value} onChange={(value) => textAttribute.setValue(value)} getCodemirrorInstance={getCmInstanceCallback} />;
}
