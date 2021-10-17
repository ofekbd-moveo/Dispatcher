import React from "react";
import {
  DropDownHeader,
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./DropDownFilterStyle";
import dropDownArrow from "../../../Utils/assets/dropDownArrow.svg";

export interface IDropDownFilter {
  category: string;
  filterOptions: string[];
}

const DropDownFilter: React.FC<IDropDownFilter> = (props: IDropDownFilter): JSX.Element => {
  const renderFilterOption = (options: string[]) => options.map((option: string) => <ListItem>{option}</ListItem>);

  return (
    <DropDownContainer>
      <DropDownHeader>
        <span>{props.category}</span>
        <img className="drop-down-arrow" src={dropDownArrow}></img>
      </DropDownHeader>
      <DropDownListContainer>
        <DropDownList>{renderFilterOption(props.filterOptions)}</DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  );
};

export default DropDownFilter;
