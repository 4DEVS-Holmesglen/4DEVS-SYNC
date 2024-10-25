import React from "react";
import Alert from "../components/Alert/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    title: "Default Alert Title",
    body: "This is the default alert body.",
    status: "primary",
  },
};

const Template = (args) => <Alert {...args} />;

export const DefaultAlert = Template.bind({});
DefaultAlert.args = {
  title: "Title: Operation Successful",
  body: "Alert Alert: System malfunction detected. Immediate attention required. Failure to address may result in critical errors.",
  status: "primary",
};
