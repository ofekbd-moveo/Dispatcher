import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { IButton } from "./Button";
import { buttonType } from "../../Common/types";
// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

// args in TS way
const Template: Story<IButton> = (args) => <Button {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
  className: undefined,
  isArrowVisible: true,
  content: "DEFAULT",
  onClickHander: () => console.log("DEFAULT clicked!"),
};

export const PRIMERY = Template.bind({});
PRIMERY.args = {
  className: buttonType.PRIMARY,
  isArrowVisible: true,
  content: "PRIMERY",
  onClickHander: () => console.log("PRIMERY clicked!"),
};

export const SECONDERY = Template.bind({});
SECONDERY.args = {
  className: buttonType.SECONDARY,
  isArrowVisible: false,
  content: "SECONDERY",
  onClickHander: () => console.log("SECONDERY clicked!"),
};

export const TEXT = Template.bind({});
TEXT.args = {
  className: buttonType.TEXT,
  isArrowVisible: false,
  content: "TEXT",
  onClickHander: () => console.log("TEXT clicked!"),
};
