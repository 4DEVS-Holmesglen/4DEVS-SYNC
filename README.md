# SYNC COMPONENTS

Add some flair to your projects by trying our dazzling yet practical Button & Alert components! Built with user interactivity and accessibility in mind, choose from an array of themes/variant types pertaining to each level of action severity, along with customizable options to tailor and enhance the functionality of each component.

Check out our [documentation site](https://sync-documentation.onrender.com/) for visuals of our components.

## Table of Contents (Sticky)

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Customization](#customization)

## Installation

Run either of these commands inside the terminal:

```bash
  $ npm install @holmesdev/sync
  $ yarn add @holmesdev/sync
```

> [!IMPORTANT] > [Styled-components](https://styled-components.com/docs/basics#installation) is the JavaScript CSS library used to build our components. To ensure that they work as intended, you will need to separately install `styled-components` within both the `devDependencies` & `peerDependencies` inside of your `package.json` upon installation of the package.
>
> You <ins>MUST</ins> also ensure that you are:
>
> - Using React.js v18.3.1 or higher
> - Using styled-components v6.1.13 or higher

## Latest Package Version

|                                Name                                |                         Version                          |
| :----------------------------------------------------------------: | :------------------------------------------------------: |
| [`@holmesdev/sync`](https://www.npmjs.com/package/@holmesdev/sync) | ![NPM](https://img.shields.io/npm/v/@holmesdev/sync.svg) |

Install the latest package version if required:

```bash
  $ npm install @holmesdev/sync@latest
  $ yarn add @holmesdev/sync@latest
```

## Usage

Import the components (together or separately, depending on usage) inside your project:

```js
import { Button, Alert, AlertDialog } from "@holmesdev/sync";
```

### Button Component

A `Button` that allows the user to trigger an action when clicked. It comes with a selection of themes/variants.

```js
import { Button }  from "@holmesdev/sync";

<Button
  variant="primary"
  hoverColor="#1f56ec"
  path="https://sync-documentation.onrender.com/"
>
  Click Me
</Button>

_________________________________________________

//BUTTON STATUS EXAMPLES:

<Button
  variant="success"
  hoverColor="#1cd560"
  type = "submit"
>
  Success Action
</Button>
```

### Alert Component

An `Alert` box that appears on the page with a status notification or an action request. It comes with a selection of themes/statuses.

```js
import { Alert } from "@holmesdev/sync";

<Alert
  title="Success!"
  body="Your action was completed successfully."
  status="success"
/>

________________________________________________

//ALERT STATUS EXAMPLES:

<div>

// Success Alert
<Alert
  title="Success!"
  body="Your action was completed successfully."
  status="success"
/>

// Error Alert
<Alert
  title="Error!"
  body="Something went wrong. Please try again."
  status="error"
/>

// Warning Alert
<Alert
  title="Warning!"
  body="Be careful! This action could have consequences."
  status="warning"
/>
```

### AlertDialog Component

The role of `AlertDialog` is to "link" the `Alert` & `Button` components together, as well as toggling the visibility of the `Alert` on the page.

```js
import { AlertDialog } from "@holmesdev/sync";

<AlertDialog
  title="Success!"
  body="Your action was completed successfully."
  status="success"
  buttonVariant="success"
  btnColor="#28a745"
  hoverColor="#218838"
>
  Show Success
</AlertDialog>

________________________________________________

//ALERTDIALOG STATUS EXAMPLES:

<AlertDialog
  title="Error"
  body="Something went wrong. Please try again."
  status="danger"
  buttonVariant="warning"
  btnColor="#dc3545"
  hoverColor="#c82333"
>
  Show Error
</AlertDialog>
```

## Props

### Button Component

| Prop         | Type       | Required | Description                                                                         |
| :----------- | :--------- | :------- | :---------------------------------------------------------------------------------- |
| `children`   | `string`   | Yes      | Text or content inside the `Button`.                                                |
| `variant`    | `string`   | No       | `Button` style. Options: `default`, `primary`, `success`, `warning`.                |
| `hoverColor` | `string`   | No       | Color displayed on hover.                                                           |
| `path`       | `string`   | No       | URL path if the button is used as a link.                                           |
| `type`       | `string`   | No       | `Button` type attribute. Options: `button`, `submit`, `reset`. Default is `button`. |
| `onClick`    | `function` | Yes      | Callback function for the button click event.                                       |

### Alert Component

| Prop     | Type     | Required | Description                                                                                                                  |
| :------- | :------- | :------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `title`  | `string` | Yes      | Content to be displayed inside the `Alert`.                                                                                  |
| `status` | `string` | Yes      | Alert type. Options: `default`, `primary`, `success`, `warning`, `defaultDark`, `primaryDark`, `successDark`, `warningDark`. |
| `body`   | `string` | Yes      | Body text displayed inside the `Alert`.                                                                                      |

### AlertDialog Component

| Prop            | Type       | Required | Description                                                                                                                                       |
| :-------------- | :--------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`         | `string`   | Yes      | Title text displayed inside the component.                                                                                                        |
| `body`          | `string`   | Yes      | Body text displayed inside the component.                                                                                                         |
| `children`      | `string`   | Yes      | The child elements of the button component.                                                                                                       |
| `btnColor`      | `string`   | Yes      | Specifies the `X close button`'s color.                                                                                                           |
| `ariaLabel`     | `string`   | No       | Accessibility label for screen readers, describing the purpose of the dialog.                                                                     |
| `status`        | `enum`     | Yes      | Specifies the visual theme – Options: `["default", "primary", "success", "warning", "defaultDark", "primaryDark", "successDark", "warningDark"]`. |
| `buttonVariant` | `enum`     | Yes      | Specifies the `Button`'s variant – Options: `["default", "primary", "success", "warning"]`.                                                       |
| `isOpen`        | `boolean`  | No       | If `true`, the component is open; if `false`, the component isn't open.                                                                           |
| `onClose`       | `function` | No       | Called when the component is closed.                                                                                                              |

## Themes

### Light Themes

- `default`: Gradient border with a white background
- `primary`: Blue border with a white background
- `success`: Green border with a white background
- `warning`: Red border with a white background

### Dark Themes

- `defaultDark`: Gradient border with a black background
- `primaryDark`: Blue border with a black background
- `successDark`: Green border with a black background
- `warningDark`: Red border with a black background

## Customization

- `title` & `body` text is customizable for each component
- `variant` & `status` need to be specified, with no further CSS customization being necessary

## Accessibility

- ARIA attributes implemented
- Color contrast compliant

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/4DEVS-Holmesglen/4DEVS-SYNC/blob/main/MIT%20License)

Available for open-source consumption under MIT licensing. See [MIT License](https://github.com/4DEVS-Holmesglen/Sync-test/blob/main/MIT%20License) for more information.
