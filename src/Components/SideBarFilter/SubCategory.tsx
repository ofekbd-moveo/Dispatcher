import { upperCase, upperFirst } from "lodash";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { formatDateRange } from "../../Utils/HelpFunctions/casting";
import { getKeyOfVal, getValOfKey } from "../../Utils/HelpFunctions/helpFunc";
import { DATE_KEY } from "../constants";
import { Categories, ISubCategory } from "../types";
import { FilterListContainer, RowContainer, RowTitle } from "./SideBarMenuStyle";

export const SubCategory = (props: ISubCategory) => {
  const { subCategory, filters, setMenuTitle, setCurrSubCategory } = props;
  const selectedFilters = useSelector((state: RootState) => state.news.selectedFilters);
  const allFiltersOptions = useSelector((state: RootState) => state.news.allFiltersOptions);
  const currCategory = useSelector((state: RootState) => state.news.currCategory);

  const convertFiltersArrToString = () => {
    if (filters) {
      if (subCategory === DATE_KEY && filters.length !== 0) return formatDateRange(filters[0]);
      return filters.length === 0 ? "All" : filters.map((filter) => getValOfKey(subCategory, filter)).join(",");
    }
  };

  const subCategoryClickHandler = () => {
    if (
      (currCategory === Categories.topHeadline &&
        subCategory === "sources" &&
        selectedFilters[currCategory]["category"] &&
        selectedFilters[currCategory]["category"].length === 0 &&
        selectedFilters[currCategory]["country"] &&
        selectedFilters[currCategory]["country"].length === 0) ||
      ((subCategory === "country" || subCategory === "category") &&
        selectedFilters[currCategory]["sources"] &&
        selectedFilters[currCategory]["sources"].length === 0) ||
      currCategory === Categories.everything
    ) {
      setMenuTitle(subCategory);
      setCurrSubCategory(subCategory);
    }
  };
  const isDisable =
    (currCategory === Categories.topHeadline &&
      subCategory === "sources" &&
      ((selectedFilters[currCategory]["category"] && selectedFilters[currCategory]["category"].length !== 0) ||
        (selectedFilters[currCategory]["country"] && selectedFilters[currCategory]["country"].length !== 0))) ||
    ((subCategory === "country" || subCategory === "category") &&
      selectedFilters[currCategory]["sources"] &&
      selectedFilters[currCategory]["sources"].length !== 0);

  return (
    <RowContainer id={isDisable ? "disable" : ""} onClick={subCategoryClickHandler}>
      <RowTitle>{upperFirst(subCategory === "sortBy" ? "sort by" : subCategory)}</RowTitle>
      <FilterListContainer>{convertFiltersArrToString()}</FilterListContainer>
    </RowContainer>
  );
};
