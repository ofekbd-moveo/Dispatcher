import Search from "../Search/Search";
import { TopBarContainer, LogoIcon, IconList, Icon, Account, LogoAndSearchContainer, IconSearch } from "./TopBarStyle";
import settings from "../../Utils/assets/settings.svg";
import notifications from "../../Utils/assets/notifications.svg";
import assets from "../../Utils/assets/assetsImports";

const TopBar = ({ openSearchBarClickHandler }: { openSearchBarClickHandler: () => void }): JSX.Element => {
  const accountLetter = "AC";

  return (
    <TopBarContainer>
      <LogoAndSearchContainer>
        <LogoIcon src={assets.logo} />
        <Search />
      </LogoAndSearchContainer>
      <IconList>
        <IconSearch src={assets.search} onClick={openSearchBarClickHandler} />
        <Icon src={settings} />
        <Icon src={notifications} />
        <Account>{accountLetter}</Account>
      </IconList>
    </TopBarContainer>
  );
};

export default TopBar;
