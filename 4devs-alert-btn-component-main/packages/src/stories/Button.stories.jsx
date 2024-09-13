import React from "react";
import Button from "../components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    text: "Button Text",
    variant: "default",
    role: "Button role",
  },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: "Primary Button",
  variant: "primary",
  function: "test",
  role: "submit",
  arialabelledby: "4DEVS-Button",
  ariadescribedby: "Button built by 4DEVS ",
};
