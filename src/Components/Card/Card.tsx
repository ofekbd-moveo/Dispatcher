import { CardContainer, Title, Image, Description, Date, Source, ContentContainer, ButtonContainer } from "./CardStyle";
import TagList from "../Common/Tags/TagList";
import Button from "../Common/Button/Button";
import { buttonType, ICard } from "../types";
import { convertDate } from "../../Utils/HelpFunctions/casting";
import { tagsMock } from "../DispatcherPage/Mock";

const Card = (props: ICard): JSX.Element => {
  const { source, author, title, description, url, urlToImage, publishedAt, content } = props;
  const navigateToDispacher = () => window.location.replace(url);
  const navBtnTitle = "NAVIGATE TO DISPATCH";

  return (
    <CardContainer>
      <Image src={urlToImage}></Image>

      <ContentContainer>
        <Date>{convertDate(publishedAt)}</Date>
        <TagList tags={tagsMock} />
        <Title>{title}</Title>
        <Source>{source.name}</Source>
        <Description>{description}</Description>
        <ButtonContainer>
          <Button
            className={buttonType.PRIMARY}
            isArrowVisible
            content={navBtnTitle}
            onClickHandler={navigateToDispacher}
          ></Button>
        </ButtonContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default Card;
