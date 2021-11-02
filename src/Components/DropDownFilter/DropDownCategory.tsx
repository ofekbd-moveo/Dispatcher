import { useState } from "react";
import assets from "../../Utils/assets";
import { IDropDownCategory } from "../types";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "./DropDownFilterStyle";

export const DropDownCategory = (props: IDropDownCategory) => {
  const { currCategory, setCategory, categories } = props;
  const [isOpen, setIsOpen] = useState(false);

  const selectedClickHandler = (category: string) => {
    setCategory(category);
    setIsOpen(!isOpen);
  };

  const renderCategories = (categories: string[]) =>
    categories.map((category: string, key: number) => (
      <ListItem key={key} onClick={() => selectedClickHandler(category)}>
        {category}
      </ListItem>
    ));

  return (
    <DropDownContainer>
      <DropDownHeader onClick={() => setIsOpen(!isOpen)}>
        <span>{currCategory}</span>
        <img className="drop-down-arrow" src={assets.dropDownArrow}></img>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>{renderCategories(categories)}</DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};
