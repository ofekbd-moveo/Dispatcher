import Button from "../Common/Button/Button";
import { buttonType } from "../Common/types";
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
} from "./SearchSmallScreenStyle";
import assets from "../../Utils/assets/assetsImports";

export interface ISreachSmallScreen {
  recentSearches: string[];
  isMenuOpen: boolean;
  closeSearchBarClickHandler: () => void;
}
export const SearchSmallScreen = (props: ISreachSmallScreen): JSX.Element => {
  const { recentSearches, isMenuOpen, closeSearchBarClickHandler } = props;
  const resentSearchesTitle = "RECENT SHEARCHES";

  const renderRecentSearchesList = (recentSearches: string[]) =>
    recentSearches.map((search: string, key: number) => (
      <RecentSearch key={key}>
        <span>{search}</span>
        <RemoveIcon src={assets.exit} />
      </RecentSearch>
    ));

  return (
    <SearchSmallScreenContainer className={isMenuOpen ? "open" : "close"}>
      <RecentSearchesContainer>
        <SearchInputContainer>
          <div className="search-input">
            <BackArrow src={assets.back} />
            <SearchInputArea placeholder="Search"></SearchInputArea>
          </div>
          <RemoveIcon src={assets.exit} onClick={closeSearchBarClickHandler} />
        </SearchInputContainer>
        <TitleContainer>
          {resentSearchesTitle}
          <Button
            className={buttonType.TEXT}
            isArrowVisible={false}
            content="CLEAR"
            onClickHandler={() => console.log("clear searches!")}
          ></Button>
        </TitleContainer>
        {renderRecentSearchesList(recentSearches)}
      </RecentSearchesContainer>
      <SearchButtonContainer>
        <Button
          className={buttonType.PRIMARY}
          isArrowVisible={false}
          content="SEARCH"
          onClickHandler={() => console.log("start searching!")}
        ></Button>
      </SearchButtonContainer>
    </SearchSmallScreenContainer>
  );
};
