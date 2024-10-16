import React from "react";
import AlertDialog from "../components/AlertDialog/AlertDialog";

export default {
  title: "Components/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => <AlertDialog {...args} />;

export const Default = Template.bind({});
Default.args = {};
