import { barOptions, ChartType, doughnutOptions, lineOptions, NoDataType, TChartCard } from "../types";
import { ChartCardContainer, ChartTitle, Divider, ChartContainer, SumTitle } from "./ChartCardStyle";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";
import { _DeepPartialObject } from "chart.js/types/utils";
import { NoData } from "../NoData/NoData";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { doughnutColors, NO_DATA } from "../constants";
import {
  DoughnutContainer,
  LegendBullet,
  LegendContainer,
  LegendData,
  LegendListContainer,
  LegendTitle,
  TitleAndBullet,
} from "./ChartCardListStyle";
import ChartLoader from "../Common/ChartLoader";

const ChartCard = (props: TChartCard): JSX.Element => {
  const { title, type, data } = props;
  const cards = useSelector((state: RootState) => state.news.cards);
  const isLoading = useSelector((state: RootState) => state.news.isLoading);

  const renderChartByType = (): JSX.Element => {
    if (isLoading) {
      return <ChartLoader />;
    }
    const typeChart = cards.length === 0 ? NO_DATA : type;
    switch (typeChart) {
      case ChartType.DOUGHNUT:
        let doughnutData = data as ChartData<"doughnut", number[], string>;
        let totalSum = doughnutData.datasets[0].data.reduce((acc, curr) => (acc += curr), 0);
        // let obj: { [key: string]: number } = {};

        // for (let ind = 0; ind++; doughnutData.datasets[0].data.length) {
        //   if (doughnutData.labels) obj[doughnutData.labels[ind]] = doughnutData.datasets[0].data[ind];
        // }

        // var items = Object.keys(obj).map(function (key) {
        //   return [key, obj[key]];
        // });

        // // Sort the array based on the second element
        // items.sort(function (first, second) {
        //   return (second[1] as number) - (first[1] as number);
        // });

        // console.log(items);

        return (
          <>
            <DoughnutContainer>
              <SumTitle>Sum</SumTitle>
              <Doughnut data={doughnutData} options={doughnutOptions as any} />
            </DoughnutContainer>
            <LegendListContainer>
              {doughnutData.labels?.map((label, index) => (
                <LegendContainer key={index}>
                  <TitleAndBullet>
                    <LegendBullet color={doughnutColors[index === 0 ? index : index % doughnutColors.length]} />
                    <LegendTitle>{label}</LegendTitle>
                  </TitleAndBullet>
                  <LegendData>{Math.round((doughnutData.datasets[0].data[index] * 100) / totalSum)}%</LegendData>
                </LegendContainer>
              ))}
            </LegendListContainer>
          </>
        );
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
