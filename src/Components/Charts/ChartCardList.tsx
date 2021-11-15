import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { formateChartDate, formateDate } from "../../Utils/HelpFunctions/casting";
import { calcGraphs } from "../../Utils/HelpFunctions/helpFunc";
import { doughnutData, initBarChart, initDoughnutChart, initLineChart, lineData } from "../constants";
import { IDoughnutChart, TChartCard } from "../types";
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
