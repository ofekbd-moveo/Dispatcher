import Search from "../Search/Search";
import { TopBarContainer, LogoIcon, IconList, Icon, Account, LogoAndSearchContainer, IconSearch } from "./TopBarStyle";
import settings from "../../Utils/assets/settings.svg";
import notifications from "../../Utils/assets/notifications.svg";
import assets from "../../Utils/assets";
import { ITopBar } from "../types";
import { useAuth0 } from "@auth0/auth0-react";
import ReactTooltip from "react-tooltip";

const TopBar = (props: ITopBar): JSX.Element => {
  const { openSearchBarClickHandler } = props;

  const { logout } = useAuth0();
  const { user } = useAuth0();
  const ACCOUNT_LETTERS = (user?.name as string)
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <TopBarContainer>
      <LogoAndSearchContainer>
        <LogoIcon src={assets.logo} />
        <Search />
      </LogoAndSearchContainer>
      <IconList>
        <IconSearch src={assets.search} onClick={openSearchBarClickHandler} />
        <Icon src={settings} data-tip data-for="comingSoonTip" />
        <Icon src={notifications} data-tip data-for="comingSoonTip" />
        <ReactTooltip id="comingSoonTip" place="top" effect="solid">
          coming soon...
        </ReactTooltip>

        <Account
          onClick={() =>
            logout({
              returnTo: window.location.origin,
            })
          }
        >
          {ACCOUNT_LETTERS}
        </Account>
      </IconList>
    </TopBarContainer>
  );
};

export default TopBar;
