import {
  SearchContainer,
  SearchLineContainer,
  RecentSearchesContainer,
  RecentSearchesHeader,
  RecentSearch,
  SearchIcon,
  SearchArea,
  ExitIcon,
} from "./SearchStyle";
import assets from "../../Utils/assets";
import { buttonType, DropDownFilterType, InputEvent } from "../types";
import Button from "../Common/Button/Button";
import { useState } from "react";
import { DropDownFilter } from "../DropDownFilter/DropDownFilter";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { newsActions, RootState } from "../../store";
import { filterCardsData } from "../../store/indexFuncs";

const Search = (): JSX.Element => {
  const recentSearches = useSelector((state: RootState) => state.news.recentSearches);
  const [isOpenSearches, setIsOpenSearches] = useState(false);
  const searchInput = useSelector((state: RootState) => state.news.searchInput);
  const dispatch = useDispatch();

  const onChangeHandler = (event: InputEvent) => {
    event.preventDefault();
    const newSearchInput = event.target.value;
    dispatch(newsActions.setSearceInput(newSearchInput));
    setIsOpenSearches(newSearchInput !== "");
  };

  const renderRecentSearchesList = (recentSearches: string[]) =>
    recentSearches
      .map((search: string, key: number) => (
        <RecentSearch key={key} onClick={() => dispatch(newsActions.setSearceInput(search))}>
          <span>{search}</span>
          <ExitIcon
            src={assets.exit}
            onClick={() => dispatch(newsActions.setLocalStorageState(recentSearches.filter((curr) => curr !== search)))}
          />
        </RecentSearch>
      ))
      .reverse();

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //add current Search to LocalStorage
    dispatch(newsActions.setLocalStorageState([...recentSearches, searchInput]));

    //send new api request
    dispatch(filterCardsData());

    //close recent searches
    setIsOpenSearches(false);
  };

  return (
    <SearchContainer>
      <SearchLineContainer onSubmit={(e) => submitHandler(e)}>
        <SearchIcon type="image" name="submit" src={assets.search} />
        <SearchArea className="seach-area" placeholder="Search" value={searchInput} onChange={onChangeHandler} />
        <div className="vertical-div" />
        <DropDownFilter type={DropDownFilterType.CATEGORY} />
      </SearchLineContainer>

      {isOpenSearches && (
        <RecentSearchesContainer>
          <RecentSearchesHeader>
            <h1 className="recent-searches-title">RECENT SEARCHES</h1>
            <Button
              className={buttonType.TEXT}
              isArrowVisible={false}
              content="CLEAR"
              onClickHandler={() => dispatch(newsActions.setLocalStorageState([]))}
            ></Button>
          </RecentSearchesHeader>
          {renderRecentSearchesList(recentSearches)}
        </RecentSearchesContainer>
      )}
    </SearchContainer>
  );
};

export default Search;
