import Card from "./Card";
import { ICard } from "../types";
import { CardsContainer, EndScrollMsg } from "./CardListStyle";
import { useDispatch, useSelector } from "react-redux";
import { newsActions, RootState } from "../../store";
import MyLoader from "../Common/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadMoreCardsData } from "../../store/indexFuncs";
import SmallScreenLoader from "../Common/SmallScreenLoader";
import { useEffect, useRef, useState } from "react";

const CardList = (): JSX.Element => {
  const [prevCardsLength, setPrevCardsLenght] = useState(0);
  const cards = useSelector((state: RootState) => state.news.cards);
  const isLoading = useSelector((state: RootState) => state.news.isLoading);
  const pageNum = useSelector((state: RootState) => state.news.pageNum);
  const selectedFilters = useSelector((state: RootState) => state.news.selectedFilters);
  const searchInput = useSelector((state: RootState) => state.news.searchInput);

  const dispatch = useDispatch();

  useEffect(() => {
    setPrevCardsLenght(0);
  }, [selectedFilters, searchInput]);

  const renderCardList = (cards: ICard[]) =>
    isLoading
      ? Array.apply(null, Array(5)).map((field, key) =>
          window.innerWidth < 480 ? <SmallScreenLoader key={key} /> : <MyLoader key={key} />
        )
      : cards.map((card: ICard, key: number) => (
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
  console.log("prevCardsLenght", prevCardsLength);
  console.log("cards", cards.length);
  console.log(prevCardsLength < cards.length);
  return (
    <CardsContainer id="scrollableDiv">
      <InfiniteScroll
        dataLength={cards.length}
        next={async () => {
          await dispatch(loadMoreCardsData(pageNum));
          dispatch(newsActions.setPageNum(pageNum + 1));
          setPrevCardsLenght(cards.length);
        }}
        hasMore={prevCardsLength < cards.length}
        loader={<EndScrollMsg>loading...</EndScrollMsg>}
        pullDownToRefreshThreshold={10}
        endMessage={
          <div style={{ textAlign: "center" }}>
            <EndScrollMsg>Yay! You have seen it all</EndScrollMsg>
          </div>
        }
        scrollableTarget="scrollableDiv"
      >
        {renderCardList(cards)}
      </InfiniteScroll>
    </CardsContainer>
  );
};

export default CardList;
