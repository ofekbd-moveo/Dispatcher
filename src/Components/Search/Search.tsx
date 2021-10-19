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
import searchIcon from "../../Utils/assets/search.svg";
import exitIcon from "../../Utils/assets/exit.svg";
import Filter from "../Common/Filter/Filer";
import { buttonType, FilterType } from "../Common/types";
import Button from "../Common/Button/Button";
import { useEffect, useState } from "react";

const Search = (): JSX.Element => {
  const SearchFromDatabase = ["Top Headline", "Everything"];
  const recentSearches = ["crypto", "soccer", "soc", "fdaad", "dgdf", "asddsf"];
  const [isOpenSearches, setIsOpenSearches] = useState(false);
  const [value, setvalue] = useState("");
  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const onChangeHandler = (event: InputEvent) => {
    setvalue(event.target.value);
  };

  useEffect(() => {
    value ? setIsOpenSearches(true) : setIsOpenSearches(false);
  }, [value]);

  const renderRecentSearchesList = (recentSearches: string[]) =>
    recentSearches.map((search: string, key: number) => (
      <RecentSearch key={key}>
        <span>{search}</span>
        <ExitIcon src={exitIcon} />
      </RecentSearch>
    ));

  return (
    <SearchContainer>
      <SearchLineContainer>
        <SearchIcon src={searchIcon} />
        <SearchArea placeholder="Search" value={value} onChange={onChangeHandler} />
        <div className="vertical-div" />
        <Filter type={FilterType.DROPDWON_LIST} category="Top Headline" filterOptions={SearchFromDatabase}></Filter>
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
          {renderRecentSearchesList(recentSearches)}
        </RecentSearchesContainer>
      )}
    </SearchContainer>
  );
};

export default Search;
