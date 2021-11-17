import { HomePageContainer, Logo, LogoContainer, TextContainer } from "./HomePageStyle";
import assets from "../../../Utils/assets";
import { ContentContainer, Description, Title } from "./HomePageStyle";
import Divider from "../../Common/Divider/StyleDivider";
import Button from "../../Common/Button/Button";
import { buttonType } from "../../types";
import { useAuth0 } from "@auth0/auth0-react";

export const WelcomePage = (): JSX.Element => {
  const { loginWithRedirect } = useAuth0();

  return (
    <HomePageContainer>
      <LogoContainer>
        <Logo src={assets.logo}></Logo>
      </LogoContainer>
      <ContentContainer>
        <TextContainer>
          <Title>Welcome to Dispatcher</Title>
          <Description>
            Locate articles and breaking news headlines from news sources and blogs across the web
          </Description>
        </TextContainer>
        <div>
          <Divider />
          <Button
            className={buttonType.NONE}
            isArrowVisible={true}
            content="CONTINUE"
            onClickHandler={() => loginWithRedirect({ redirectUri: `${process.env.REACT_APP_PUBLIC_URL}/dispatcher` })}
          />
        </div>
      </ContentContainer>
    </HomePageContainer>
  );
};
