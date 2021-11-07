import Card from "./Card";
import { ICard } from "../types";
import { CardsContainer } from "./CardListStyle";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const CardList = (): JSX.Element => {
  const cards = useSelector((state: RootState) => state.news.cards);
  const renderCardList = (cards: ICard[]) =>
    cards.map((card: ICard, key: number) => (
      <Card
        key={key}
        source={card.source}
        author={card.author}
        title={card.title}
        description={card.description}
        url={card.url}
        urlToImage={card.urlToImage}
        publishedAt={card.publishedAt}
        content={card.content}
      />
    ));

  return <CardsContainer>{renderCardList(cards)}</CardsContainer>;
};

export default CardList;
