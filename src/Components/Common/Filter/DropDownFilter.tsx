import React, { useState } from "react";
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

const DropDownFilter: React.FC<IDropDownFilter> = ({ category, filterOptions }: IDropDownFilter): JSX.Element => {
  const renderFilterOption = (options: string[]) =>
    options.map((option: string, key: number) => <ListItem key={key}>{option}</ListItem>);

  const [isOpenOptions, setIsOpenOptions] = useState(false);

  return (
    <DropDownContainer>
      <DropDownHeader onClick={() => setIsOpenOptions(!isOpenOptions)}>
        <span>{category}</span>
        <img className="drop-down-arrow" src={dropDownArrow}></img>
      </DropDownHeader>
      {isOpenOptions && (
        <DropDownListContainer>
          <DropDownList>{renderFilterOption(filterOptions)}</DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default DropDownFilter;
