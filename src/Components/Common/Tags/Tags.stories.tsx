import React from "react";
import { Meta, Story } from "@storybook/react";
import TagList from "./TagList";

// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: TagList,
  title: "Components/TagList",
} as Meta;

// args in TS way
const Template: Story<{ tags: string[] }> = (args) => <TagList {...args}></TagList>;
const tagsMock: string[] = ["#Covid-19", "Israel", "+2"];

export const DEFAULT = Template.bind({});
DEFAULT.args = {
  tags: tagsMock,
};
