import "./App.css";
import WelcomeContainer from "./Components/HomePage/WelcomeContainer/WelcomeContainer";
import Filter from "./Components/Common/Filter/Filer";
import { FilterType } from "../src/Components/Common/types";
import { ICard } from "./Components/Common/types";
import CardList from "./Components/Card/CardList";
import Search from "./Components/Search/Search";
import TopBar from "./Components/TopBar/TopBar";
import assets from "./Utils/assets/assetsImports";

const App = (): JSX.Element => {
  const countriesMock: string[] = ["Israel", "France", "London", "Germany", "Greece"];
  const tagsMock: string[] = ["#Covid-19", "Israel", "+2"];
  const card1Mock: ICard = {
    title: "Porsche Now Sells Two Taycans For Every Model S That Tesla Ships",
    imageUrl:
      "https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/10/15/a07fb9b8c6eb9270972699a5bdd26dc0.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200",
    description:
      "There was a time when the Tesla Model S was the pinnacle of the electric car market. It was fast,...\nThe post Porsche Now Sells Two Taycans For Every Model S That Tesla Ships appeared first on Gizmodo Australia.\n  Related Stories\r\n<ul><li>Tesla Is Rolling Out…",
    publishedAt: "2021-10-18T06:49:25Z",
    tags: tagsMock,
    source: "Gizmodo Australia",
    dispacherLink:
      "https://www.gizmodo.com.au/2021/10/porsche-now-sells-two-taycans-for-every-model-s-that-tesla-ships/",
  };

  const card2Mock: ICard = {
    title: "How to Watch Apple’s October 18 Event—and What to Expect",
    description:
      "Undeterred by mounting international supply chain issues, Apple is trudging ahead with its second hardware event of the fall. Called Unleashed, it's set for tomorrow, and like all of its events over … [+1995 chars]",
    dispacherLink: "https://www.wired.com/story/apple-october-2021-event-how-to-watch-what-to-expect/",
    imageUrl: "https://media.wired.com/photos/5bd3a4216623400e6f91adbb/191:100/w_1280,c_limit/timcook-1032291016.jpg",
    publishedAt: "2021-10-17T11:00:00Z",
    tags: tagsMock,
    source: "Wired",
  };

  const card3Mock: ICard = {
    title: "Defaults loom over more property developers as China reassures investors on Evergrande - CNBC",
    description:
      'Aerial photography of "river view house" on the side of the Yangtze River. Yichang, Hubei Province, Oct. 16, 2020.\r\nThe fallout in China\'s property sector is showing no signs of abating, as more deve… [+5768 chars]',
    dispacherLink:
      "https://www.cnbc.com/2021/10/18/china-property-defaults-risks-for-other-developers-pboc-on-evergrande.html",
    imageUrl:
      "https://image.cnbcfm.com/api/v1/image/106795443-1605246223013-gettyimages-1229195439-China_Real_Estate_Market.jpeg?v=1605245826",
    publishedAt: "2021-10-18T05:07:23Z",
    tags: tagsMock,
    source: "CNBC",
  };

  const cardsMock: ICard[] = [card1Mock, card2Mock, card3Mock];
  return (
    <div>
      <TopBar />
      <Search />
      <CardList cards={cardsMock}></CardList>
      <WelcomeContainer />
      <Filter type={FilterType.DROPDWON_LIST} category="Country" filterOptions={countriesMock}></Filter>
    </div>
  );
};

export default App;
