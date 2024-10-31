<img src="./packages/src/assets/img/4DEVSLOGO.png" alt="4DEVSLogo" style="width:100%; height:300px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 3px 3px 5px #888;"> <br>

# SYNC

## Table

- [Installation](#installation)

- [Examples](#example)

- [Customization](#customization)

- [About](#about)

- [Demos](#demos)

## Installation

To install, you can use [npm](https://www.npmjs.com/package/react-handy-modal) or [yarn](https://www.npmjs.com/package/react-handy-modal):

- `npm install  ` or `yarn add `.

```sh
  $ npm install synch-components
  $ yarn add synch-components
```

## Packages

You can install the latest version by using:
| Name | Version |
| :-------------------------------------------------------------------------------- | :-----------------------------------------------: |
| [`synch-components`](https://www.npmjs.com/package/synch-components) | [[1.0.1](https://www.npmjs.com/package/synch-components) ] |

## Example

Here is a simple example of synch-components being used in an app with some custom styles and focusable input elements within the modal content:

## Button Component

A customizable and responsive button component built with styled-components that supports different variants, type, and more.

## Usage

```js
import { Button } from "./packages/src/components/Button/Button.jsx";
```

## Use as a component:

```js
<div>
 <Button text='Click Me' variant= "default">
   <Button text='Click Me' variant="primary">
    <Button text='Click Me' variant= "success">
     <Button text='Click Me' variant= "warning">
</div>
```

## Props

<!-- Button Component -->

The `Button` component accepts the following props:

- `text` (string, required): The text to be displayed inside the button.

- `onClick` (function, optional): A function to be executed when the button is clicked.

- `variant` (enum, required): specifies the visual style of the button based on the theme or use case (e.g., primary, success, warning).

- `type` (enum, required): Specifies the button type attribute, which affects the behavior of the button in forms.

## Customization Options

Here are the customization options for the modal:

### Variant (Required):

- default: A 4DEVS style button with a black background and gradient border.
- primary: For primary actions.
- success: For positive actions.
- warning: For warning actions.

## Alert Component

A versatile Alert component designed with customizable styles, title and text. This component supports various visual themes, including light and dark modes, and can be used to display important messages, warnings, or success notifications.

## Usage

```js
import { Alert } from "./packages/src/components/Alert/Alert.jsx";
```

## Use as a component:

```js
<div>
  <Alert
    title="Default!"
    body="Your operation completed successfully."
    type="default"
  />

  <Alert
    title="Primary Alert!"
    body="Your operation completed successfully."
    type="primary"
  />

  <Alert
    title="Success Alert!"
    body="Your operation completed successfully."
    type="success"
  />

  <Alert
    title="Warning Alert!"
    body="Your operation completed successfully."
    type="warning"
  />

  <Alert
    title="Default Dark!"
    body="Your operation completed successfully."
    type="defaultDark"
  />

  <Alert
    title="Primary Dark!"
    body="Your operation completed successfully."
    type="primaryDark"
  />

  <Alert
    title="Success Dark!"
    body="Your operation completed successfully."
    type="successDark"
  />

  <Alert
    title="Warning Dark!"
    body="There was an issue processing your request."
    type="warningDark"
  />
</div>
```

## Props

<!-- Alert Component -->

The `Alert` component accepts the following props:

- `title` (string, required): The title text to be displayed in the alert.
- `body` (string, required): The main message body of the alert.
- `type` (enum, required): Determines the visual theme of the alert. Can be one of "default", "primary", "success", "warning", "defaultDark", "primaryDark", "successDark", "warningDark".

## Customization Options

Here are the customization options for the modal:

## Themes

`Light Themes`

- `default`: 4Devs theme with a colorful gradient border and white background.
- `primary`: Blue-themed alert with a white background.
- `success`: Green-themed alert for success messages with a white background.
- `warning`: Red-themed alert for warnings with a white background.

`Dark Themes`

- `defaultDark`: 4Devs theme with a gradient border and black background.
- `primaryDark`: Blue-themed alert with a black background.
- `successDark`: Green-themed alert with a black background.
- `warningDark`: Red-themed alert with a black background.

## AlertDialog Component

A quick and easy way to pop up an alert in your app. The AlertDialog uses a onClick Button to trigger an Alert within a styled modal.

## Usage

```js
import { AlertDiglog } from "./packages/src/components/AlertDialog/AlertDialog.jsx";

function AlertDialog({}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button text="Click Me" variant="primary" onClick={toggleDialog} />

      <AlertOverlay isOpen={isOpen} onClick={toggleDialog}>
        <AlertContainer onClick={(e) => e.stopPropagation()}>
          <Alert
            title="Alert!!!!"
            body="This is a alert—check it out! This is a alert—check it out!"
            type="primary"
          />
        </AlertContainer>
      </AlertOverlay>
    </>
  );
}
```

## How AlertDialog Works

Button: When clicked, it toggles the visibility of the modal.
Alert: Displays the title and body of the alert inside the modal.
Overlay: Click outside the alert to close the modal.

## Demos

Example of how all component works together

```js
import { Alert } from "./packages/src/components/Alert/Alert.jsx";
import { AlertDialog } from "./packages/src/components/AlertDialog/AlertDialog.jsx";
import { Button } from "./packages/src/components/Button/Button.jsx";

const Sample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button text="Click Me" variant="primary" onClick={toggleDialog} />

      <AlertOverlay isOpen={isOpen} onClick={toggleDialog}>
        <AlertContainer onClick={(e) => e.stopPropagation()}>
          <Alert
            title="Alert!!!!"
            body="This is an alert—check it out!"
            type="primary"
          />
        </AlertContainer>
      </AlertOverlay>
    </>
  );
};

export default Sample;
```

## Contributors

Thanks goes to these wonderful people.......
