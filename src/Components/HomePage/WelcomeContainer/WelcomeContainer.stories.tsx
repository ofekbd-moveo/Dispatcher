import { Meta, Story } from "@storybook/react";
import WelcomeContainer from "./WelcomeContainer";

// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: WelcomeContainer,
  title: "Components/WelcomeContainer",
} as Meta;

// Here we define the content we want to render
const Template: Story = () => <WelcomeContainer/>;

// Here we define variants
export const Welcome = Template.bind({});