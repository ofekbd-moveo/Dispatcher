import { Meta, Story } from "@storybook/react";
import { HomePage } from "./HomePage";

export default {
  component: HomePage,
  title: "Components/HomePage",
} as Meta;

// Here we define the content we want to render
const Template: Story = () => <HomePage />;

// Here we define variants
export const DEFAULT = Template.bind({});
