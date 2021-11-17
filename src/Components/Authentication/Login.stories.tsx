import { Meta, Story } from "@storybook/react";
import { Login } from "./Login";

// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: Login,
  title: "Components/Login",
} as Meta;

// Here we define the content we want to render
const Template: Story = () => <Login />;

// Here we define variants
export const DEFAULT = Template.bind({});
