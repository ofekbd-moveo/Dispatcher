import { DropDownFilterType, IDropDownFilter } from "../types";
import { DropDownCategory } from "./DropDownCategory";
import { SubCategoryList } from "./DropDownFilterStyle";
import { SubCategory } from "./SubCategory";

export const DropDownFilter = (props: IDropDownFilter): JSX.Element => {
  const { type, allFiltersOptions, selectedFilters, category, setCategory, filterClickHandler } = props;

  const subCategories = Object.keys(allFiltersOptions[category]);

  const renderSubCategories = () => {
    return subCategories.map((subCategory) => {
      const filters = allFiltersOptions[category][subCategory];
      return (
        <SubCategory
          category={category}
          subCategory={subCategory}
          filters={filters}
          selectedFilters={selectedFilters}
          filterClickHandler={filterClickHandler}
        />
      );
    });
  };

  switch (type) {
    case DropDownFilterType.CATEGORY:
      return (
        <DropDownCategory
          currCategory={category}
          setCategory={setCategory}
          categories={Object.keys(allFiltersOptions)}
        />
      );
    case DropDownFilterType.SUB_CATEGORY:
      return <SubCategoryList>{renderSubCategories()}</SubCategoryList>;
    default:
      return <></>;
  }
};
