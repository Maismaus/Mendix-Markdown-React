import { Problem, Properties, PropertyGroup } from "@mendix/pluggable-widgets-tools";

import { MdeToolbarButtonsPreviewType, MendixMarkdownPreviewProps } from "../typings/MendixMarkdownProps";

export function getProperties(values: MendixMarkdownPreviewProps, defaultProperties: Properties): Properties {
    //Lambda function to remove values from properties
    const spliceArray = function (index: number, defaultProperties: PropertyGroup[]) {
        defaultProperties.splice(index, 1);
    };

    //Show and hide buttons based on the button action
    values.mdeToolbarButtons.forEach((toolbarButton: MdeToolbarButtonsPreviewType, index) => {
        if (toolbarButton.buttonActionType === "action") {
            //Call the modifyProperty with the spliceArray Lambda function to remove the given property from defaultProperties using splice
            modifyProperty(spliceArray, defaultProperties, values, "mdeToolbarButtons", index, "buttonLeftReplace");
            modifyProperty(spliceArray, defaultProperties, values, "mdeToolbarButtons", index, "buttonRightReplace");
        }
        if (toolbarButton.buttonActionType === "replace") {
            modifyProperty(spliceArray, defaultProperties, values, "mdeToolbarButtons", index, "buttonAction");
        }
        if (toolbarButton.buttonActionType === "divider") {
            modifyProperty(spliceArray, defaultProperties, values, "mdeToolbarButtons", index, "buttonCaption");
            modifyProperty(spliceArray, defaultProperties, values, "mdeToolbarButtons", index, "buttonAction");
            modifyProperty(spliceArray, defaultProperties, values, "mdeToolbarButtons", index, "buttonClass");
            modifyProperty(spliceArray, defaultProperties, values, "mdeToolbarButtons", index, "buttonLeftReplace");
            modifyProperty(spliceArray, defaultProperties, values, "mdeToolbarButtons", index, "buttonRightReplace");
        }
    });
    return defaultProperties;
}

// @ts-ignore
export function check(values: MendixMarkdownPreviewProps): Problem[] {
    const errors: Problem[] = [];
    // values.mdeToolbar.forEach((column: MdeToolbarPreviewType, index) => {
    // if (column.mdeToolbarButtonActionType === "divider") {
    //     errors.push({
    //         property: `mdeToolbar/${index + 1}/mdeToolbarOptionCaption`,
    //         message: "Error 0!"
    //     });
    //     }
    // });

    return errors;
}

//This function is modified from PageEditorUtils.js because I couldn't get it to work from the pluggable widget tools itself
//Ideally it should be used from there
function modifyProperty<T, TKey extends keyof T>(modify: Function, propertyGroups: PropertyGroup[], _value: T, key: TKey, nestedPropIndex?: number, nestedPropKey?: T[TKey] extends Array<infer TChild> ? keyof TChild : never) {
    propertyGroups.forEach(propGroup => {
        var _a;
        if (propGroup.propertyGroups) {
            modifyProperty(modify, propGroup.propertyGroups, _value, key, nestedPropIndex, nestedPropKey);
        }
        (_a = propGroup.properties) === null || _a === void 0
            ? void 0
            : _a.forEach((prop, index, array) => {
                  if (prop.key === key) {
                      if (nestedPropIndex === undefined || nestedPropKey === undefined) {
                          modify(index, array);
                      } else if (prop.objects) {
                          modifyProperty(modify, prop.objects[nestedPropIndex].properties, _value, nestedPropKey);
                      } else if (prop.properties) {
                          modifyProperty(modify, prop.properties[nestedPropIndex], _value, nestedPropKey);
                      }
                  }
              });
    });
}
