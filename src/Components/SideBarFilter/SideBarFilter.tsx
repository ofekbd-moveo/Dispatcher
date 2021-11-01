import { useEffect, useState } from "react";
import Button from "../Common/Button/Button";
import { buttonType, Categories, ISideBarFilter } from "../types";
import { Category } from "./Category";
import { BackArrow, BackDrop, Footer, Header, SideBarContainer, SidebarTitle } from "./SideBarMenuStyle";
import { SubCategory } from "./SubCategory";
import { SubCategoryFilter } from "./SubCategoryFilter";
import assets from "../../Utils/assets";
import { CategoryFilter } from "./CategoryFilter";
import { CATEGORY_TITLE, MAIN_TITLE } from "../constants";

export const SideBarFilter = (props: ISideBarFilter) => {
  const {
    allFiltersOptions,
    selectedFilters,
    isFilterMenuOpen,
    closeFilterBarClickHandler,
    filterClickHandler,
  } = props;

  const [currentCategory, setCurrentCategory] = useState(Categories.everything as string);
  const [currSubCategory, setCurrSubCategory] = useState(MAIN_TITLE);
  const [menuTitle, setMenuTitle] = useState(MAIN_TITLE);
  const isSubCategoryMenu = menuTitle !== MAIN_TITLE;

  const renderSubCategories = () => {
    const subCategoriesList = Object.keys(allFiltersOptions[currentCategory]);

    return subCategoriesList.map((subCategory) => {
      const filters = selectedFilters[currentCategory][subCategory];
      return (
        <SubCategory
          subCategory={subCategory}
          filters={filters}
          setMenuTitle={setMenuTitle}
          setCurrSubCategory={setCurrSubCategory}
        />
      );
    });
  };

  const renderSubCategoryFilters = () => {
    const filters = allFiltersOptions[currentCategory][currSubCategory];

    return filters.map((filter) => {
      const isAllreadySelected = selectedFilters[currentCategory][currSubCategory].includes(filter);

      return (
        <SubCategoryFilter
          isAllreadySelected={isAllreadySelected}
          value={filter}
          filterClickHandler={() => filterClickHandler(currentCategory, currSubCategory, filter)}
        ></SubCategoryFilter>
      );
    });
  };

  const renderCategories = () => {
    const categoriesList = Object.keys(allFiltersOptions);

    return categoriesList.map((category) => (
      <CategoryFilter
        isSelected={category === currentCategory}
        category={category}
        setCurrentCategory={setCurrentCategory}
        backClickHandler={backClickHandler}
      ></CategoryFilter>
    ));
  };

  const backClickHandler = () => {
    setMenuTitle(MAIN_TITLE);
  };

  const renderMenu = () => {
    switch (menuTitle) {
      case MAIN_TITLE:
        return renderSubCategories();
      case CATEGORY_TITLE:
        return renderCategories();
      default:
        return renderSubCategoryFilters();
    }
  };

  return (
    <div>
      <BackDrop onClick={closeFilterBarClickHandler} isFilterMenuOpen={isFilterMenuOpen} />
      <SideBarContainer isFilterMenuOpen={isFilterMenuOpen}>
        <Header>
          <SidebarTitle>
            {isSubCategoryMenu && <BackArrow src={assets.back} onClick={backClickHandler} />}
            {menuTitle}
          </SidebarTitle>
          {!isSubCategoryMenu && <Category category={currentCategory} setMenuTitle={setMenuTitle} />}
          {renderMenu()}
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
