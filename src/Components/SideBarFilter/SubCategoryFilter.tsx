import { useState } from "react";
import { ISubCategoryFilter } from "../types";
import { RowContainer, RowTitle } from "./SideBarMenuStyle";
import { newsActions } from "../../store/index";
import { useDispatch } from "react-redux";

export const SubCategoryFilter = (props: ISubCategoryFilter): JSX.Element => {
  let { isAllreadySelected, filter, currSubCategory } = props;
  const [isSelected, setIsSelected] = useState(isAllreadySelected);

  const dispatch = useDispatch();

  const selectedClickHandler = () => {
    dispatch(
      newsActions.toogleFilter({
        subCategory: currSubCategory,
        filter: filter,
      })
    );
    setIsSelected(!isSelected);
  };

  return (
    <RowContainer isSelected={isSelected} onClick={selectedClickHandler}>
      <RowTitle>{filter}</RowTitle>
    </RowContainer>
  );
};
