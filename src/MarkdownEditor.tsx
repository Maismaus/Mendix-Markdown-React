import { ReactElement, createElement, useCallback } from "react";

import { MendixMarkdownContainerProps } from "../typings/MendixMarkdownProps";
import { BadgeSample } from "./components/BadgeSample";
import "./ui/MendixMarkdown.css";

export function MarkdownEditor(props: MendixMarkdownContainerProps): ReactElement {
    const { mendixmarkdownType, mendixmarkdownValue, valueAttribute, onClickAction, style, bootstrapStyle } = props;
    const onClickHandler = useCallback(() => {
        if (onClickAction && onClickAction.canExecute) {
            onClickAction.execute();
        }
    }, [onClickAction]);

    return (
        <BadgeSample
            type={mendixmarkdownType}
            bootstrapStyle={bootstrapStyle}
            className={props.class}
            clickable={!!onClickAction}
            defaultValue={mendixmarkdownValue ? mendixmarkdownValue : ""}
            onClickAction={onClickHandler}
            style={style}
            value={valueAttribute ? valueAttribute.displayValue : ""}
        />
    );
}
