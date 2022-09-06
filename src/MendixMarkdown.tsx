import { ReactElement, createElement, useMemo } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";
import SimpleMDE from "easymde";
import "easymde/dist/easymde.min.css";
import { MendixMarkdownContainerProps } from "../typings/MendixMarkdownProps";
import "./ui/MendixMarkdown.scss";

export function MendixMarkdown(props: MendixMarkdownContainerProps): ReactElement {
    // const { mendixmarkdownType, mendixmarkdownValue, valueAttribute, onClickAction, style, bootstrapStyle } = props;
    // const onClickHandler = useCallback(() => {
    //     if (onClickAction && onClickAction.canExecute) {
    //         onClickAction.execute();
    //     }
    // }, [onClickAction]);
    const autofocusNoSpellcheckerOptions = useMemo(() => {
        return {
          autofocus: true,
          spellChecker: false,
          maxHeight: "300",
        } as SimpleMDE.Options;
      }, []);
    console.log(props);

    return (
        <SimpleMdeReact
            options={autofocusNoSpellcheckerOptions}
        />
    );
}
