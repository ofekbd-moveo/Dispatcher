import { Meta, Story } from "@storybook/react";
import { SideBarFilterType } from "../types";
import { ISideBarFilter, SideBarFilter } from "./SideBarFilter";

export default {
  component: SideBarFilter,
  title: "Components/SideBarFilter",
} as Meta;

const Template: Story<ISideBarFilter> = (args) => <SideBarFilter {...args} />;

const filterByMock = { "Search in": ["Everything"], Sources: [], Language: [], Dates: [] };

export const FILTER_LIST = Template.bind({});
FILTER_LIST.args = {
  type: SideBarFilterType.FILTER_LIST,
  title: "FILTER",
  optionsList: ["Search in", "Sources", "Language", "Dates"],
  filterBy: filterByMock, //{sources:[], country: [] }
};

export const FILTER = Template.bind({});
FILTER.args = {
  type: SideBarFilterType.FILTER,
  title: "Sources",
  optionsList: ["CBS", "NBC", "Sport 1", "Ynet", "Walla"],
};
