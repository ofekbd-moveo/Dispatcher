import React, { useState } from "react";
import assets from "../../../Utils/assets";
import {
  DropDownHeader,
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./DropDownFilterStyle";

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
        <img className="drop-down-arrow" src={assets.dropDownArrow}></img>
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
