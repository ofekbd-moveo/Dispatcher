import { StyleWelcomeContainer } from "./StyleWelcomeContainer";
import StyleDivider from "../../Common/Divider/StyleDivider"
import Button from "../../Common/Button/Button";
import { buttonType } from "../../Common/types";

const WelcomeContainer: React.FC = (): JSX.Element => {
    return (
        <StyleWelcomeContainer>
            <h1 className="welcome-title">Welcome to Dispatcher</h1>
            <p className="app-description">
                Locate articles and breaking news headlines from news sources and blogs across the web
            </p>
            <StyleDivider/>
            <Button className={buttonType.PRIMARY} withArrow={true} content="CONTINUE" link=""/>
            <Button withArrow={true} content="PRIMARY" link=""/>
            <Button className={buttonType.SECONDARY} withArrow={false} content="SECONDARY" link=""/>
            <Button className={buttonType.TEXT} withArrow={false} content="TEXT" link=""/>


        </StyleWelcomeContainer>
    );}

export default WelcomeContainer;
