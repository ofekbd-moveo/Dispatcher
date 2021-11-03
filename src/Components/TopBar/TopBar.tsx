import Search from "../Search/Search";
import { TopBarContainer, LogoIcon, IconList, Icon, Account, LogoAndSearchContainer, IconSearch } from "./TopBarStyle";
import settings from "../../Utils/assets/settings.svg";
import notifications from "../../Utils/assets/notifications.svg";
import assets from "../../Utils/assets";
import { ITopBar } from "../types";
import { ACCOUNT_LETTERS } from "../constants";

const TopBar = (props: ITopBar): JSX.Element => {
  const {
    allFiltersOptions,
    selectedFilters,
    category,
    setCategory,
    filterClickHandler,
    openSearchBarClickHandler,
  } = props;

  return (
    <TopBarContainer>
      <LogoAndSearchContainer>
        <LogoIcon src={assets.logo} />
        <Search
          allFiltersOptions={allFiltersOptions}
          selectedFilters={selectedFilters}
          category={category}
          setCategory={setCategory}
          filterClickHandler={filterClickHandler}
        />
      </LogoAndSearchContainer>
      <IconList>
        <IconSearch src={assets.search} onClick={openSearchBarClickHandler} />
        <Icon src={settings} />
        <Icon src={notifications} />
        <Account>{ACCOUNT_LETTERS}</Account>
      </IconList>
    </TopBarContainer>
  );
};

export default TopBar;
