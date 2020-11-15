import React from "react";

import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const WithoutValue = Template.bind({});
WithoutValue.args = {
  value: "",
  placeholder: "",
  autoFocus: false,
  label: "Name",
  required: false,
};
export const WithValue = Template.bind({});
WithValue.args = {
  value: "John Doe",
  placeholder: "",
  autoFocus: false,
  label: "Name",
  required: false,
};
