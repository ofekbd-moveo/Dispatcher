import { Dispatch, SetStateAction, useCallback } from "react";
import { FilterListContainer, RowContainer, RowTitle } from "./SideBarMenuStyle";

export interface ISubCategory {
  subCategory: string;
  filters: string[];
  setMenuTitle: (value: SetStateAction<string>) => void;
  setCurrSubCategory: (value: SetStateAction<string>) => void;
}

export const SubCategory = (props: ISubCategory) => {
  const { subCategory, filters, setMenuTitle, setCurrSubCategory } = props;

  const convertFiltersArrToString = () => {
    if (filters) {
      return filters.length === 0 ? "All" : filters.join(",");
    }
  };

  const subCategoryClickHandler = () => {
    setMenuTitle(subCategory);
    setCurrSubCategory(subCategory);
  };

  return (
    <RowContainer onClick={subCategoryClickHandler}>
      <RowTitle>{subCategory}</RowTitle>
      <FilterListContainer>{convertFiltersArrToString()}</FilterListContainer>
    </RowContainer>
  );
};
