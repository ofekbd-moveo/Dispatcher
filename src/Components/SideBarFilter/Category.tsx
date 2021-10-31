import { Dispatch, SetStateAction } from "react";
import { Categories } from "./SideBarFilter";
import { FilterListContainer, RowContainer, RowTitle } from "./SideBarMenuStyle";

export interface ICategory {
  category: string;
  setCurrSubCategory: (value: SetStateAction<string>) => void;
}

const CATEGORY_TITLE = "Search in";

export const Category = (props: ICategory) => {
  const { category, setCurrSubCategory } = props;
  const renderCategory = () => {
    setCurrSubCategory(CATEGORY_TITLE);
  };
  return (
    <RowContainer onClick={renderCategory}>
      <RowTitle>{CATEGORY_TITLE}</RowTitle>
      <FilterListContainer>{category}</FilterListContainer>
    </RowContainer>
  );
};
