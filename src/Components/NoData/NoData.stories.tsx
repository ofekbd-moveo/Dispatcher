import { Meta, Story } from "@storybook/react";
import { NoDataType } from "../types";
import { NoData } from "./NoData";

export default {
  component: NoData,
  title: "Components/NoData",
} as Meta;

// Here we define the content we want to render
const Template: Story<{ type: NoDataType }> = (args) => <NoData {...args} />;

// Here we define variants
export const DEFAULT = Template.bind({});
DEFAULT.args = {
  type: NoDataType.TEXTUAL,
};
