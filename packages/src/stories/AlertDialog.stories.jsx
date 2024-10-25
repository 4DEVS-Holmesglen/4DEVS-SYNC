import React from "react";
import AlertDialog from "../components/AlertDialog/AlertDialog";

export default {
  title: "Components/AlertDialog",
  component: AlertDialog,
};

const Template = (args) => <AlertDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default Alert",
  body: "This is a default alert message.",
};

export const Success = Template.bind({});
Success.args = {
  title: "Success Alert",
  body: "This is a success alert message.",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Warning Alert",
  body: "This is a warning alert message.",
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary Alert",
  body: "This is a primary alert message.",
};

export const Dark = Template.bind({});
Dark.args = {
  title: "Dark Alert",
  body: "This is a dark-themed alert message.",
};
