import { Meta, Story } from "@storybook/react";
import { DispacherPage } from "./DispatcherPage";

export default {
  component: DispacherPage,
  title: "Components/DispacherPage",
} as Meta;

// Here we define the content we want to render
const Template: Story = () => <DispacherPage />;

// Here we define variants
export const DEFAULT = Template.bind({});
