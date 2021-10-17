import React from "react";
import DropDownFilter from "./DropDownFilter";
import dropDownArrow from "../../../images/dropDownArrow.svg";
import { FilterType } from "../../Common/types";

export interface IFilter {
  type: FilterType;
  category: string;
  dataList: string[];
}

const Filter: React.FC<IFilter> = (props: IFilter): JSX.Element => {
  const dropDwonList = <DropDownFilter category={props.category} dataList={props.dataList} />;

  const optionList = <DropDownFilter category={props.category} dataList={props.dataList} />;

  switch (props.type) {
    case FilterType.DROPDWON_LIST:
      return dropDwonList;

    case FilterType.OPTION_LIST:
      return optionList;
  }
};

export default Filter;
