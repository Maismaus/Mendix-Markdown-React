/**
 * This file was generated from MendixMarkdown.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface MdeToolbarType {
    mdeToolbarButtonName: string;
    mdeToolbarOptionCaption: string;
    mdeToolbarOptionClassName: string;
    mdeToolbarOptionLeftReplace: string;
    mdeToolbarOptionRightReplace: string;
}

export interface MdeOptionsType {
    key: string;
    value: string;
}

export interface MdeToolbarPreviewType {
    mdeToolbarButtonName: string;
    mdeToolbarOptionCaption: string;
    mdeToolbarOptionClassName: string;
    mdeToolbarOptionLeftReplace: string;
    mdeToolbarOptionRightReplace: string;
}

export interface MdeOptionsPreviewType {
    key: string;
    value: string;
}

export interface MendixMarkdownContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    textAttribute: EditableValue<string>;
    mdeToolbar: MdeToolbarType[];
    mdeHideIcons: string;
    mdeSpellChecker: boolean;
    mdeOptions: MdeOptionsType[];
}

export interface MendixMarkdownPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    textAttribute: string;
    mdeToolbar: MdeToolbarPreviewType[];
    mdeHideIcons: string;
    mdeSpellChecker: boolean;
    mdeOptions: MdeOptionsPreviewType[];
}
