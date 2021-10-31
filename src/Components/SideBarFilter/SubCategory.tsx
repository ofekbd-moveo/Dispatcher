import { Dispatch, SetStateAction, useCallback } from "react";
import { FilterListContainer, RowContainer, RowTitle } from "./SideBarMenuStyle";

export interface ISubCategory {
  subCategory: string;
  filters: string[];
  setCurrSubCategory: (value: SetStateAction<string>) => void;
}

export const SubCategory = (props: ISubCategory) => {
  const { subCategory, filters, setCurrSubCategory } = props;

  const convertFiltersArrToString = () => {
    if (filters) {
      return filters.length === 0 ? "All" : filters.join(",");
    }
  };

  return (
    <RowContainer onClick={() => setCurrSubCategory(subCategory)}>
      <RowTitle>{subCategory}</RowTitle>
      <FilterListContainer>{convertFiltersArrToString()}</FilterListContainer>
    </RowContainer>
  );
};
