import { useState } from "react";
import assets from "../../Utils/assets";
import { Categories, IDropDownSubCategory } from "../types";
import {
  DropDownContainer,
  DropDownFilterTitle,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  SubCategoryContainer,
} from "./DropDownFilterStyle";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { newsActions } from "../../store/index";
import { useDispatch } from "react-redux";
import { filterCardsData } from "../../store/indexFuncs";
import { DatePick } from "../Common/Date/Date";
import { DATE_KEY } from "../constants";
import { getKeyOfVal, getValOfKey } from "../../Utils/HelpFunctions/helpFunc";
import { upperFirst } from "lodash";

export const SubCategory = (props: IDropDownSubCategory): JSX.Element => {
  const { subCategory } = props;

  const [isOpen, setIsOpen] = useState(false);
  const selectedFilters = useSelector((state: RootState) => state.news.selectedFilters);
  const allFiltersOptions = useSelector((state: RootState) => state.news.allFiltersOptions);
  const currCategory = useSelector((state: RootState) => state.news.currCategory);

  const filters = allFiltersOptions[currCategory][subCategory];
  const currSelectedFilters = selectedFilters[currCategory][subCategory];

  const dispatch = useDispatch();

  const selectedClickHandler = async (filter: string) => {
    if (
      (currCategory === Categories.topHeadline &&
        ((subCategory === "sources" &&
          selectedFilters[currCategory]["category"] &&
          selectedFilters[currCategory]["category"].length === 0 &&
          selectedFilters[currCategory]["country"] &&
          selectedFilters[currCategory]["country"].length === 0) ||
          ((subCategory === "country" || subCategory === "category") &&
            selectedFilters[currCategory]["sources"] &&
            selectedFilters[currCategory]["sources"].length === 0))) ||
      currCategory === Categories.everything
    ) {
      dispatch(
        newsActions.toogleFilter({
          subCategory: subCategory,
          filter: filter,
        })
      );
      dispatch(filterCardsData());
    }
  };

  const renderFilters = (filters: string[]) => {
    return filters.map((filter: string, key: number) => {
      const isSelectedFilter = selectedFilters[currCategory][subCategory].includes(getKeyOfVal(subCategory, filter));
      return (
        <ListItem
          key={key}
          isSelected={isSelectedFilter}
          onClick={() => {
            selectedClickHandler(filter);
            setIsOpen(!isOpen);
          }}
        >
          {filter}
        </ListItem>
      );
    });
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
    <SubCategoryContainer>
      <DropDownContainer className="DropDownContainer">
        <DropDownHeader
          className="DropDownHeader"
          id={isDisable ? "disable" : ""}
          onClick={() => {
            if (isDisable) {
              setIsOpen(false);
            } else setIsOpen(!isOpen);
          }}
        >
          <DropDownFilterTitle>
            {currSelectedFilters && currSelectedFilters.length > 0
              ? currSelectedFilters.map((filter) => getValOfKey(subCategory, filter)).join(",")
              : upperFirst(subCategory === "sortBy" ? "sort by" : subCategory)}
          </DropDownFilterTitle>
          <img
            className="drop-down-arrow"
            src={subCategory === DATE_KEY ? assets.calendar : assets.dropDownArrow}
          ></img>
        </DropDownHeader>
        {isOpen &&
          (subCategory === DATE_KEY ? (
            <DatePick />
          ) : (
            <DropDownListContainer className="DropDownListContainer">
              <DropDownList>{renderFilters(filters)}</DropDownList>
            </DropDownListContainer>
          ))}
      </DropDownContainer>
    </SubCategoryContainer>
  );
};
