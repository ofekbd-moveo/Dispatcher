import { useState } from "react";
import Button from "../Common/Button/Button";
import { buttonType, ISideBarFilter } from "../types";
import { Category } from "./Category";
import { BackArrow, BackDrop, Footer, Header, SideBarContainer, SidebarTitle } from "./SideBarMenuStyle";
import { SubCategory } from "./SubCategory";
import { SubCategoryFilter } from "./SubCategoryFilter";
import assets from "../../Utils/assets";
import { CategoryFilter } from "./CategoryFilter";
import { CATEGORY_TITLE, MAIN_TITLE } from "../constants";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const SideBarFilter = (props: ISideBarFilter) => {
  const { isFilterMenuOpen, closeFilterBarClickHandler } = props;

  const allFiltersOptions = useSelector((state: RootState) => state.news.allFiltersOptions);
  const selectedFilters = useSelector((state: RootState) => state.news.selectedFilters);
  const currCategory = useSelector((state: RootState) => state.news.currCategory);

  const [currSubCategory, setCurrSubCategory] = useState(MAIN_TITLE);
  const [menuTitle, setMenuTitle] = useState(MAIN_TITLE);
  const isSubCategoryMenu = menuTitle !== MAIN_TITLE;

  const renderSubCategories = () => {
    const subCategoriesList = Object.keys(allFiltersOptions[currCategory]);
    return subCategoriesList.map((subCategory, key) => {
      const filters = selectedFilters[currCategory][subCategory];
      return (
        <SubCategory
          key={key}
          subCategory={subCategory}
          filters={filters}
          setMenuTitle={setMenuTitle}
          setCurrSubCategory={setCurrSubCategory}
        />
      );
    });
  };

  const renderSubCategoryFilters = () => {
    const filters = allFiltersOptions[currCategory][currSubCategory];

    return filters.map((filter, key) => {
      const isAllreadySelected = selectedFilters[currCategory][currSubCategory].includes(filter);

      return (
        <SubCategoryFilter
          key={key}
          isAllreadySelected={isAllreadySelected}
          filter={filter}
          currSubCategory={currSubCategory}
        ></SubCategoryFilter>
      );
    });
  };

  const renderCategories = () => {
    const categoriesList = Object.keys(allFiltersOptions);

    return categoriesList.map((category, key) => (
      <CategoryFilter
        key={key}
        isSelected={category === currCategory}
        category={category}
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
          {!isSubCategoryMenu && <Category category={currCategory} setMenuTitle={setMenuTitle} />}
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
