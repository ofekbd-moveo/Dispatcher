import { Meta, Story } from "@storybook/react";
import TopBar from "./TopBar";

export default {
  component: TopBar,
  title: "Components/TopBar",
} as Meta;

// args in TS way
const Template: Story<{ openSearchBarClickHandler: () => void }> = (args) => <TopBar {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
  openSearchBarClickHandler: openSearchBarClickHandler(),
};
function openSearchBarClickHandler(): () => void {
  throw new Error("Function not implemented.");
}
