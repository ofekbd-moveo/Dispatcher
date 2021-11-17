import { Meta, Story } from "@storybook/react";
import { WelcomePage } from "./WelcomePage";

export default {
  component: WelcomePage,
  title: "Components/WelcomePage",
} as Meta;

// Here we define the content we want to render
const Template: Story = () => <WelcomePage />;

// Here we define variants
export const DEFAULT = Template.bind({});
