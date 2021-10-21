import { TChartCard } from "../Common/types";
import ChartCard from "./ChartCard";
import { ChartsContainer } from "./ChartCardListStyle";

const ChartCardList = ({ charts }: { charts: TChartCard[] }): JSX.Element => {
  const renderChartCardList = (cards: TChartCard[]) =>
    cards.map((props: TChartCard, key: number) => <ChartCard {...props} key={key} />);

  return <ChartsContainer>{renderChartCardList(charts)}</ChartsContainer>;
};

export default ChartCardList;
