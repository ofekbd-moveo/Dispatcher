import { Dispatch, SetStateAction, useState } from "react";
import CardList from "../Card/CardList";
import ChartCardList from "../Charts/ChartCardList";
import Divider from "../Common/Divider/StyleDivider";
import { Categories, DropDownFilterType, NoDataType, TFiltersOptions } from "../types";
import { NoData } from "../NoData/NoData";
import { SearchSmallScreen } from "../SearchSmallScreen/SearchSmallScreen";
import { SecondaryTopBar } from "../SecondaryTopBar/SecondaryTopBar";
import { SideBarFilter } from "../SideBarFilter/SideBarFilter";
import TopBar from "../TopBar/TopBar";
import { ContentContainer, DataContentContainer, Title } from "./DispatcherPageStyle";
import { allFiltersOptions, initializedSelectedFilters } from "../constants";
import { DropDownFilter } from "../DropDownFilter/DropDownFilter";
import { recentSearchesMock, dispatchersDatabase, country, missingDataMock, cardsMock, chartsMock } from "./Mock";

export const DispatcherPage = (): JSX.Element => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(initializedSelectedFilters);
  const [filterCategory, setFilterCategory] = useState(Categories.everything as string);

  const filterClickHandler = (category: string, subCategory: string, newFilterValue: string) => {
    const selectedFiltersInSubCategory = (selectedFilters as TFiltersOptions)[category][subCategory];
    const isSelectedFilter = selectedFiltersInSubCategory.includes(newFilterValue);

    const newFilters = isSelectedFilter
      ? selectedFiltersInSubCategory.filter((currFilter: string) => currFilter !== newFilterValue)
      : [...selectedFiltersInSubCategory, newFilterValue];

    setSelectedFilters((prevState) => ({
      ...prevState,
      [category]: { ...(selectedFilters as TFiltersOptions)[category], [subCategory]: newFilters },
    }));
  };

  const toggleSearchBar = (newState: boolean) => {
    setIsSearchMenuOpen(newState);
  };
  const toggleFilterBar = (newState: boolean) => {
    setIsFilterMenuOpen(newState);
  };

  return (
    <>
      <SearchSmallScreen
        recentSearches={recentSearchesMock}
        isMenuOpen={isSearchMenuOpen}
        closeSearchBarClickHandler={() => toggleSearchBar(false)}
      />

      <SideBarFilter
        allFiltersOptions={allFiltersOptions}
        isFilterMenuOpen={isFilterMenuOpen}
        selectedFilters={selectedFilters}
        closeFilterBarClickHandler={() => toggleFilterBar(false)}
        filterClickHandler={filterClickHandler}
      ></SideBarFilter>

      <TopBar
        allFiltersOptions={allFiltersOptions}
        selectedFilters={selectedFilters}
        category={filterCategory}
        setCategory={setFilterCategory}
        filterClickHandler={filterClickHandler}
        openSearchBarClickHandler={() => toggleSearchBar(true)}
      />
      <SecondaryTopBar openFilterBarClickHandler={() => toggleFilterBar(true)} />

      <ContentContainer>
        <DropDownFilter
          type={DropDownFilterType.SUB_CATEGORY}
          allFiltersOptions={allFiltersOptions}
          selectedFilters={selectedFilters}
          category={filterCategory}
          setCategory={setFilterCategory}
          filterClickHandler={filterClickHandler}
        />

        <Divider />
        <Title>{dispatchersDatabase + " in " + country}</Title>
        <DataContentContainer>
          {missingDataMock ? <NoData type={NoDataType.TEXTUAL} /> : <CardList cards={cardsMock} />}
          <ChartCardList charts={chartsMock}></ChartCardList>
        </DataContentContainer>
      </ContentContainer>
    </>
  );
};
