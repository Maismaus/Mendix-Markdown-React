/**
 * This file was generated from MendixMarkdown.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type ButtonActionTypeEnum = "replace" | "action" | "divider";

export interface MdeToolbarButtonsType {
    buttonActionType: ButtonActionTypeEnum;
    buttonCaption: string;
    buttonAction?: ActionValue;
    buttonLeftReplace: string;
    buttonRightReplace: string;
    buttonClass: string;
    buttonInsertPosition: number;
}

export interface MdeOptionsType {
    key: string;
    value: string;
}

export type MdeRenderOptionTypeEnum = "block" | "inline";

export interface MdeRenderOptionsType {
    mdeRenderOptionName: string;
    mdeRenderOptionType: MdeRenderOptionTypeEnum;
    mdeRenderOptionStart: string;
    mdeRenderOptionEnd: string;
    mdeRenderPreviewTag: string;
    mdeRenderOptionHtmlStart: string;
    mdeRenderOptionHtmlEnd: string;
}

export interface MdeToolbarButtonsPreviewType {
    buttonActionType: ButtonActionTypeEnum;
    buttonCaption: string;
    buttonAction: {} | null;
    buttonLeftReplace: string;
    buttonRightReplace: string;
    buttonClass: string;
    buttonInsertPosition: number | null;
}

export interface MdeOptionsPreviewType {
    key: string;
    value: string;
}

export interface MdeRenderOptionsPreviewType {
    mdeRenderOptionName: string;
    mdeRenderOptionType: MdeRenderOptionTypeEnum;
    mdeRenderOptionStart: string;
    mdeRenderOptionEnd: string;
    mdeRenderPreviewTag: string;
    mdeRenderOptionHtmlStart: string;
    mdeRenderOptionHtmlEnd: string;
}

export interface MendixMarkdownContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textAttribute: EditableValue<string>;
    readOnly: DynamicValue<boolean>;
    mdeToolbarButtons: MdeToolbarButtonsType[];
    mdeHideIcons: string;
    mdeOverrideTabKey: boolean;
    mdeSpellChecker: boolean;
    mdeOptions: MdeOptionsType[];
    mdeRenderOptions: MdeRenderOptionsType[];
    domEventListener?: DynamicValue<string>;
}

export interface MendixMarkdownPreviewProps {
    readOnly: boolean;
    textAttribute: string;
    readOnly: string;
    mdeToolbarButtons: MdeToolbarButtonsPreviewType[];
    mdeHideIcons: string;
    mdeOverrideTabKey: boolean;
    mdeSpellChecker: boolean;
    mdeOptions: MdeOptionsPreviewType[];
    mdeRenderOptions: MdeRenderOptionsPreviewType[];
    domEventListener: string;
}
