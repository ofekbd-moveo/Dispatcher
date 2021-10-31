import { HomePageContainer, Logo, LogoContainer, TextContainer } from "./HomePageStyle";
import assets from "../../../Utils/assets";
import { ContentContainer, Description, Title } from "./HomePageStyle";
import Divider from "../../Common/Divider/StyleDivider";
import Button from "../../Common/Button/Button";
import { buttonType } from "../../Common/types";

export const HomePage = (): JSX.Element => {
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
            onClickHandler={() => console.log("CONTINUE clicked!")}
          />
        </div>
      </ContentContainer>
    </HomePageContainer>
  );
};
