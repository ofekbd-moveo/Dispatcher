import { FilterBarIcon, FilterBarIconContainer, SecondaryTopBarContainer } from "./SecondaryTopBarStyle";
import assets from "../../Utils/assets";
import { Categories, ISecondaryTopBar } from "../types";
import { SubCategory } from "../DropDownFilter/SubCategory";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const SecondaryTopBar = (props: ISecondaryTopBar): JSX.Element => {
  const { openFilterBarClickHandler } = props;
  const currCategory = useSelector((state: RootState) => state.news.currCategory);

  return (
    <SecondaryTopBarContainer>
      {currCategory === Categories.everything ? <SubCategory subCategory={"sortBy"} /> : <div></div>}
      <FilterBarIconContainer onClick={openFilterBarClickHandler}>
        <FilterBarIcon src={assets.filter} />
      </FilterBarIconContainer>
    </SecondaryTopBarContainer>
  );
};
