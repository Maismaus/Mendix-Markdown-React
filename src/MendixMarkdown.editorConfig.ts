import { MendixMarkdownPreviewProps } from "../typings/MendixMarkdownProps";
// @ts-ignore
import { hidePropertyIn, hidePropertiesIn, moveProperty, Problem, Properties } from "@mendix/pluggable-widgets-tools";

// type Properties = PropertyGroup[];

// type PropertyGroup = {
//     caption: string;
//     propertyGroups?: PropertyGroup[];
//     properties?: Property[];
// };

// type Property = {
//     key: string;
//     caption: string;
//     description?: string;
//     objectHeaders?: string[]; // used for customizing object grids
//     objects?: ObjectProperties[];
//     properties?: Properties[];
// };

// type Problem = {
//     property?: string; // key of the property, at which the problem exists
//     severity?: "error" | "warning" | "deprecation"; // default = "error"
//     message: string; // description of the problem
//     studioMessage?: string; // studio-specific message, defaults to message
//     url?: string; // link with more information about the problem
//     studioUrl?: string; // studio-specific link
// };

// type ObjectProperties = {
//     properties: PropertyGroup[];
//     captions?: string[]; // used for customizing object grids
// };

export function getProperties(values: MendixMarkdownPreviewProps, defaultProperties: Properties): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    /* Example
    // if (values.myProperty === "custom") {
    //     delete defaultProperties.properties.myOtherProperty;
    // }
    */
    // if (values.test) {
    // hidePropertyIn(defaultProperties, values, "mdeToolbar");
    // delete defaultProperties.
    // moveProperty(3, 0, defaultProperties);
    // }
    moveProperty(0, 1, defaultProperties);
    hidePropertiesIn(defaultProperties, values, ["readOnly"]);
    return defaultProperties;
}

// @ts-ignore
export function check(values: MendixMarkdownPreviewProps): Problem[] {
    const errors: Problem[] = [];
    // Add errors to the above array to throw errors in Studio and Studio Pro.
    /* Example
    if (values.myProperty !== "custom") {
        errors.push({
            property: `myProperty`,
            message: `The value of 'myProperty' is different of 'custom'.`,
            url: "https://github.com/myrepo/mywidget"
        });
    }
    */
    // values.mdeToolbar.forEach((toolbarButton, index) => {
    //     if (toolbarButton.mdeToolbarButtonAction === "divider") {
    //         errors.push({
    //             property: `mdeToolbar/${index + 1}/mdeToolbarButtonAction`,
    //             message: "Error!"
    //         });
    //     }
    // });

    // errors.push({
    //     property: `mdeToolbar/0/mdeToolbarOptionCaption`,
    //     message: "Error 0!"
    // });
    return errors;
}
