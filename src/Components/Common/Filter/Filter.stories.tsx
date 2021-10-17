import React from "react";
import { Meta, Story } from "@storybook/react";
import Filter, { IFilter } from "./Filer";
import { FilterType } from "../../Common/types";

// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: Filter,
  title: "Components/Filter",
} as Meta;

// args in TS way
const Template: Story<IFilter> = (args) => <Filter {...args} />;
const countries: string[] = ["Israel", "France", "London", "Germany", "Greece"];

export const DROPDOWN = Template.bind({});
DROPDOWN.args = {
  type: FilterType.DROPDWON_LIST,
  category: "country",
  dataList: countries,
};

export const OPTION_LIST = Template.bind({});
OPTION_LIST.args = {
  type: FilterType.OPTION_LIST,
  category: "country",
  dataList: ["Israel", "Paris", "London"],
};
