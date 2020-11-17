import React from "react";

import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {},
};

const Template = (args) => <Checkbox {...args} />;

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
  label: "Label",
  isChecked: false,
  disabled: false,
};
