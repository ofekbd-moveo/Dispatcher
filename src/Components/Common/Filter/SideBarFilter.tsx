import { useState } from "react";
import { StyleFilterRow } from "./StyleFilterRow";
import {
  SideBarContainer,
  SubFiltersContainer,
  Header,
  Footer,
  SubFilterListContainer,
  SubFilterContainer,
  SubFilterTitle,
  BackArrow,
  BackDrop,
  FilterSideBarContainer,
  HeaderAndListContainer,
} from "./SideBarFilterStyle";
import Button from "../Button/Button";
import { buttonType, Categories, CategoriesTitle, ISideBarFilter, TCategories } from "../types";
import assets from "../../../Utils/assets";
import { SubFilter } from "./SubFilter";

const FILTER_MENU_TITLE = "FILTER";

export const SideBarFilter = (props: ISideBarFilter): JSX.Element => {
  const { subFiltersOfEachFilter, isFilterMenuOpen, closeFilterBarClickHandler } = props;
  const [currFilterTitle, setCurrFilterTitle] = useState(FILTER_MENU_TITLE);

  const [filterBy, setFilterBy] = useState({
    [Categories.SEARCH_IN]: ["Everything"],
    [Categories.SOURCES]: [] as string[],
    [Categories.COUNTRY]: [] as string[],
    [Categories.TAGS]: [] as string[],
  });

  const convertSubFiltersArrToString = (subFilterList: string[]): string =>
    subFilterList.length === 0 ? "All" : subFilterList.join(", ");

  const filterClickHandler = (filter: TCategories) => {
    setCurrFilterTitle(filter);
  };

  const backClickHandler = () => {
    setCurrFilterTitle(FILTER_MENU_TITLE);
  };

  //TODO: export component
  const renderFilters = () => {
    const filters = Object.keys(filterBy) as TCategories[];

    return filters.map((filter: TCategories, key: number) =>
      StyleFilterRow(
        <SubFilterContainer key={key} onClick={() => filterClickHandler(filter)}>
          <SubFilterTitle>{CategoriesTitle[filter]}</SubFilterTitle>
          <SubFilterListContainer>{convertSubFiltersArrToString(filterBy[filter] as string[])}</SubFilterListContainer>
        </SubFilterContainer>
      )
    );
  };

  const renderSubFilters = () => {
    const subFilters = subFiltersOfEachFilter[currFilterTitle as TCategories];
    const subFiltersSelected = filterBy[currFilterTitle as TCategories];

    return subFilters.map((subFilter: string, key: number) => (
      <SubFilter
        isMark={subFiltersSelected.includes(subFilter)}
        value={subFilter}
        subFilterClickHandler={subFilterClickHandler}
      />
    ));
  };
  const removeSubFilterFromFilterBy = (SubFilterToRemove: string) => {
    const newSubFilters = filterBy[currFilterTitle as TCategories].filter((op: string) => op !== SubFilterToRemove);
    setFilterBy((prevState) => ({
      ...prevState,
      [currFilterTitle]: newSubFilters,
    }));
  };
  const addSubFilterFromFilterBy = (subFilterToAdd: string) => {
    const newSubFilters = [...filterBy[currFilterTitle as TCategories], subFilterToAdd];

    setFilterBy((prevState) => ({
      ...prevState,
      [currFilterTitle]: newSubFilters,
    }));
  };
  const editSubFilterSubFilters = (subFilter: string) => {
    const subFilterSubFilters = filterBy[currFilterTitle as TCategories];

    const isSubFilterInFilterByList = subFilterSubFilters.includes(subFilter);
    isSubFilterInFilterByList ? removeSubFilterFromFilterBy(subFilter) : addSubFilterFromFilterBy(subFilter);
  };
  const subFilterClickHandler = (subFilter: string) => {
    editSubFilterSubFilters(subFilter);
  };

  const isSubFilter = currFilterTitle !== FILTER_MENU_TITLE;

  const renderFilterValues = () => {
    return;
  };

  return (
    <FilterSideBarContainer>
      <BackDrop onClick={closeFilterBarClickHandler} className={isFilterMenuOpen ? "open" : "close"} />
      <SideBarContainer className={isFilterMenuOpen ? "open" : "close"}>
        <HeaderAndListContainer>
          <Header>
            {isSubFilter && <BackArrow src={assets.back} onClick={backClickHandler} />}
            {CategoriesTitle[currFilterTitle]}
          </Header>
          <SubFiltersContainer>{isSubFilter ? renderSubFilters() : renderFilters()}</SubFiltersContainer>
        </HeaderAndListContainer>
        <Footer>
          <Button
            className={buttonType.PRIMARY}
            isArrowVisible={false}
            content="VIEW RESULTS"
            onClickHandler={() => {}}
          ></Button>
        </Footer>
      </SideBarContainer>
    </FilterSideBarContainer>
  );
};
