/**
 * This file was generated from MendixMarkdown.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type MdeToolbarButtonActionTypeEnum = "replace" | "action";

export interface MdeToolbarType {
    mdeToolbarButtonName: string;
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

export interface MdeToolbarPreviewType {
    mdeToolbarButtonName: string;
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

export interface MendixMarkdownContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textAttribute: EditableValue<string>;
    mdeToolbar: MdeToolbarType[];
    mdeHideIcons: string;
    mdeSpellChecker: boolean;
    mdeOptions: MdeOptionsType[];
    domRef?: DynamicValue<string>;
}

export interface MendixMarkdownPreviewProps {
    readOnly: boolean;
    textAttribute: string;
    mdeToolbar: MdeToolbarPreviewType[];
    mdeHideIcons: string;
    mdeSpellChecker: boolean;
    mdeOptions: MdeOptionsPreviewType[];
    domRef: string;
}
