import Button from "../Common/Button/Button";
import { buttonType, NoDataType } from "../types";
import {
  BackArrow,
  RecentSearchesContainer,
  RemoveIcon,
  SearchButtonContainer,
  SearchInputArea,
  SearchInputContainer,
  SearchSmallScreenContainer,
  TitleContainer,
  RecentSearch,
  UpperContainer,
  DataContainer,
} from "./SearchSmallScreenStyle";
import assets from "../../Utils/assets";
import { useDispatch, useSelector } from "react-redux";
import { newsActions, RootState } from "../../store";
import { filterCardsData } from "../../store/indexFuncs";
import { ChangeEvent, useState } from "react";
import { SecondaryTopBar } from "../SecondaryTopBar/SecondaryTopBar";
import CardList from "../Card/CardList";
import { NoData } from "../NoData/NoData";
import { upperCase } from "lodash";

export interface ISreachSmallScreen {
  isMenuOpen: boolean;
  closeSearchBarClickHandler: () => void;
  openFilterBarClickHandler: () => void;
}
export const SearchSmallScreen = (props: ISreachSmallScreen): JSX.Element => {
  const { isMenuOpen, closeSearchBarClickHandler, openFilterBarClickHandler } = props;
  const [isSearching, setIsSearching] = useState(false);
  const resentSearchesTitle = "RECENT SHEARCHES";
  const searchInput = useSelector((state: RootState) => state.news.searchInput);
  const recentSearches = useSelector((state: RootState) => state.news.recentSearches);
  const cards = useSelector((state: RootState) => state.news.cards);

  const dispatch = useDispatch();
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newSearchInput = event.target.value;
    dispatch(newsActions.setSearceInput(newSearchInput));
  };

  const renderRecentSearchesList = (recentSearches: string[]) =>
    recentSearches.map((search: string, key: number) => (
      <RecentSearch key={key} onClick={() => dispatch(newsActions.setSearceInput(search))}>
        <span>{search}</span>
        <RemoveIcon
          src={assets.exit}
          onClick={() => dispatch(newsActions.setLocalStorageState(recentSearches.filter((curr) => curr !== search)))}
        />
      </RecentSearch>
    ));

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //add current Search to LocalStorage
    dispatch(newsActions.setLocalStorageState([...recentSearches, searchInput]));

    //send new api request
    dispatch(filterCardsData());

    setIsSearching(true);
    dispatch(newsActions.setSearceInput(`"${upperCase(searchInput)}"`));
    // //close search sidebar
    // closeSearchBarClickHandler();
  };

  return (
    <SearchSmallScreenContainer className={isMenuOpen ? "open" : "close"} onSubmit={(e) => submitHandler(e)}>
      <UpperContainer>
        <SearchInputContainer>
          <div className="search-input">
            <BackArrow src={assets.back} onClick={closeSearchBarClickHandler} />
            <SearchInputArea
              placeholder="Search"
              value={searchInput}
              onChange={(e) => onChangeHandler(e)}
            ></SearchInputArea>
          </div>
          {isSearching ? (
            <img src={assets.search} onClick={() => setIsSearching(false)} />
          ) : (
            searchInput !== "" && (
              <RemoveIcon src={assets.exit} onClick={() => dispatch(newsActions.setSearceInput(""))} />
            )
          )}
        </SearchInputContainer>

        {isSearching ? (
          <>
            <SecondaryTopBar openFilterBarClickHandler={openFilterBarClickHandler} />
            <DataContainer>{cards.length === 0 ? <NoData type={NoDataType.TEXTUAL} /> : <CardList />}</DataContainer>
          </>
        ) : (
          <>
            <TitleContainer>
              {resentSearchesTitle}
              <Button
                type="button"
                className={buttonType.TEXT}
                isArrowVisible={false}
                content="CLEAR"
                onClickHandler={() => dispatch(newsActions.setLocalStorageState([]))}
              ></Button>
            </TitleContainer>
            <RecentSearchesContainer>{renderRecentSearchesList(recentSearches)}</RecentSearchesContainer>
          </>
        )}
      </UpperContainer>
      {/* <SearchButtonContainer>
         <Button
          name="submit"
          type="submit"
          className={buttonType.PRIMARY}
          isArrowVisible={false}
          content="SEARCH"
        ></Button> 
      </SearchButtonContainer>*/}
    </SearchSmallScreenContainer>
  );
};
