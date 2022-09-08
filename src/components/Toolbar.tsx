import { MdeToolbarType } from "typings/MendixMarkdownProps";

export function Toolbar(mdeToolbar: MdeToolbarType[]): ReadonlyArray<"|" | String | Object> {
    console.log(mdeToolbar);
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
        "redo",
    ];

    for (let btn of mdeToolbar) {
        const newButton = {
            name: btn.mdeToolbarButtonName,
            action: (editor: EasyMDE) => {
                editor.codemirror.replaceSelection(btn.mdeToolbarButtonLeftReplace + editor.codemirror.getSelection() + btn.mdeToolbarButtonRightReplace);
            },
            className: btn.mdeToolbarOptionClassName,
            title: btn.mdeToolbarOptionCaption,
        };
        if (btn.mdeToolbarButtonInsertPosition == -1) {
            toolbarButtons.push(newButton);
        } else {
            toolbarButtons.splice(btn.mdeToolbarButtonInsertPosition, 0, newButton);
        }
    }

    return toolbarButtons;
}

// const newButton = {
//     name: "anchor",
//     action: (editor: EasyMDE) => {
//         editor.codemirror.replaceSelection("{{");
//     },
//     className: "fa fa-anchor",
//     title: "Add anchor"
// };
// toolbarButtons.push(newButton);
