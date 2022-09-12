import { ReactElement, createElement, useMemo, useState, useCallback, useEffect } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";
import { Editor } from "codemirror";
import { Toolbar } from "./components/Toolbar";
import SimpleMDE from "easymde";
import "easymde/dist/easymde.min.css";
import { MendixMarkdownContainerProps } from "../typings/MendixMarkdownProps";
import "./ui/MendixMarkdown.scss";

export function MendixMarkdown(props: MendixMarkdownContainerProps): ReactElement {
    //@ts-ignore
    const { textAttribute, mdeOptions, mdeSpellChecker, mdeHideIcons, mdeToolbar, domRef } = props;

    const markdownOptions = useMemo(() => {
        return {
            spellChecker: mdeSpellChecker,
            hideIcons: mdeHideIcons.split(" "),
            // previewRender: customPreviewRender,
            toolbar: Toolbar(mdeToolbar)
        } as SimpleMDE.Options;
    }, []);

    //Add options defined in Mendix to the SimpleMDE.Options
    mdeOptions.forEach(option => {
        (markdownOptions as any)[option.key] = option.value;
    });

    // line and cursor
    // const [lineAndCursor, setLineAndCursor] = useState<Position | null>(null);
    // const getLineAndCursorCallback = useCallback((position: Position) => {
    //     setLineAndCursor(position);
    // }, []);

    const [codemirrorInstance, setCodemirrorInstance] = useState<Editor | null>(null);
    const getCmInstanceCallback = useCallback((editor: Editor) => {
        setCodemirrorInstance(editor);
    }, []);

    function changeMarkdown(e: CustomEvent) {
        // textAttribute.setValue(e.detail);
        // console.log("changeMarkdown");
        // console.log(lineAndCursor);
        // console.log(codemirrorInstance);
        codemirrorInstance?.replaceSelection(e.detail);
    }
    useEffect(() => {
        document.body.addEventListener("changeMarkdown", changeMarkdown);
        return () => document.body.removeEventListener("changeMarkdown", changeMarkdown);
    });
    return (
        <SimpleMdeReact
            options={markdownOptions}
            value={textAttribute.value}
            onChange={value => textAttribute.setValue(value)}
            getCodemirrorInstance={getCmInstanceCallback}
            // getLineAndCursor={getLineAndCursorCallback}
        />
    );
}

// const customPreviewRender = function (text: string) {
//     console.log(text);
//     // Override function
//     const walkTokens = (token: marked.Token) => {
//         if (token.type === "heading") {
//             token.depth += 1;
//         }
//     };
//     return marked(text, {
//         // renderer: renderer,
//         // tokenizer: tokenizer,
//         walkTokens: walkTokens,
//     });
// };
