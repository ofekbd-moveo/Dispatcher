import { StyleWelcomeContainer } from "./StyleWelcomeContainer";
import StyleDivider from "../../Common/Divider/StyleDivider";
import ButtonContainer from "../../Common/Button/ButtonContainer";
import { buttonType } from "../../Common/types";

const WelcomeContainer: React.FC = (): JSX.Element => {
  return (
    <StyleWelcomeContainer>
      <h1 className="welcome-title">Welcome to Dispatcher</h1>
      <p className="app-description">
        Locate articles and breaking news headlines from news sources and blogs across the web
      </p>
      <StyleDivider />
      <ButtonContainer
        className={buttonType.PRIMARY}
        isArrowVisible={true}
        content="CONTINUE"
        onClickHander={() => console.log("CONTINUE clicked!")}
      />
      <ButtonContainer isArrowVisible={true} content="PRIMARY" onClickHander={() => console.log("PRIMARY clicked!")} />
      <ButtonContainer
        className={buttonType.SECONDARY}
        isArrowVisible={false}
        content="SECONDARY"
        onClickHander={() => console.log("SECONDARY clicked!")}
      />
      <ButtonContainer
        className={buttonType.TEXT}
        isArrowVisible={false}
        content="TEXT"
        onClickHander={() => console.log("TEXT clicked!")}
      />
    </StyleWelcomeContainer>
  );
};

export default WelcomeContainer;