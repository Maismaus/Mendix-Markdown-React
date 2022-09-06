/**
 * This file was generated from MarkdownEditor.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export type MendixmarkdownTypeEnum = "badge" | "label";

export interface MarkdownEditorContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    valueAttribute?: EditableValue<string | Big>;
    mendixmarkdownValue: string;
    bootstrapStyle: BootstrapStyleEnum;
    mendixmarkdownType: MendixmarkdownTypeEnum;
    onClickAction?: ActionValue;
}

export interface MarkdownEditorPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    valueAttribute: string;
    mendixmarkdownValue: string;
    bootstrapStyle: BootstrapStyleEnum;
    mendixmarkdownType: MendixmarkdownTypeEnum;
    onClickAction: {} | null;
}
