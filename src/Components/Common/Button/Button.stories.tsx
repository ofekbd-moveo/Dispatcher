import React from "react";
import { Meta, Story } from "@storybook/react";
import ButtonContainer, { IButton } from "./ButtonContainer";
import { buttonType } from "../../Common/types";
// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: ButtonContainer,
  title: "Components/Button",
} as Meta;

// args in TS way
const Template: Story<IButton> = (args) => <ButtonContainer {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
  className: undefined,
  withArrow: true,
  content: "DEFAULT",
  onClickHander: () => console.log("DEFAULT clicked!"),
};

export const PRIMERY = Template.bind({});
PRIMERY.args = {
  className: buttonType.PRIMARY,
  withArrow: true,
  content: "PRIMERY",
  onClickHander: () => console.log("PRIMERY clicked!"),
};

export const SECONDERY = Template.bind({});
SECONDERY.args = {
  className: buttonType.SECONDARY,
  withArrow: false,
  content: "SECONDERY",
  onClickHander: () => console.log("SECONDERY clicked!"),
};

export const TEXT = Template.bind({});
TEXT.args = {
  className: buttonType.TEXT,
  withArrow: false,
  content: "TEXT",
  onClickHander: () => console.log("TEXT clicked!"),
};
