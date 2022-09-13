## MendixMarkdown

Mendix Markdown viewer and editor to use as a custom widget within Mendix projects. This is a continuation of the now deprecated [Mendix Markdown viewer](https://github.com/mendixlabs/mendix-markdown-viewer) by @JelteMX. Uses EasyMDE with the simplemde-react wrapper.

## Features

-   Markdown viewer and editor combined.
-   Set read only mode through an expression where you can use dataview objects.
-   Fully customizable toolbar where icons can be added or default icons can be hidden.
-   Allows you to set a domRef allowing you to manipulate the field from outside the widget.
-   Custom rendering options available to create custom Markdown.

## Usage

### Toolbar

By default, the following options are enabled on the toolbar. Hide them by adding them to the 'Buttons to hide' field, separated by spaces.

```
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
```

You can also define more buttons on the toolbar.

-   Add a normal 'replace' option, adding content to the left and right hand side of the current selection.
-   Add an Action, creating a button triggering any Mendix action.
-   Add additional dividers

Set the position to add the button to a specific position on the toolbar. Note that buttons are added in order to the index will change accordingly.

### Options

The Options tab allows you to set configuration options as defined by EasyMDE. Some default options are defined within the widget but most EasyMDE options are accessible as custom options. Refer to the [EasyMDE](https://github.com/Ionaru/easy-markdown-editor#configuration) GitHub page for more references. Currently the widget doesn't support nested options (e.g. `blockStyles` contains configuration for `bold`, `code` and `italic`).

### DOMEventListener

The Markdown widgets adds a custom event listener to the document.body. You can fire a custom event from a nanoflow to add Markdown to the editor. Firing this event will insert Markdown at the last known cursor position. The DOMEventListener field in the widget properties adds an ID to the Markdown field. If you use multiple Markdown widgets on the same page, this should be unique. The event listener is constructed as follows: `changeMarkdown + domEventListener`, so if you leave it empty it will
listen to the `changeMarkdown` event.

#### Firing the event

```
const event = new CustomEvent('changeMarkdown' + domEventListener, { detail: content });
document.body.dispatchEvent(event);
```

### Rendering custom Markdown

The rendering is both called from the Preview button and when the ReadOnly boolean is false. This allows you to add custom Markdown options to your editor/viewer. The Markdown is found using the Tag start and Tag end fields. When found, it wraps the remaining content in the Html start and Html end tags.

Optionally, you can add a Preview tag to search within the remaining content which content you want to show within the preview. This is useful if you have more options in the Markdown editor than is needed for the preview.

#### Example

Custom button Markdown

```
::: Button
Url: https://www.example.org/

!!! Text !!!
:::
```

-   Render option name: button
-   Type: Block
-   Tag start: ::: Button
-   Tag end: :::
-   Html start: &lt;button class="btn btn-primary">
-   Html end: &lt;/button>
-   Preview tag: !!!

## Demo project

Demo project is included in ./tests/testProject/

## Issues, suggestions and feature requests

[GitHub page](https://github.com/Maismaus/Mendix-Markdown-React)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`.
1. Run `npm run dev` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
    - testProject is included but it is recommended to use an external test project because the Mendix project cannot rerun while npm is running. Create an .env in the parent direct with the following content to link to an external project directory: `MX_PROJECT_PATH="C:\\Users\\You\\Documents\\Mendix\\Your Mendix Project-main"`
