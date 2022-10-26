import { ReactElement, createElement, useMemo, useState, useCallback, useEffect } from "react";
import { SimpleMdeReact, SimpleMdeToCodemirrorEvents } from "react-simplemde-editor";
import { Editor } from "codemirror";
import { Toolbar } from "./Toolbar";
import { MarkdownRenderer } from "./MarkdownRenderer";
import SimpleMDE from "easymde";
import { MendixMarkdownContainerProps } from "../../typings/MendixMarkdownProps";

export function MarkdownEditor(props: MendixMarkdownContainerProps): ReactElement {
    const { textAttribute, mdeOptions, mdeHideIcons, mdeOverrideTabKey, mdeSpellChecker, mdeToolbarButtons, mdeRenderOptions, domEventListener } = props;

    /* Stops propagation if the tab key is pressed.
     ** Because tab key might be used by used who want to jump to the next field, this is a configurable option in the widget
     ** Using extraKeys doesn't seem to work, probably similar issue as described here: https://github.com/RIP21/react-simplemde-editor/issues/183
     */
    const events = useMemo(() => {
        return {
            keyHandled: (_editor, _key, event) => {
                if (event.key === "Tab") {
                    event.stopImmediatePropagation();
                }
            }
        } as SimpleMdeToCodemirrorEvents;
    }, []);
    const markdownOptions = useMemo(() => {
        const mdOptions = {
            spellChecker: mdeSpellChecker,
            previewRender: (markdownPlainText: string) => {
                return MarkdownRenderer(markdownPlainText, mdeRenderOptions);
            },
            hideIcons: mdeHideIcons.split(" "),
            toolbar: Toolbar(mdeToolbarButtons)
        } as SimpleMDE.Options;
        // Add options defined in Mendix to the SimpleMDE.Options
        mdeOptions.forEach(option => {
            (mdOptions as any)[option.key] = option.value;
        });
        return mdOptions;
    }, []);

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
            let content = e.detail;
            const selection = codemirrorInstance?.getSelection();
            if (content.match(/{.*?}/) && selection) {
                // This allows you to insert the current selection into the markdown fired by the event
                content = content.replace(content.match(/{.*?}/)[0], selection);
            } else {
                //If there is no selection, the curly brackets still need to be removed
                content = content.replace("{", "");
                content = content.replace("}", "");
            }
            codemirrorInstance?.replaceSelection(content);
        }
        const eventListenerHook = "changeMarkdown" + domEventListener?.value;
        document.body.addEventListener(eventListenerHook, changeMarkdown);
        return () => {
            document.body.removeEventListener(eventListenerHook, changeMarkdown);
            console.debug("Unmounting");
        };
    });
    return <SimpleMdeReact events={mdeOverrideTabKey ? events : undefined} options={markdownOptions} value={textAttribute.value} onChange={value => textAttribute.setValue(value)} getCodemirrorInstance={getCmInstanceCallback} />;
}
