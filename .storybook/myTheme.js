// YourTheme.js

import { create } from "@storybook/theming/create";

export default create({
  base: "dark",

  colorPrimary: "silver",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "silver",
  appContentBg: "silver",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "white",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "silver",
  barBg: "silver",

  // Form colors
  inputBg: "silver",
  inputBorder: "silver",
  inputTextColor: "white",
  inputBorderRadius: 4,

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: "https://placehold.it/350x150",
});
