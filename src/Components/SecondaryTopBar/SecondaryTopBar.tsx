import { FilterBarIcon, FilterBarIconContainer, SecondaryTopBarContainer } from "./SecondaryTopBarStyle";
import assets from "../../Utils/assets";
import { Categories, ISecondaryTopBar } from "../types";
import { SubCategory } from "../DropDownFilter/SubCategory";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import {
  DropDownContainer,
  DropDownFilterTitle,
  DropDownHeader,
  SubCategoryContainer,
} from "../DropDownFilter/DropDownFilterStyle";

export const SecondaryTopBar = (props: ISecondaryTopBar): JSX.Element => {
  const { openFilterBarClickHandler } = props;
  const currCategory = useSelector((state: RootState) => state.news.currCategory);
  const selectedFiltes = useSelector((state: RootState) => state.news.selectedFilters);
  const [isFilter, setisFilter] = useState(false);

  useEffect(() => {
    let isChanges = false;
    for (const sub in selectedFiltes[currCategory]) {
      if (selectedFiltes[currCategory][sub].length !== 0) {
        setisFilter(true);
        isChanges = true;
      }
    }
    if (!isChanges) setisFilter(false);
  }, [selectedFiltes]);

  return (
    <SecondaryTopBarContainer>
      {currCategory === Categories.everything ? (
        <SubCategory subCategory={"sortBy"} />
      ) : (
        <DropDownFilterTitle className="sort-by-disable">Sort by</DropDownFilterTitle>
      )}
      <FilterBarIconContainer onClick={openFilterBarClickHandler}>
        {isFilter ? <FilterBarIcon src={assets.filterActive} /> : <FilterBarIcon src={assets.filter} />}
      </FilterBarIconContainer>
    </SecondaryTopBarContainer>
  );
};
