import { useState } from "react";
import { ISubCategoryFilter } from "../types";
import { RowContainer, RowTitle } from "./SideBarMenuStyle";
import { newsActions, RootState } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import { filterCardsData } from "../../store/indexFuncs";

export const SubCategoryFilter = (props: ISubCategoryFilter): JSX.Element => {
  let { isAllreadySelected, filter, currSubCategory } = props;
  const [isSelected, setIsSelected] = useState(isAllreadySelected);
  const isErrorOccur = useSelector((state: RootState) => state.news.isErrorOccur);

  const dispatch = useDispatch();

  const selectedClickHandler = async () => {
    dispatch(
      newsActions.toogleFilter({
        subCategory: currSubCategory,
        filter: filter,
      })
    );
    dispatch(filterCardsData());
    setIsSelected(!isSelected);
  };

  return (
    <RowContainer isSelected={isSelected} onClick={selectedClickHandler}>
      <RowTitle>{filter}</RowTitle>
    </RowContainer>
  );
};
