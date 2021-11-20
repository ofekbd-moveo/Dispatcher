import { formatDateRange } from "../../Utils/HelpFunctions/casting";
import { getKeyOfVal, getValOfKey } from "../../Utils/HelpFunctions/helpFunc";
import { DATE_KEY } from "../constants";
import { ISubCategory } from "../types";
import { FilterListContainer, RowContainer, RowTitle } from "./SideBarMenuStyle";

export const SubCategory = (props: ISubCategory) => {
  const { subCategory, filters, setMenuTitle, setCurrSubCategory } = props;

  const convertFiltersArrToString = () => {
    if (filters) {
      if (subCategory === DATE_KEY && filters.length !== 0) return formatDateRange(filters[0]);
      return filters.length === 0 ? "All" : filters.map((filter) => getValOfKey(subCategory, filter)).join(",");
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
