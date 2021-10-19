import Search from "../Search/Search";
import { TopBarContainer, LogoIcon, IconList, Icon, Account, LogoAndSearchContainer, IconSearch } from "./TopBarStyle";
import settings from "../../Utils/assets/settings.svg";
import notifications from "../../Utils/assets/notifications.svg";
import logo from "../../Utils/assets/LOGO.svg";
import search from "../../Utils/assets/search.svg";

const TopBar = (): JSX.Element => {
  const accountLetter = "AC";
  return (
    <TopBarContainer>
      <LogoAndSearchContainer>
        <LogoIcon src={logo} />
        <Search />
      </LogoAndSearchContainer>
      <IconList>
        <IconSearch src={search} />
        <Icon src={settings} />
        <Icon src={notifications} />
        <Account>{accountLetter}</Account>
      </IconList>
    </TopBarContainer>
  );
};

export default TopBar;
