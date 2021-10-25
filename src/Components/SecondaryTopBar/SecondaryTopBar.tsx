import {
  DropDownArrowIcon,
  FilterBarIcon,
  FilterBarIconContainer,
  SecondaryTopBarContainer,
  SortByContainer,
} from "./SecondaryTopBarStyle";
import assets from "../../Utils/assets/assetsImports";

export interface ISecondaryTopBar {
  openFilterBarClickHandler: () => void;
}

export const SecondaryTopBar = (props: ISecondaryTopBar): JSX.Element => {
  const { openFilterBarClickHandler } = props;

  const sortByTitle = "Sort by";
  return (
    <SecondaryTopBarContainer onClick={openFilterBarClickHandler}>
      <SortByContainer>
        {sortByTitle}
        <DropDownArrowIcon src={assets.dropDownArrow} />
      </SortByContainer>
      <FilterBarIconContainer>
        <FilterBarIcon src={assets.filter} />
      </FilterBarIconContainer>
    </SecondaryTopBarContainer>
  );
};
