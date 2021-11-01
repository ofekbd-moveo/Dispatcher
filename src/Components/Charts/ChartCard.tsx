import { barOptions, ChartType, doughnutOptions, lineOptions, TChartCard } from "../types";
import { ChartCardContainer, ChartTitle, Divider, ChartContainer } from "./ChartCardStyle";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";
import { _DeepPartialObject } from "chart.js/types/utils";

const renderChartByType = (props: TChartCard): JSX.Element => {
  const { title, type, data } = props;
  switch (type) {
    case ChartType.DOUGHNUT:
      return <Doughnut data={data as ChartData<"doughnut", number[], string>} options={doughnutOptions} />;
    case ChartType.LINE:
      return <Line data={data as ChartData<"line", number[], string>} options={lineOptions} />;
    case ChartType.BAR:
      return <Bar data={data as ChartData<"bar", number[], string>} options={barOptions} />;
    default:
      return <></>; //TODO: replace here to missingData component when create it
  }
};

const ChartCard = (props: TChartCard): JSX.Element => {
  const chartToRender = renderChartByType(props);

  return (
    <ChartCardContainer>
      <ChartTitle>{props.title}</ChartTitle>
      <Divider></Divider>
      <ChartContainer>{chartToRender}</ChartContainer>
    </ChartCardContainer>
  );
};

export default ChartCard;
