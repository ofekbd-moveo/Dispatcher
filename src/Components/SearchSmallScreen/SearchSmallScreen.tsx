import Button from "../Common/Button/Button";
import { buttonType } from "../types";
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
} from "./SearchSmallScreenStyle";
import assets from "../../Utils/assets";
import { useDispatch, useSelector } from "react-redux";
import { newsActions, RootState } from "../../store";
import { filterCardsData } from "../../store/indexFuncs";
import { ChangeEvent } from "react";

export interface ISreachSmallScreen {
  isMenuOpen: boolean;
  closeSearchBarClickHandler: () => void;
}
export const SearchSmallScreen = (props: ISreachSmallScreen): JSX.Element => {
  const { isMenuOpen, closeSearchBarClickHandler } = props;
  const resentSearchesTitle = "RECENT SHEARCHES";
  const searchInput = useSelector((state: RootState) => state.news.searchInput);
  const recentSearches = useSelector((state: RootState) => state.news.recentSearches);

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

    //close search sidebar
    closeSearchBarClickHandler();
  };

  return (
    <SearchSmallScreenContainer className={isMenuOpen ? "open" : "close"} onSubmit={(e) => submitHandler(e)}>
      <UpperContainer>
        <SearchInputContainer>
          <div className="search-input">
            <BackArrow src={assets.back} />
            <SearchInputArea
              placeholder="Search"
              value={searchInput}
              onChange={(e) => onChangeHandler(e)}
            ></SearchInputArea>
          </div>
          <RemoveIcon src={assets.exit} onClick={closeSearchBarClickHandler} />
        </SearchInputContainer>
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
      </UpperContainer>
      <SearchButtonContainer>
        <Button
          name="submit"
          type="submit"
          className={buttonType.PRIMARY}
          isArrowVisible={false}
          content="SEARCH"
        ></Button>
      </SearchButtonContainer>
    </SearchSmallScreenContainer>
  );
};
