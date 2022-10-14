import { ReactElement, createElement, useMemo, useState, useCallback, useEffect } from "react";
import { SimpleMdeReact, SimpleMdeToCodemirrorEvents } from "react-simplemde-editor";
import { Editor } from "codemirror";
import { Toolbar } from "./Toolbar";
import { MarkdownRenderer } from "./MarkdownRenderer";
import SimpleMDE from "easymde";
import { MendixMarkdownContainerProps } from "../../typings/MendixMarkdownProps";

export function MarkdownEditor(props: MendixMarkdownContainerProps): ReactElement {
    const { textAttribute, mdeOptions, mdeHideIcons, mdeOverrideTabKey, mdeSpellChecker, mdeToolbarButtons, mdeRenderOptions, domEventListener } = props;
    const events = mdeOverrideTabKey
        ? useMemo(() => {
              return {
                  /* Stops propagation if the tab key is pressed.
                   ** Because tab key might be used by used who want to jump to the next field, this is a configurable option in the widget
                   ** Using extraKeys doesn't seem to work, probably similar issue as described here: https://github.com/RIP21/react-simplemde-editor/issues/183
                   */
                  keyHandled: (_editor, _key, event) => {
                      if (event.key === "Tab") {
                          event.stopImmediatePropagation();
                      }
                  }
              } as SimpleMdeToCodemirrorEvents;
          }, [])
        : undefined;
    const markdownOptions = useMemo(() => {
        return {
            spellChecker: mdeSpellChecker,
            previewRender: (markdownPlainText: string) => {
                return MarkdownRenderer(markdownPlainText, mdeRenderOptions);
            },
            hideIcons: mdeHideIcons.split(" "),
            tabSize: 10,
            indentWithTab: true,

            toolbar: Toolbar(mdeToolbarButtons)
        } as SimpleMDE.Options;
    }, [mdeHideIcons, mdeSpellChecker, mdeRenderOptions]);

    // Add options defined in Mendix to the SimpleMDE.Options
    mdeOptions.forEach(option => {
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
    return <SimpleMdeReact events={events} options={markdownOptions} value={textAttribute.value} onChange={value => textAttribute.setValue(value)} getCodemirrorInstance={getCmInstanceCallback} />;
}
