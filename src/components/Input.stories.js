import React from "react";

import Input from "./Input";

export default {
  title: "Example/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  autoFocus: true,
  label: "Hola",
  required: true,
};
