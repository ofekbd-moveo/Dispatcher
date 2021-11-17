import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { calcGraphs } from "../../Utils/HelpFunctions/helpFunc";
import { initBarChart, initDoughnutChart, initLineChart } from "../constants";
import { TChartCard } from "../types";
import ChartCard from "./ChartCard";
import { ChartsContainer } from "./ChartCardListStyle";

// { charts }: { charts: TChartCard[] }
const ChartCardList = (): JSX.Element => {
  const [doughnutChart, setDoughnutChart] = useState(initDoughnutChart);
  const [lineChart, setLineChart] = useState(initLineChart);
  const [barChart, setBarChart] = useState(initBarChart);

  const charts: TChartCard[] = [doughnutChart, lineChart, barChart];

  const cards = useSelector((state: RootState) => state.news.cards);

  useEffect(() => {
    calcGraphs(cards, doughnutChart, lineChart, setDoughnutChart, setLineChart);
  }, [cards]);

  const renderChartCardList = (cards: TChartCard[]) =>
    cards.map((props: TChartCard, key: number) => <ChartCard {...props} key={key} />);

  return <ChartsContainer>{renderChartCardList(charts)}</ChartsContainer>;
};

export default ChartCardList;
