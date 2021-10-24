import { Meta, Story } from "@storybook/react";
import { DispatcherPage } from "./DispatcherPage";

export default {
  component: DispatcherPage,
  title: "Components/DispatcherPage",
} as Meta;

// Here we define the content we want to render
const Template: Story = () => <DispatcherPage />;

// Here we define variants
export const DEFAULT = Template.bind({});
