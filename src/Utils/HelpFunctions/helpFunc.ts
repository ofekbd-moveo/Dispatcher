import { COUNTRY, doughnutData, LANGUAGE, lineData, SOURCES } from "../../Components/constants";
import { ICard, IDoughnutChart, ILineChart, TFiltersOptions } from "../../Components/types";
import { formateChartDate } from "./casting";

export const fetchData = (URL: string, func: (articles: TFiltersOptions[]) => void) => {
  fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) func(data.articles);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

export const calcGraphs = (
  cards: ICard[],
  doughnutChart: IDoughnutChart,
  lineChart: ILineChart,
  setDoughnutChart: (newState: any) => void,
  setLineChart: (newState: any) => void
) => {
  //Sources at Doughnut chart
  const sourcesList = cards.map((card) => card.source.name);
  const sourcesOccurrences: { [label: string]: number } = sourcesList.reduce(function (
    acc: { [label: string]: number },
    curr: string
  ) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  },
  {});

  setDoughnutChart({
    ...doughnutChart,
    data: {
      labels: Object.keys(sourcesOccurrences),
      datasets: [{ ...doughnutData.datasets[0], data: Object.values(sourcesOccurrences) }],
    },
  });

  //Dates at Line chart
  const datesList = cards.map((card) => formateChartDate(card.publishedAt));
  const datesOccurrences = datesList.reduce(function (acc: { [label: string]: number }, curr: string) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  setLineChart({
    ...lineChart,
    data: {
      labels: Object.keys(datesOccurrences),
      datasets: [{ ...lineData.datasets[0], data: Object.values(datesOccurrences) }],
    },
  });
};

export const getKeyOfVal = (subCategory: string, val: string) => {
  let res;
  switch (subCategory) {
    case "country":
      res = Object.keys(COUNTRY).find((key) => COUNTRY[key] === val);
      break;
    case "sources":
      res = Object.keys(SOURCES).find((key) => SOURCES[key] === val);
      break;
    case "language":
      res = Object.keys(LANGUAGE).find((key) => LANGUAGE[key] === val);
      break;
  }

  return res ? res : val;
};

export const getValOfKey = (subCategory: string, val: string) => {
  let res;
  switch (subCategory) {
    case "country":
      res = COUNTRY[val];

      break;
    case "sources":
      res = SOURCES[val];
      break;
    case "language":
      res = LANGUAGE[val];
      break;
  }

  return res ? res : val;
};
