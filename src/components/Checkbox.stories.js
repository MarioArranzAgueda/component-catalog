import React from "react";

import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
  label: "Label",
  isChecked: false,
  disabled: false,
};
export const CheckboxRightLabel = Template.bind({});
CheckboxRightLabel.args = {
  label: "Label",
  labelDirection: "right",
  isChecked: false,
  disabled: false,
};
