import React from "react";
import AlertDialog from "../components/AlertDialog";

export default {
  title: "Components/AlertDialog",
  component: AlertDialog,
};

const Template = (args) => <AlertDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default Alert",
  body: "This is a default alert message.",
  btnText: "Open Alert",
  alertType: "default",
};

export const Success = Template.bind({});
Success.args = {
  title: "Success Alert",
  body: "This is a success alert message.",
  btnText: "Open Alert",
  alertType: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Warning Alert",
  body: "This is a warning alert message.",
  btnText: "Open Alert",
  alertType: "warning",
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary Alert",
  body: "This is a primary alert message.",
  btnText: "Open Alert",
  alertType: "primary",
};

export const Dark = Template.bind({});
Dark.args = {
  title: "Dark Alert",
  body: "This is a dark-themed alert message.",
  btnText: "Open Alert",
  alertType: "defaultDark",
};
