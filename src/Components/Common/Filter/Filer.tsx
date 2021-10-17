import React from "react";
import DropDownFilter from "./DropDownFilter";
import dropDownArrow from "../../../images/dropDownArrow.svg";
import { FilterType } from "../../Common/types";

export interface IFilter {
  type: FilterType;
  category: string;
  filterOptions: string[];
}

const Filter: React.FC<IFilter> = (props: IFilter): JSX.Element => {
  const dropDownList = <DropDownFilter category={props.category} filterOptions={props.filterOptions} />;
  const optionList = <DropDownFilter category={props.category} filterOptions={props.filterOptions} />;

  switch (props.type) {
    case FilterType.DROPDWON_LIST:
      return dropDownList;

    case FilterType.OPTION_LIST:
      return optionList;
  }
};

export default Filter;
