import { useState } from "react";
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
import { recentSearchesMock, dispatchersDatabase, country, missingDataMock, cardsMock, chartsMock } from "./Mock";

export const DispatcherPage = (): JSX.Element => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

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
          {missingDataMock ? <NoData type={NoDataType.TEXTUAL} /> : <CardList cards={cardsMock} />}
          <ChartCardList charts={chartsMock}></ChartCardList>
        </DataContentContainer>
      </ContentContainer>
    </>
  );
};
