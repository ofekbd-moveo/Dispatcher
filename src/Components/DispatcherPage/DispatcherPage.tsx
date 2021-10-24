import CardList from "../Card/CardList";
import ChartCardList from "../Charts/ChartCardList";
import Divider from "../Common/Divider/StyleDivider";
import Filter from "../Common/Filter/Filer";
import { ChartType, FilterType, ICard, IDoughnutChart, NoDataType, TChartCard } from "../Common/types";
import { NoData } from "../NoData/NoData";
import TopBar from "../TopBar/TopBar";
import { ContentContainer, DataContentContainer, FilterList, FilterContainer, Title } from "./DispatcherPageStyle";

const countries = ["Israel", "France", "London", "Germany", "Greece"];
const categories = ["Medical", "Politics", "Music", "Sport"];
const sources = ["NBC", "CNN", "ESPN", "Vulture"];
const country = "Israel";
const dispatchersDatabase = "Top Headline";
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
  dispacherLink: "https://www.gizmodo.com.au/2021/10/porsche-now-sells-two-taycans-for-every-model-s-that-tesla-ships/",
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

const doughnutDataMock = {
  labels: ["NBC", "Vulture", "CNN", "ESPN"],
  datasets: [
    {
      label: "Sum",
      data: [15, 15, 30, 48],
      backgroundColor: [
        "rgba(221, 243, 254, 0.5)",
        "rgba(255, 152, 0, 0.5)",
        "rgba(3, 0, 53, 0.5)",
        "rgba(52, 58, 110, 0.5)",
      ],
      borderColor: ["rgba(221, 243, 254, 1)", "rgba(255, 152, 0, 1)", "rgba(3, 0, 53, 1)", "rgba(52, 58, 110, 1)"],
      borderWidth: 2,
      hoverBackgroundColor: [
        "rgba(221, 243, 254, 0.8)",
        "rgba(255, 152, 0, 0.8)",
        "rgba(3, 0, 53, 0.8)",
        "rgba(52, 58, 110, 0.8)",
      ],
      hoverOffset: 5,
    },
  ],
};

const lineDataMock = {
  labels: ["MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
  datasets: [
    {
      label: "# of dispatchers",
      data: [20, 10, 17, 30, 34, 26],
      fill: true,
      backgroundColor: "rgba(0, 88, 185, 0.2)",
      borderColor: "rgba(0, 88, 185, 0.7)",
      tension: 1,
    },
  ],
};

const barDataMock = {
  labels: ["Crypto", "Chine", "Tech", "Israel", "Politics", "Economy"],
  datasets: [
    {
      label: "# of tags",
      data: [32, 12, 58, 40, 20, 30],
      backgroundColor: [
        "rgba(0, 88, 185, 0.9)",
        "rgba(0, 88, 185, 0.9)",
        "rgba(0, 88, 185, 0.9)",
        "rgba(0, 88, 185, 0.9)",
        "rgba(0, 88, 185, 0.9)",
        "rgba(0, 88, 185, 0.9)",
      ],
      borderRadius: 10,
      borderWidth: 1,
      indexAxis: "y",
    },
  ],
};

const doughnutChartMock: IDoughnutChart = {
  title: "Sources",
  type: ChartType.DOUGHNUT,
  data: doughnutDataMock,
};
const lineChartMock: TChartCard = {
  title: "Dates",
  type: ChartType.LINE,
  data: lineDataMock,
};

const barChartMock: TChartCard = {
  title: "Tags",
  type: ChartType.BAR,
  data: barDataMock,
};

const chartsMock: TChartCard[] = [doughnutChartMock, lineChartMock, barChartMock];

const missingData: boolean = false;

export const DispatcherPage = (): JSX.Element => {
  return (
    <>
      <TopBar />
      <ContentContainer>
        <FilterList>
          <FilterContainer>
            <Filter type={FilterType.DROPDWON_LIST} category="Country" filterOptions={countries} />
          </FilterContainer>
          <FilterContainer>
            <Filter type={FilterType.DROPDWON_LIST} category="Ctegory" filterOptions={categories} />
          </FilterContainer>
          <FilterContainer>
            <Filter type={FilterType.DROPDWON_LIST} category="Sources" filterOptions={sources} />
          </FilterContainer>
        </FilterList>

        <Divider />
        <Title>{dispatchersDatabase + " in " + country}</Title>
        <DataContentContainer>
          {missingData ? <NoData type={NoDataType.TEXTUAL} /> : <CardList cards={cardsMock} />}
          <ChartCardList charts={chartsMock}></ChartCardList>
        </DataContentContainer>
      </ContentContainer>
    </>
  );
};
