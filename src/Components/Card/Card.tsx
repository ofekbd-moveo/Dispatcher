import { CardContainer, Title, Image, Description, Date, Source, ContentContainer, ButtonContainer } from "./CardStyle";
import TagList from "../Common/Tags/TagList";
import Button from "../Common/Button/Button";
import { buttonType, ICard } from "../Common/types";
import { convertDate } from "../../Utils/HelpFunctions/casting";

const Card = (props: ICard): JSX.Element => {
  const { title, imageUrl, description, publishedAt, tags, source, dispacherLink } = props;
  const navigateToDispacher = () => window.location.replace(props.dispacherLink);
  const navBtnTitle = "NAVIGATE TO DISPATCH";

  return (
    <CardContainer>
      <Image src={imageUrl}></Image>

      <ContentContainer>
        <Date>{convertDate(publishedAt)}</Date>
        <TagList tags={tags} />
        <Title>{title}</Title>
        <Source>{source}</Source>
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
