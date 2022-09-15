import { MdeToolbarButtonsType } from "typings/MendixMarkdownProps";
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
                        const cm = editor.codemirror;
                        const content = btn.buttonLeftReplace + cm.getSelection() + btn.buttonRightReplace;
                        const newPosition = cm.getCursor().ch + content.length - btn.buttonRightReplace.length;
                        cm.replaceSelection(content);
                        cm.setCursor(cm.getCursor().line, newPosition);
                        cm.focus();
                    }
                    if (btn.buttonActionType === "action") {
                        btn.buttonAction?.execute();
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
