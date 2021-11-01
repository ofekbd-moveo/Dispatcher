import { ISubCategory } from "../types";
import { FilterListContainer, RowContainer, RowTitle } from "./SideBarMenuStyle";

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
