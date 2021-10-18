import { CardContainer, Title, Image, Description, Date, Source, ContentContainer } from "./CardStyle";
import { convertDate } from "../../Utils/HelpFunctions/casting";
import TagList from "../Common/Tags/TagList";
import Button from "../Common/Button/Button";
import { buttonType } from "../Common/types";
export interface ICard {
  title: string;
  imageUrl: string;
  description: string;
  publishedAt: string;
  tags: string[];
  source: string;
  dispacherLink: string;
}

const Card = (props: ICard): JSX.Element => {
  const navigateToDispacher = () => window.location.replace(props.dispacherLink);

  return (
    <CardContainer>
      <Image src={props.imageUrl}></Image>

      <ContentContainer>
        <Date>{convertDate(props.publishedAt)}</Date>
        <TagList tags={props.tags} />
        <Title>{props.title}</Title>
        <Source>{props.source}</Source>
        <Description>{props.description}</Description>
        <Button
          className={buttonType.PRIMARY}
          isArrowVisible={true}
          content={"NAVIGATE TO DISPATCH"}
          onClickHander={navigateToDispacher}
        ></Button>
      </ContentContainer>
    </CardContainer>
  );
};

export default Card;
