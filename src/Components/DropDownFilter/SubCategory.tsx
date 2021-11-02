import { useState } from "react";
import assets from "../../Utils/assets";
import { IDropDownSubCategory } from "../types";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  SubCategoryContainer,
} from "./DropDownFilterStyle";

export const SubCategory = (props: IDropDownSubCategory): JSX.Element => {
  const { category, subCategory, filters, selectedFilters, filterClickHandler } = props;
  const [isOpen, setIsOpen] = useState(false);

  const renderFilters = (filters: string[]) => {
    return filters.map((filter: string) => {
      const isSelectedFilter = selectedFilters[category][subCategory].includes(filter);
      return (
        <ListItem isSelected={isSelectedFilter} onClick={() => filterClickHandler(category, subCategory, filter)}>
          {filter}
        </ListItem>
      );
    });
  };

  return (
    <SubCategoryContainer>
      <DropDownContainer>
        <DropDownHeader onClick={() => setIsOpen(!isOpen)}>
          <span>{subCategory}</span>
          <img className="drop-down-arrow" src={assets.dropDownArrow}></img>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>{renderFilters(filters)}</DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </SubCategoryContainer>
  );
};
