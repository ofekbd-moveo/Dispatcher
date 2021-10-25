import React from "react";
import DropDownFilter from "./DropDownFilter";
import { FilterType, SideBarFilterType } from "../../Common/types";
import { SideBarFilter } from "./SideBarFilter";

export interface IFilter {
  type: FilterType;
  category: string;
  filterOptions: string[];
  isFilterMenuOpen?: boolean;
  closeFilterBarClickHandler?: () => void;
}

const Filter: React.FC<IFilter> = (props: IFilter): JSX.Element => {
  const dropDownList = <DropDownFilter category={props.category} filterOptions={props.filterOptions} />;
  const optionList = (
    <SideBarFilter
      type={SideBarFilterType.FILTER_LIST}
      title={props.category}
      optionsList={props.filterOptions}
      isFilterMenuOpen={props.isFilterMenuOpen as boolean}
      closeFilterBarClickHandler={props.closeFilterBarClickHandler as () => void}
    />
  );
  switch (props.type) {
    case FilterType.DROPDWON_LIST:
      return dropDownList;

    case FilterType.OPTION_LIST:
      return optionList;
  }
};

export default Filter;
