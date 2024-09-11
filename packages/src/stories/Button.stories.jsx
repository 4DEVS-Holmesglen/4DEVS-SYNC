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
  },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: "Primary Button",
  variant: "primary",
};
