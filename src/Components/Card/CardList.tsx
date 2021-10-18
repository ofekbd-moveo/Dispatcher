import { nextKeyIndex } from "../../Utils/HelpFunctions/generators";
import Card, { ICard } from "./Card";
import { CardsContainer } from "./CardListStyle";

const CardList = ({ cards }: { cards: ICard[] }): JSX.Element => {
  const renderCardList = (cards: ICard[]) =>
    cards.map((card: ICard) => (
      <Card
        key={nextKeyIndex()}
        title={card.title}
        imageUrl={card.imageUrl}
        description={card.description}
        publishedAt={card.publishedAt}
        tags={card.tags}
        source={card.source}
        dispacherLink={card.dispacherLink}
      />
    ));

  return <CardsContainer>{renderCardList(cards)}</CardsContainer>;
};

export default CardList;
