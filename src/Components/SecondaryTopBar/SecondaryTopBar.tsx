import {
  DropDownArrowIcon,
  FilterBarIcon,
  FilterBarIconContainer,
  SecondaryTopBarContainer,
  SortByContainer,
} from "./SecondaryTopBarStyle";
import assets from "../../Utils/assets";
import { SORT_BY_TITLE } from "../constants";
import { ISecondaryTopBar } from "../types";

export const SecondaryTopBar = (props: ISecondaryTopBar): JSX.Element => {
  const { openFilterBarClickHandler } = props;

  return (
    <SecondaryTopBarContainer>
      <SortByContainer>
        {SORT_BY_TITLE}
        <DropDownArrowIcon src={assets.dropDownArrow} />
      </SortByContainer>
      <FilterBarIconContainer onClick={openFilterBarClickHandler}>
        <FilterBarIcon src={assets.filter} />
      </FilterBarIconContainer>
    </SecondaryTopBarContainer>
  );
};
