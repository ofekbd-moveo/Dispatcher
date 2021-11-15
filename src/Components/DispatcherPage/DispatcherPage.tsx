import { useState, useEffect } from "react";
import CardList from "../Card/CardList";
import ChartCardList from "../Charts/ChartCardList";
import Divider from "../Common/Divider/StyleDivider";
import { DropDownFilterType, NoDataType } from "../types";
import { NoData } from "../NoData/NoData";
import { SearchSmallScreen } from "../SearchSmallScreen/SearchSmallScreen";
import { SecondaryTopBar } from "../SecondaryTopBar/SecondaryTopBar";
import { SideBarFilter } from "../SideBarFilter/SideBarFilter";
import TopBar from "../TopBar/TopBar";
import { ContentContainer, DataContentContainer, Title } from "./DispatcherPageStyle";
import { DropDownFilter } from "../DropDownFilter/DropDownFilter";
import { recentSearchesMock, dispatchersDatabase, country, chartsMock } from "./Mock";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { filterCardsData, initCardsData, initSources } from "../../store/indexFuncs";
// import { charts } from "../constants";

export const DispatcherPage = (): JSX.Element => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const seletedFilters = useSelector((state: RootState) => state.news.selectedFilters);
  const cards = useSelector((state: RootState) => state.news.cards);
  const isLoading = useSelector((state: RootState) => state.news.isLoading);

  const toggleSearchBar = (newState: boolean) => {
    setIsSearchMenuOpen(newState);
  };
  const toggleFilterBar = (newState: boolean) => {
    setIsFilterMenuOpen(newState);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCardsData());
    dispatch(initSources());
  }, []);

  useEffect(() => {
    dispatch(filterCardsData());
  }, [seletedFilters]);

  return (
    <>
      <SearchSmallScreen
        recentSearches={recentSearchesMock}
        isMenuOpen={isSearchMenuOpen}
        closeSearchBarClickHandler={() => toggleSearchBar(false)}
      />

      <SideBarFilter
        isFilterMenuOpen={isFilterMenuOpen}
        closeFilterBarClickHandler={() => toggleFilterBar(false)}
      ></SideBarFilter>

      <TopBar openSearchBarClickHandler={() => toggleSearchBar(true)} />
      <SecondaryTopBar openFilterBarClickHandler={() => toggleFilterBar(true)} />

      <ContentContainer>
        <DropDownFilter type={DropDownFilterType.SUB_CATEGORY} />

        <Divider />
        <Title>{dispatchersDatabase + " in " + country}</Title>
        <DataContentContainer>
          {cards.length === 0 && !isLoading ? <NoData type={NoDataType.TEXTUAL} /> : <CardList />}
          {/* charts={charts} */}
          <ChartCardList></ChartCardList>
        </DataContentContainer>
      </ContentContainer>
    </>
  );
};
