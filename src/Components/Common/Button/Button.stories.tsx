import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, {IButton} from "./Button";
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
  withArrow: true,
  content: "DEFAULT",
  link: ""
};

export const PRIMERY = Template.bind({});
PRIMERY.args = {
  className: buttonType.PRIMARY,
  withArrow: true,
  content: "PRIMERY",
  link: ""
};

export const SECONDERY = Template.bind({});
SECONDERY.args = {
  className: buttonType.SECONDARY,
  withArrow: false,
  content: "SECONDERY",
  link: ""
};

export const TEXT = Template.bind({});
TEXT.args = {
  className: buttonType.TEXT,
  withArrow: false,
  content: "TEXT",
  link: ""
};
