import { Meta, Story } from "@storybook/react";
import StyleDivider from "./StyleDivider";

// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: StyleDivider,
  title: "Components/Divider",
} as Meta;

// Here we define the content we want to render
const Template: Story = () => <StyleDivider/>;

// Here we define variants
export const PrimaryDivider = Template.bind({});