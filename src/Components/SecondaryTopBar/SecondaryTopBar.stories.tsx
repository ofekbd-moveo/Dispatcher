import React from "react";
import { Meta, Story } from "@storybook/react";
import { SecondaryTopBar } from "./SecondaryTopBar";

export default {
  component: SecondaryTopBar,
  title: "Components/SecondaryTopBar",
} as Meta;

// args in TS way
const Template: Story<{ openFilterBarClickHandler: () => void }> = (args) => (
  <SecondaryTopBar {...args}></SecondaryTopBar>
);

const openFilterBarClickHandler = () => {
  setIsMenuOpen(true);
};

export const DEFAULT = Template.bind({});
DEFAULT.args = {
  openFilterBarClickHandler: openFilterBarClickHandler,
};

function setIsMenuOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
