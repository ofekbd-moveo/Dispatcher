import { useState } from "react";
import Button from "../Common/Button/Button";
import { buttonType } from "../Common/types";
import { Category } from "./Category";
import { BackArrow, BackDrop, Footer, Header, SideBarContainer, SidebarTitle } from "./SideBarMenuStyle";
import { SubCategory } from "./SubCategory";
import { SubCategoryFilter } from "./SubCategoryFilter";
import assets from "../../Utils/assets";
import { CategoryFilter } from "./CategoryFilter";

export interface ISideBarFilter {
  allFiltersOptions: { [category: string]: { [subCategory: string]: string[] } };
  isFilterMenuOpen: boolean;
  closeFilterBarClickHandler: () => void;
  // selectedFilters: { [category: string]: { [subCategory: string]: string[] } };
}

export enum Categories {
  everything = "everything",
  topHeadline = "topHeadline",
}

export enum EverythingSubCategories {
  CATEGORY = "category",
  SOURCES = "sources",
  COUNTRY = "country",
}

export enum TopHeadlineSubCategories {
  SOURCES = "sources",
  LANGUAGE = "language",
  DATES = "dates",
}

export const DAFAULT_FILTER_TITLE = "FILTER";
const CATEGORY_TITLE = "Search in";

export const SideBarFilter = (props: ISideBarFilter) => {
  const { allFiltersOptions, isFilterMenuOpen, closeFilterBarClickHandler } = props;
  const [currentCategory, setCurrentCategory] = useState(Categories.everything as string);
  const [currSubCategory, setCurrSubCategory] = useState(DAFAULT_FILTER_TITLE);
  const [selectedFilters, setSelectedFilters] = useState({
    [Categories.everything as string]: {
      [EverythingSubCategories.SOURCES as string]: [] as string[],
      [EverythingSubCategories.COUNTRY as string]: [] as string[],
      [EverythingSubCategories.CATEGORY as string]: [] as string[],
    },
    [Categories.topHeadline as string]: {
      [TopHeadlineSubCategories.SOURCES as string]: [] as string[],
      [TopHeadlineSubCategories.LANGUAGE as string]: [] as string[],
      [TopHeadlineSubCategories.DATES as string]: [] as string[],
    },
  });

  const categoriesList = Object.keys(allFiltersOptions);
  const subCategoriesList = Object.keys(allFiltersOptions[currentCategory]);
  const isSubCategoryMenu = currSubCategory !== DAFAULT_FILTER_TITLE;
  const isChangingCategoryMenu = currSubCategory === CATEGORY_TITLE;

  const renderSubCategories = () => {
    return subCategoriesList.map((subCategory) => {
      const currSubCategory = selectedFilters[currentCategory] as { [s: string]: string[] };
      const filters = currSubCategory[subCategory];
      return <SubCategory subCategory={subCategory} filters={filters} setCurrSubCategory={setCurrSubCategory} />;
    });
  };

  const renderSubCategoryFilters = () => {
    const filters = allFiltersOptions[currentCategory][currSubCategory];
    const selectedFiltersInCurrSubCategory = selectedFilters[currentCategory][currSubCategory];

    const filterClickHandler = (isSelectedFilter: boolean, filter: string) => {
      isSelectedFilter ? removeFilterFromSelectedFilters(filter) : addFilterToSelectedFilters(filter);
    };

    const removeFilterFromSelectedFilters = (filter: string) => {
      const newFilters = selectedFiltersInCurrSubCategory.filter((currFilter: string) => currFilter !== filter);
      setSelectedFilters((prevState) => ({
        ...prevState,
        [currentCategory]: { ...selectedFilters[currentCategory], [currSubCategory]: newFilters },
      }));
    };

    const addFilterToSelectedFilters = (filter: string) => {
      const newFilters = [...selectedFiltersInCurrSubCategory, filter];
      setSelectedFilters((prevState) => ({
        ...prevState,
        [currentCategory]: { ...selectedFilters[currentCategory], [currSubCategory]: newFilters },
      }));
    };

    return filters.map((filter) => {
      const isSelectedFilter = selectedFiltersInCurrSubCategory.includes(filter);
      return (
        <SubCategoryFilter
          isSelected={isSelectedFilter}
          value={filter}
          filterClickHandler={() => filterClickHandler(isSelectedFilter, filter)}
        ></SubCategoryFilter>
      );
    });
  };

  const renderCategories = () =>
    categoriesList.map((category) => (
      <CategoryFilter
        isSelected={category === currentCategory}
        category={category}
        setCurrentCategory={setCurrentCategory}
        backClickHandler={backClickHandler}
      ></CategoryFilter>
    ));

  const backClickHandler = () => {
    setCurrSubCategory(DAFAULT_FILTER_TITLE);
  };

  return (
    <div>
      <BackDrop onClick={closeFilterBarClickHandler} className={isFilterMenuOpen ? "open" : "close"} />
      <SideBarContainer className={isFilterMenuOpen ? "open" : "close"}>
        <Header>
          <SidebarTitle>
            {isSubCategoryMenu && <BackArrow src={assets.back} onClick={backClickHandler} />}
            {currSubCategory}
          </SidebarTitle>
          {!isSubCategoryMenu && <Category category={currentCategory} setCurrSubCategory={setCurrSubCategory} />}
          {isChangingCategoryMenu
            ? renderCategories()
            : isSubCategoryMenu
            ? renderSubCategoryFilters()
            : renderSubCategories()}
        </Header>

        <Footer>
          <Button
            className={buttonType.PRIMARY}
            isArrowVisible={false}
            content="VIEW RESULTS"
            onClickHandler={() => {}}
          ></Button>
        </Footer>
      </SideBarContainer>
    </div>
  );
};
