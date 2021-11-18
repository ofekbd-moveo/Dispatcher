import { useState } from "react";
import assets from "../../Utils/assets";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "./DropDownFilterStyle";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { newsActions } from "../../store/index";
import { useDispatch } from "react-redux";
import { CategoriesStr } from "../types";

export const DropDownCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const allFiltersOptions = useSelector((state: RootState) => state.news.allFiltersOptions);
  const currCategory = useSelector((state: RootState) => state.news.currCategory);

  const dispatch = useDispatch();

  const selectedClickHandler = (category: string) => {
    dispatch(newsActions.changeCategory(category));
    setIsOpen(!isOpen);
  };

  const renderCategories = (categories: string[]) =>
    categories.map((category: string, key: number) => (
      <ListItem key={key} onClick={() => selectedClickHandler(category)}>
        {CategoriesStr[category]}
      </ListItem>
    ));

  return (
    <DropDownContainer>
      <DropDownHeader onClick={() => setIsOpen(!isOpen)}>
        <span>{CategoriesStr[currCategory]}</span>
        <img className="drop-down-arrow" src={assets.dropDownArrow}></img>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>{renderCategories(Object.keys(allFiltersOptions))}</DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};
