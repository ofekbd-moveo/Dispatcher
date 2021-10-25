import React from "react";
import { Meta, Story } from "@storybook/react";
import { ISreachSmallScreen, SearchSmallScreen } from "./SearchSmallScreen";

export default {
  component: SearchSmallScreen,
  title: "Components/SearchSmallScreen",
} as Meta;

// args in TS way
const Template: Story<ISreachSmallScreen> = (args) => <SearchSmallScreen {...args}></SearchSmallScreen>;
const recentSearchesMock = ["crypto", "soccer", "soc", "asddsf"];
const closeSearchBarClickHandler = () => {
  setIsMenuOpen(false);
};

export const DEFAULT = Template.bind({});
DEFAULT.args = {
  recentSearches: recentSearchesMock,
  isMenuOpen: false,
  closeSearchBarClickHandler: closeSearchBarClickHandler,
};

function setIsMenuOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
