import { MdeToolbarType } from "typings/MendixMarkdownProps";

export function Toolbar(mdeToolbar: MdeToolbarType[]): ReadonlyArray<"|" | String | Object> {
    let toolbarButtons: (string | object)[] = [
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
        "redo"
    ];

    for (let btn of mdeToolbar) {
        const newButton = {
            name: btn.mdeToolbarButtonName,
            action: (editor: EasyMDE) => {
                if (btn.mdeToolbarButtonActionType == "replace") {
                    editor.codemirror.replaceSelection(
                        btn.mdeToolbarButtonLeftReplace +
                            editor.codemirror.getSelection() +
                            btn.mdeToolbarButtonRightReplace
                    );
                }
                if (btn.mdeToolbarButtonActionType == "action") {
                    btn.mdeToolbarButtonAction?.execute();
                }
            },
            className: btn.mdeToolbarOptionClassName,
            title: btn.mdeToolbarOptionCaption
        };
        if (btn.mdeToolbarButtonInsertPosition == -1) {
            toolbarButtons.push(newButton);
        } else {
            toolbarButtons.splice(btn.mdeToolbarButtonInsertPosition, 0, newButton);
        }
    }

    return toolbarButtons;
}
