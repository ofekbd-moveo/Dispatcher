import { Meta, Story } from "@storybook/react";
import TopBar from "./TopBar";

export default {
  component: TopBar,
  title: "Components/TopBar",
} as Meta;

// args in TS way
const Template: Story<{}> = (args) => <TopBar {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {};
