import { StyleWelcomeContainer } from "./StyleWelcomeContainer";
import StyleDivider from "../../Common/Divider/StyleDivider";
import Button from "../../Common/Button/Button";
import { buttonType } from "../../Common/types";

const WelcomeContainer: React.FC = (): JSX.Element => {
  return (
    <StyleWelcomeContainer>
      <h1 className="welcome-title">Welcome to Dispatcher</h1>
      <p className="app-description">
        Locate articles and breaking news headlines from news sources and blogs across the web
      </p>
      <StyleDivider />
      <Button
        className={buttonType.PRIMARY}
        isArrowVisible={true}
        content="CONTINUE"
        onClickHandler={() => console.log("CONTINUE clicked!")}
      />
      <Button isArrowVisible={true} content="PRIMARY" onClickHandler={() => console.log("PRIMARY clicked!")} />
      <Button
        className={buttonType.SECONDARY}
        isArrowVisible={false}
        content="SECONDARY"
        onClickHandler={() => console.log("SECONDARY clicked!")}
      />
      <Button
        className={buttonType.TEXT}
        isArrowVisible={false}
        content="TEXT"
        onClickHandler={() => console.log("TEXT clicked!")}
      />
    </StyleWelcomeContainer>
  );
};

export default WelcomeContainer;
