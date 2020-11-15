import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import MyTheme from "./myTheme";

addons.setConfig({
  theme: MyTheme,
});
