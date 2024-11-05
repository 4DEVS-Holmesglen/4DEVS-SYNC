<img src="./packages/src/assets/img/4DEVSLOGO.png" alt="4DEVSLogo" style="width:100%; height:300px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 3px 3px 5px #888;"> <br>

# SYNC COMPONENTS

Add some flair to your projects by trying our dazzling yet practical Button & Alert components! Built with user interactivity and accessibility in mind, choose from an array of themes/variant types pertaining to each level of action severity, along with customizable options to tailor and enhance the functionality of each component.

Check out our [documentation site](https://sync-documentation.onrender.com/) for visuals of our components.


## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Demo](#demo)

- [Props](#props)

- [Customization](#customization)

## Installation

Run either of these commands inside the terminal:

```bash
  $ npm install @holmesdev/sync
  $ yarn add @holmesdev/sync
```


> [!IMPORTANT]
> [Styled-components](https://styled-components.com/docs/basics#installation) is the JavaScript CSS library used to build our components. To ensure that they work as intended, you will need to separately install `styled-components` within both the `devDependencies` & `peerDependencies` inside of your `package.json` upon installation of the package.
>
> You <ins>MUST</ins> also ensure that you are:
> - Using React.js v18.3.1 or higher
> - Using styled-components v6.1.13 or higher

## Latest Package Version

| Name | Version |
| :--------------------------------------------------------------------------------: | :-----------------------------------------------: |
| [`@holmesdev/sync`](https://www.npmjs.com/package/sync-components) | [![NPM](https://img.shields.io/npm/v/:@holmesdev/sync/v/1.0.2)]()

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
import React, { useState } from 'react';
import { Button } from "@holmesdev/sync";

function Button({children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        children
        type="button"
        text="OK"
        variant="primary"
        onClick
      />
    <>
  );
};

export default Button;

_________________________________________________

//BUTTON VARIANT EXAMPLES:

<div>
 <Button text='Click Me' variant= "default">
  <Button text='Confirm' variant="primary">
    <Button text='Close' variant= "success">
     <Button text='OK' variant= "warning">
</div>
```
### Alert Component

An `Alert` box that appears on the page with a status notification or an action request. It comes with a selection of themes/statuses.

```js
import React, { useState } from 'react';
import { Alert, AlertDialog } from "@holmesdev/sync";

function Alert({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
  setIsOpen(!isOpen);

  // stopPropagation() stops an event from bubbling up any further up the DOM tree.
  // Overlay allows the user to click outside of the box to close it.

  return (
    <>
      <AlertOverlay isOpen={isOpen} onClick={toggleDialog}/>
        <AlertContainer onClick={(e) => e.stopPropagation()}/>
          <Alert
            children
            title="Confirm"
            body="Please confirm the request."
            status="primary"
          />
        </AlertContainer>
      </AlertOverlay>
    <>
  );
};

export default Alert;

____________________________________________________________________________________

//ALERT STATUS EXAMPLES:

<div>
  <Alert
    title="Warning!"
    body="Critical error"
    status="warning"
  />
  <Alert
    title="Congrats!"
    body="Your account has been created"
    status="success"
  />
<Alert
    title="Warning!"
    body="Critical error"
    status="warningDark"
  />
  <Alert
    title="Congrats!"
    body="Your account has been created"
    status="successDark"
  />
```
### AlertDialog

The role of `AlertDialog` is to "link" the `Alert` & `Button` components together, as well as toggling the visibility of the `Alert` on the page.

```js
  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  // stopPropagation() stops an event from bubbling up any further up the DOM tree.
  // Overlay allows the user to click outside of the box to close it.

  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggleDialog}>
        <Container onClick={(e) => e.stopPropagation()}>
          <Alert
            title="Your account will be deleted permanently!"
            body="Are you sure you want to proceed?"
            status="warning"
          />
        </Container>
      </Overlay>
    </>
  );
```
## Demo

Here's a basic demonstration of how all of our components work together:

```js
import React, { useState } from 'react';
import { Button, Alert, AlertDialog } from "@holmesdev/sync";

function Example({children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        children
        type="button"
        text="Yes, delete my account"
        variant="warning"
        onClick={toggleDialog}
      />

      <AlertOverlay isOpen={isOpen} onClick={toggleDialog}>
        <AlertContainer onClick={(e) => e.stopPropagation()}>
          <Alert
            title="Your account will be deleted permanently!"
            body="Are you sure you want to proceed?"
            status="warning"
          />
        </AlertContainer>
      </AlertOverlay>
    </>
  );
};

export default Example;
```
## Props

### Button

- `text` (string, <ins>required</ins>): Action text displayed inside the `Button`
- `children` (string, <ins>required</ins>): Specifies the `Button`'s child elements
- `variant` (enum, <ins>required</ins>): Specifies the visual theme – ["default", "primary", "success", "warning"]
- `hoverColor` (string, optional): Specifies the `Button`'s color when it is hovered over with the mouse
- `onClick` (function, optional): An event handler that executes a function when the Button is clicked
- `type` (enum, optional): Specifies the action that will occur when clicked – ["button", "submit", "reset"]

### Alert

- `title` (string, <ins>required</ins>): Title text displayed inside the `Alert`
- `body` (string, <ins>required</ins>): Body text displayed inside the `Alert`
- `status` (enum, <ins>required</ins>): Specifies the visual theme – ["default", "primary", "success", "warning","defaultDark", "primaryDark", "successDark", "warningDark"]

### AlertDialog

- `title` (string, <ins>required</ins>): Title text displayed inside the component
- `body` (string, <ins>required</ins>): Body text displayed inside the component
- `children` (string, <ins>required</ins>): Specifies the child elements of the component
- `status` (enum, <ins>required</ins>): Specifies the visual theme – ["default", "primary", "success", "warning","defaultDark", "primaryDark", "successDark", "warningDark"]
- `btnColor` (string, <ins>required</ins>): Specifies the `Button`'s color
- `buttonVariant` (enum, <ins>required</ins>): Specifies the `Button`'s variant – ["default", "primary", "success", "warning"]
- `isOpen` (boolean, optional): If “true”, the component is open – If "false", the component isn't open
- `onClose` (function, optional): Called when the component is closed

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
- `variant` & `status` need to be specified inside your code, and no further CSS customization is necessary

## Accessibility

Each component has an `aria-label` and `title` to meet basic accessibility standards.

## License



[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/4DEVS-Holmesglen/4DEVS-SYNC/blob/main/MIT%20License)

Available for open-source consumption under MIT licensing. See [MIT License](https://github.com/4DEVS-Holmesglen/Sync-test/blob/main/MIT%20License) for more information.
