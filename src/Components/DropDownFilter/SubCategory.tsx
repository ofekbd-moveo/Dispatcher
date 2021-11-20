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
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { newsActions } from "../../store/index";
import { useDispatch } from "react-redux";
import { filterCardsData } from "../../store/indexFuncs";
import { DatePick } from "../Common/Date/Date";
import { DATE_KEY } from "../constants";

export const SubCategory = (props: IDropDownSubCategory): JSX.Element => {
  const { subCategory } = props;

  const [isOpen, setIsOpen] = useState(false);
  const selectedFilters = useSelector((state: RootState) => state.news.selectedFilters);
  const allFiltersOptions = useSelector((state: RootState) => state.news.allFiltersOptions);
  const currCategory = useSelector((state: RootState) => state.news.currCategory);
  const isErrorOccur = useSelector((state: RootState) => state.news.isErrorOccur);

  const filters = allFiltersOptions[currCategory][subCategory];

  const dispatch = useDispatch();

  const selectedClickHandler = async (filter: string) => {
    dispatch(
      newsActions.toogleFilter({
        subCategory: subCategory,
        filter: filter,
      })
    );
    dispatch(filterCardsData());
  };

  const renderFilters = (filters: string[]) => {
    return filters.map((filter: string, key: number) => {
      const isSelectedFilter = selectedFilters[currCategory][subCategory].includes(filter);
      return (
        <ListItem key={key} isSelected={isSelectedFilter} onClick={() => selectedClickHandler(filter)}>
          {filter}
        </ListItem>
      );
    });
  };

  return (
    <SubCategoryContainer>
      <DropDownContainer className="DropDownContainer">
        <DropDownHeader className="DropDownHeader" onClick={() => setIsOpen(!isOpen)}>
          <span>{subCategory}</span>
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
