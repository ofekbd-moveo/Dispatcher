import React from "react";
import {
  DropDownHeader,
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./DropDownFilterStyle";
import dropDownArrow from "../../../Utils/assets/dropDownArrow.svg";
import { nextKeyIndex } from "../../../Utils/HelpFunctions/generators";

export interface IDropDownFilter {
  category: string;
  filterOptions: string[];
}

const DropDownFilter: React.FC<IDropDownFilter> = ({ category, filterOptions }: IDropDownFilter): JSX.Element => {
  const renderFilterOption = (options: string[]) =>
    options.map((option: string) => <ListItem key={nextKeyIndex()}>{option}</ListItem>);

  return (
    <DropDownContainer>
      <DropDownHeader>
        <span>{category}</span>
        <img className="drop-down-arrow" src={dropDownArrow}></img>
      </DropDownHeader>
      <DropDownListContainer>
        <DropDownList>{renderFilterOption(filterOptions)}</DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  );
};

export default DropDownFilter;
