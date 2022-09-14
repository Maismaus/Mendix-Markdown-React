// import { ContainerProps, DropZoneProps, RowLayoutProps, StructurePreviewProps } from "@mendix/piw-utils-internal";
// @ts-ignore
import { changePropertyIn, hideNestedPropertiesIn, hidePropertiesIn, hidePropertyIn, Problem, Properties, transformGroupsIntoTabs } from "@mendix/pluggable-widgets-tools";

// @ts-ignore
import { MdeToolbarPreviewType, MendixMarkdownPreviewProps } from "../typings/MendixMarkdownProps";

//@ts-ignore
export function getProperties(values: MendixMarkdownPreviewProps, defaultProperties: Properties, platform: "web" | "desktop"): Properties {
    values.mdeToolbar.forEach((toolbarButton: MdeToolbarPreviewType, index) => {
        if (toolbarButton.mdeToolbarButtonActionType === "divider") {
            hidePropertyIn(defaultProperties, values, "mdeToolbar", index, "mdeToolbarOptionCaption");
        }
    });
    hidePropertyIn(defaultProperties, values, "mdeToolbar", 0, "mdeToolbarOptionCaption");
    // hidePropertyIn(defaultProperties, values, "testtwo");

    // if (values.pagination !== "buttons") {
    //     hidePropertyIn(defaultProperties, values, "pagingPosition");
    // }
    delete defaultProperties[1]?.properties; //This works?
    return defaultProperties;
}

// export const getPreview = (values: DatagridPreviewProps, isDarkMode: boolean): StructurePreviewProps => {
//     const hasColumns = values.columns && values.columns.length > 0;
//     const columnProps: ColumnsPreviewType[] = hasColumns
//         ? values.columns
//         : [
//               {
//                   header: "Column",
//                   tooltip: "",
//                   attribute: "",
//                   width: "autoFit",
//                   columnClass: "",
//                   filter: { widgetCount: 0, renderer: () => null },
//                   resizable: false,
//                   showContentAs: "attribute",
//                   content: { widgetCount: 0, renderer: () => null },
//                   dynamicText: "Dynamic text",
//                   draggable: false,
//                   hidable: "no",
//                   size: 1,
//                   sortable: false,
//                   alignment: "left",
//                   wrapText: false
//               }
//           ];
//     const columns: RowLayoutProps = {
//         type: "RowLayout",
//         columnSize: "fixed",
//         children: columnProps.map(
//             column =>
//                 ({
//                     type: "Container",
//                     borders: true,
//                     grow: column.width === "manual" && column.size ? column.size : 1,
//                     backgroundColor: values.columnsHidable && column.hidable === "hidden" ? (isDarkMode ? "#3E3E3E" : "#F5F5F5") : undefined,
//                     children: [
//                         column.showContentAs === "customContent"
//                             ? {
//                                   type: "DropZone",
//                                   property: column.content
//                               }
//                             : {
//                                   type: "Container",
//                                   padding: 8,
//                                   children: [
//                                       {
//                                           type: "Text",
//                                           content: column.showContentAs === "dynamicText" ? column.dynamicText ?? "Dynamic text" : `[${column.attribute ? column.attribute : "No attribute selected"}]`,
//                                           fontSize: 10
//                                       }
//                                   ]
//                               }
//                     ]
//                 } as ContainerProps)
//         )
//     };
//     const titleHeader: RowLayoutProps = {
//         type: "RowLayout",
//         columnSize: "fixed",
//         backgroundColor: isDarkMode ? "#3B5C8F" : "#DAEFFB",
//         borders: true,
//         borderWidth: 1,
//         children: [
//             {
//                 type: "Container",
//                 padding: 4,
//                 children: [
//                     {
//                         type: "Text",
//                         content: "Data grid 2",
//                         fontColor: isDarkMode ? "#6DB1FE" : "#2074C8"
//                     }
//                 ]
//             }
//         ]
//     };
//     const headerFilters = {
//         type: "RowLayout",
//         columnSize: "fixed",
//         borders: true,
//         children: [
//             {
//                 type: "DropZone",
//                 property: values.filtersPlaceholder,
//                 placeholder: "Place filter widget(s) here"
//             } as DropZoneProps
//         ]
//     } as RowLayoutProps;
//     const headers: RowLayoutProps = {
//         type: "RowLayout",
//         columnSize: "fixed",
//         children: columnProps.map(column => {
//             const isColumnHidden = values.columnsHidable && column.hidable === "hidden";
//             const content: ContainerProps = {
//                 type: "Container",
//                 borders: true,
//                 grow: values.columns.length > 0 ? (column.width === "manual" && column.size ? column.size : 1) : undefined,
//                 backgroundColor: isColumnHidden ? (isDarkMode ? "#4F4F4F" : "#DCDCDC") : isDarkMode ? "#3E3E3E" : "#F5F5F5",
//                 children: [
//                     {
//                         type: "Container",
//                         padding: 8,
//                         children: [
//                             {
//                                 type: "Text",
//                                 bold: true,
//                                 fontSize: 10,
//                                 content: column.header ? column.header : "Header",
//                                 fontColor: column.header ? undefined : isColumnHidden ? (isDarkMode ? "#4F4F4F" : "#DCDCDC") : isDarkMode ? "#3E3E3E" : "#F5F5F5"
//                             }
//                         ]
//                     },
//                     ...(hasColumns && values.columnsFilterable
//                         ? [
//                               {
//                                   type: "DropZone",
//                                   property: column.filter,
//                                   placeholder: "Place filter widget here"
//                               } as DropZoneProps
//                           ]
//                         : [])
//                 ]
//             };
//             return values.columns.length > 0
//                 ? {
//                       type: "Selectable",
//                       object: column,
//                       grow: column.width === "manual" && column.size ? column.size : 1,
//                       child: {
//                           type: "Container",
//                           children: [content]
//                       }
//                   }
//                 : content;
//         })
//     };
//     const footer =
//         values.showEmptyPlaceholder === "custom"
//             ? [
//                   {
//                       type: "RowLayout",
//                       columnSize: "fixed",
//                       borders: true,
//                       children: [
//                           {
//                               type: "DropZone",
//                               property: values.emptyPlaceholder,
//                               placeholder: "Empty list message: Place widgets here"
//                           } as DropZoneProps
//                       ]
//                   } as RowLayoutProps
//               ]
//             : [];
//     return {
//         type: "Container",
//         children: [titleHeader, ...(values.showHeaderFilters && values.filterList.length > 0 ? [headerFilters] : []), headers, ...Array.from({ length: 5 }).map(() => columns), ...footer]
//     };
// };

// @ts-ignore
export function check(values: MendixMarkdownPreviewProps): Problem[] {
    const errors: Problem[] = [];
    // values.mdeToolbar.forEach((column: MdeToolbarPreviewType, index) => {
    //     if (column.mdeToolbarButtonActionType === "divider") {
    //         errors.push({
    //             property: `mdeToolbar/${index + 1}/mdeToolbarOptionCaption`,
    //             message: "Error 0!"
    //         });
    //     }
    // });

    return errors;
}
