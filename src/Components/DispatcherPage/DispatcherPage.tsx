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
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { initCardsData, initSources } from "../../store/indexFuncs";
import { ModalError } from "../Common/ModalError/ModalError";

export const DispatcherPage = (): JSX.Element => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isErrorOccur, setIsErrorOccur] = useState(false);

  const cards = useSelector((state: RootState) => state.news.cards);
  const isLoading = useSelector((state: RootState) => state.news.isLoading);
  const mainTitle = useSelector((state: RootState) => state.news.mainTitle);
  const isInitial = useSelector((state: RootState) => state.news.isInitial);
  const errorMsg = useSelector((state: RootState) => state.news.errorMsg);

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

  return (
    <>
      <ModalError errMsg={errorMsg}></ModalError>
      <SearchSmallScreen
        isMenuOpen={isSearchMenuOpen}
        closeSearchBarClickHandler={() => toggleSearchBar(false)}
        openFilterBarClickHandler={() => toggleFilterBar(true)}
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
        <Title isInitial={isInitial}>{isInitial ? mainTitle : `${cards.length} Total results`}</Title>

        <DataContentContainer>
          {cards.length === 0 && !isLoading ? <NoData type={NoDataType.TEXTUAL} /> : <CardList />}
          <ChartCardList></ChartCardList>
        </DataContentContainer>
      </ContentContainer>
    </>
  );
};
