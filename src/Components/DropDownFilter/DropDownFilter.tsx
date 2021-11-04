import { DropDownFilterType, IDropDownFilter } from "../types";
import { DropDownCategory } from "./DropDownCategory";
import { SubCategoryList } from "./DropDownFilterStyle";
import { SubCategory } from "./SubCategory";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const DropDownFilter = (props: IDropDownFilter): JSX.Element => {
  const { type } = props;

  const allFiltersOptions = useSelector((state: RootState) => state.news.allFiltersData);
  const currCategory = useSelector((state: RootState) => state.news.currCategory);

  const subCategories = Object.keys(allFiltersOptions[currCategory]);

  const renderSubCategories = () => {
    return subCategories.map((subCategory) => {
      return <SubCategory subCategory={subCategory} />;
    });
  };

  switch (type) {
    case DropDownFilterType.CATEGORY:
      return <DropDownCategory />;
    case DropDownFilterType.SUB_CATEGORY:
      return <SubCategoryList>{renderSubCategories()}</SubCategoryList>;
    default:
      return <></>;
  }
};
