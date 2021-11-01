import { Meta, Story } from "@storybook/react";
import { ChartType } from "../types";
import { TChartCard } from "../types";
import ChartCard from "./ChartCard";

export default {
  component: ChartCard,
  title: "Components/ChartCard",
} as Meta;

const Template: Story<TChartCard> = (args) => <ChartCard {...args} />;

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

export const DOUGHNUT = Template.bind({});
DOUGHNUT.args = {
  title: "Sources",
  type: ChartType.DOUGHNUT,
  data: doughnutDataMock,
};

export const LINE = Template.bind({});
LINE.args = {
  title: "Dates",
  type: ChartType.LINE,
  data: lineDataMock,
};

export const BAR = Template.bind({});
BAR.args = {
  title: "Tags",
  type: ChartType.BAR,
  data: barDataMock,
};
