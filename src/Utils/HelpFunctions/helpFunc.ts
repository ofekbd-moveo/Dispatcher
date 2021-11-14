import { doughnutData, lineData } from "../../Components/constants";
import { ICard, TFiltersOptions } from "../../Components/types";
import { formateDate } from "./casting";

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

export const statistics = (cards: ICard[]) => {
  //Sources at Doughnut chart
  const sourcesList = cards.map((card) => card.source.name);
  const sourcesOccurrences = sourcesList.reduce(function (acc: { [label: string]: number }, curr: string) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  doughnutData.labels = Object.keys(sourcesOccurrences);
  doughnutData.datasets[0].data = Object.values(sourcesOccurrences);

  //Dates at Line chart
  const datesList = cards.map((card) => formateDate(card.publishedAt));
  const datesOccurrences = datesList.reduce(function (acc: { [label: string]: number }, curr: string) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  lineData.labels = Object.keys(datesOccurrences);
  lineData.datasets[0].data = Object.values(datesOccurrences);
};
