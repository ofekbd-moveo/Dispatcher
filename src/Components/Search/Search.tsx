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
import { recentSearchesMock } from "../DispatcherPage/Mock";

const Search = (): JSX.Element => {
  const [isOpenSearches, setIsOpenSearches] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const onChangeHandler = (event: InputEvent) => {
    event.preventDefault();
    const newSearchInput = event.target.value;
    setSearchInput(newSearchInput);
    setIsOpenSearches(newSearchInput !== "");
  };

  const renderRecentSearchesList = (recentSearches: string[]) =>
    recentSearches.map((search: string, key: number) => (
      <RecentSearch key={key}>
        <span>{search}</span>
        <ExitIcon src={assets.exit} />
      </RecentSearch>
    ));

  return (
    <SearchContainer>
      <SearchLineContainer>
        <SearchIcon src={assets.search} />
        <SearchArea placeholder="Search" value={searchInput} onChange={onChangeHandler} />
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
              onClickHandler={() => console.log("clear searches!")}
            ></Button>
          </RecentSearchesHeader>
          {renderRecentSearchesList(recentSearchesMock)}
        </RecentSearchesContainer>
      )}
    </SearchContainer>
  );
};

export default Search;
