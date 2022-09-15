import { MdeToolbarButtonsType } from "typings/MendixMarkdownProps";
// import { useEffect } from "react";
import EasyMDE from "easymde";

export function Toolbar(mdeToolbar: MdeToolbarButtonsType[]): ReadonlyArray<"|" | string | object> {
    const toolbarButtons: Array<string | object> = [
        "bold",
        "italic",
        "heading",
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
        "redo",
    ];
    for (const btn of mdeToolbar) {
        let newButton = {};
        if (btn.buttonActionType === "divider") {
            newButton = "|";
        } else {
            newButton = {
                action: (editor: EasyMDE) => {
                    if (btn.buttonActionType === "replace") {
                        editor.codemirror.replaceSelection(btn.buttonLeftReplace + editor.codemirror.getSelection() + btn.buttonRightReplace);
                        editor.codemirror.focus();
                    }
                    if (btn.buttonActionType === "action") {
                        // useEffect(() => {
                        btn.buttonAction?.execute();
                        // });
                    }
                },
                className: btn.buttonClass,
                title: btn.buttonCaption,
            };
        }
        if (btn.buttonInsertPosition === -1) {
            toolbarButtons.push(newButton);
        } else {
            toolbarButtons.splice(btn.buttonInsertPosition, 0, newButton);
        }
    }

    return toolbarButtons;
}
