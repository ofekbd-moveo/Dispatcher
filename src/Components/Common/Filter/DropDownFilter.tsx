import React from "react";
import {
  DropDownHeader,
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./DropDownFilterStyle";
import dropDownArrow from "../../../images/dropDownArrow.svg";

export interface IDropDownFilter {
  category: string;
  dataList: string[];
}

const DropDownFilter: React.FC<IDropDownFilter> = (props: IDropDownFilter): JSX.Element => {
  return (
    <DropDownContainer>
      <DropDownHeader>
        <span>{props.category}</span>
        <img className="drop-down-arrow" src={dropDownArrow}></img>
      </DropDownHeader>
      <DropDownListContainer>
        <DropDownList>
          {props.dataList.map((option) => (
            <ListItem>{option}</ListItem>
          ))}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  );
};

export default DropDownFilter;
