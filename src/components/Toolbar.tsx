import { MdeToolbarType } from "typings/MendixMarkdownProps";

export interface ToolbarProps {
    mdeToolbar?: MdeToolbarType[];
}

export const Toolbar = [
    "bold",
    "italic",
    "heading",
    {
        name: "anchor",
        action: (editor: EasyMDE) => {
            editor.codemirror.replaceSelection("{{");
        },
        className: "fa fa-anchor",
        title: "Add anchor"
    },
    "|",
    "quote",
    "unordered-list",
    "ordered-list",
    "clean-block",
    "code",
    "|",
    "horizontal-rule",
    "link",
    "image",
    "table",
    "|",
    "preview",
    "side-by-side",
    "fullscreen",
    "|",
    "guide",
    "|",
    "undo",
    "redo"
];
