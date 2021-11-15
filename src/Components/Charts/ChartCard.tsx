import { barOptions, ChartType, doughnutOptions, lineOptions, NoDataType, TChartCard } from "../types";
import { ChartCardContainer, ChartTitle, Divider, ChartContainer } from "./ChartCardStyle";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";
import { _DeepPartialObject } from "chart.js/types/utils";
import { NoData } from "../NoData/NoData";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { NO_DATA } from "../constants";

const ChartCard = (props: TChartCard): JSX.Element => {
  const { title, type, data } = props;
  const cards = useSelector((state: RootState) => state.news.cards);

  const renderChartByType = (): JSX.Element => {
    const typeChart = cards.length === 0 ? NO_DATA : type;
    switch (typeChart) {
      case ChartType.DOUGHNUT:
        return <Doughnut data={data as ChartData<"doughnut", number[], string>} options={doughnutOptions} />;
      case ChartType.LINE:
        return <Line data={data as ChartData<"line", number[], string>} options={lineOptions} />;
      case ChartType.BAR:
        return <Bar data={data as ChartData<"bar", number[], string>} options={barOptions} />;
      default:
        return <NoData type={NoDataType.GRAPHIC} />;
    }
  };
  return (
    <ChartCardContainer>
      <ChartTitle>{title}</ChartTitle>
      <Divider></Divider>
      <ChartContainer>{renderChartByType()}</ChartContainer>
    </ChartCardContainer>
  );
};

export default ChartCard;
