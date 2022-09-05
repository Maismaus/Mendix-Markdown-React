import { ReactElement, CSSProperties, createElement } from "react";
import classNames from "classnames";

export interface BadgeSampleProps {
    type: "badge" | "label";
    defaultValue?: string;
    className?: string;
    style?: CSSProperties;
    value?: string;
    bootstrapStyle?: BootstrapStyle;
    clickable?: boolean;
    onClickAction?: () => void;
    getRef?: (node: HTMLElement) => void;
}

export type BootstrapStyle = "default" | "info" | "inverse" | "primary" | "danger" | "success" | "warning";

export function BadgeSample(props: BadgeSampleProps): ReactElement {
    const { type, defaultValue, className, style, value, bootstrapStyle, clickable, onClickAction, getRef } = props;
    return (
        <span
            className={classNames("widget-mendixmarkdown", type, className, {
                [`label-${bootstrapStyle}`]: !!bootstrapStyle,
                "widget-mendixmarkdown-clickable": clickable
            })}
            onClick={onClickAction}
            ref={getRef}
            style={style}
        >
           {value || defaultValue}
        </span>
    );
}
