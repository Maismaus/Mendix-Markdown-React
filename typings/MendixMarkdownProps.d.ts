/**
 * This file was generated from MendixMarkdown.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type MdeToolbarButtonActionTypeEnum = "replace" | "action" | "divider";

export interface MdeToolbarType {
    mdeToolbarOptionCaption: string;
    mdeToolbarOptionClassName: string;
    mdeToolbarButtonInsertPosition: number;
    mdeToolbarButtonActionType: MdeToolbarButtonActionTypeEnum;
    mdeToolbarButtonAction?: ActionValue;
    mdeToolbarButtonLeftReplace: string;
    mdeToolbarButtonRightReplace: string;
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

export interface MdeToolbarPreviewType {
    mdeToolbarOptionCaption: string;
    mdeToolbarOptionClassName: string;
    mdeToolbarButtonInsertPosition: number | null;
    mdeToolbarButtonActionType: MdeToolbarButtonActionTypeEnum;
    mdeToolbarButtonAction: {} | null;
    mdeToolbarButtonLeftReplace: string;
    mdeToolbarButtonRightReplace: string;
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
    mdeToolbar: MdeToolbarType[];
    mdeHideIcons: string;
    mdeSpellChecker: boolean;
    mdeOptions: MdeOptionsType[];
    mdeRenderOptions: MdeRenderOptionsType[];
    domRef?: DynamicValue<string>;
}

export interface MendixMarkdownPreviewProps {
    readOnly: boolean;
    textAttribute: string;
    readOnly: string;
    mdeToolbar: MdeToolbarPreviewType[];
    mdeHideIcons: string;
    mdeSpellChecker: boolean;
    mdeOptions: MdeOptionsPreviewType[];
    mdeRenderOptions: MdeRenderOptionsPreviewType[];
    domRef: string;
}
