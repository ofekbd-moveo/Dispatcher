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

export const SubCategory = (props: IDropDownSubCategory): JSX.Element => {
  const { subCategory } = props;

  const [isOpen, setIsOpen] = useState(false);
  const selectedFilters = useSelector((state: RootState) => state.news.selectedFilters);
  const allFiltersOptions = useSelector((state: RootState) => state.news.allFiltersOptions);
  const currCategory = useSelector((state: RootState) => state.news.currCategory);
  const filters = allFiltersOptions[currCategory][subCategory];

  const dispatch = useDispatch();

  const selectedClickHandler = (filter: string) => {
    dispatch(
      newsActions.toogleFilter({
        subCategory: subCategory,
        filter: filter,
      })
    );
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
