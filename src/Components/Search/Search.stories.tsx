import React from "react";
import { Meta, Story } from "@storybook/react";
import Search from "./Search";

// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: Search,
  title: "Components/Search",
} as Meta;

// args in TS way
const Template: Story<{}> = (args) => <Search {...args}></Search>;

export const DEFAULT = Template.bind({});
DEFAULT.args = {};
