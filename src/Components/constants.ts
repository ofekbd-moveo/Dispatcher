import { barDataMock } from "./DispatcherPage/Mock";
import {
  ChartType,
  doughnutDataType,
  IBarChart,
  IDoughnutChart,
  ILineChart,
  lineDataType,
  TFiltersOptions,
} from "./types";

export const COUNTRY: { [item: string]: string } = {
  ar: "Argentina",
  au: "Australia",
  at: "Austria",
  be: "Belgium",
  br: "Brazil",
  ca: "Canada",
  cn: "China",
  il: "Israel",
};
export let SOURCES: { [item: string]: string } = {};
export const LANGUAGE: { [item: string]: string } = {
  ar: "Arabic",
  en: "English",
  fr: "French",
};
export const SORT_BY: { [item: string]: string } = {
  relevancy: "relevancy",
  popularity: "popularity",
  publishedAt: "publishedAt",
};

export const CATEGORY: { [item: string]: string } = {
  business: "business",
  entertainment: "entertainment",
  general: "general",
  health: "health",
  science: "science",
  sports: "sports",
  technology: "technology",
};
export const initializedAllFiltersOptions: TFiltersOptions = {
  everything: {
    sortBy: Object.values(SORT_BY),
    dates: [],
    sources: [],
    language: Object.values(LANGUAGE),
  },
  topHeadline: {
    country: Object.values(COUNTRY),
    category: Object.values(CATEGORY),
    sources: [],
  },
};

export const initializedSelectedFilters: TFiltersOptions = {
  everything: {
    sortBy: [],
    dates: [],
    sources: [],
    language: [],
  },
  topHeadline: {
    country: [],
    category: [],
    sources: [],
  },
};

export const doughnutData: doughnutDataType = {
  labels: [],
  datasets: [
    {
      label: "Sum",
      data: [],
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
      cutout: "80%",
    },
  ],
};

export const lineData: lineDataType = {
  labels: [],
  datasets: [
    {
      label: "# of articles",
      data: [],
      fill: true,
      backgroundColor: "rgba(0, 88, 185, 0.2)",
      borderColor: "rgba(0, 88, 185, 0.7)",
      tension: 1,
    },
  ],
};
export const initDoughnutChart: IDoughnutChart = {
  title: "Sources",
  type: ChartType.DOUGHNUT,
  data: doughnutData,
};
export const initLineChart: ILineChart = {
  title: "Dates",
  type: ChartType.LINE,
  data: lineData,
};

export const initBarChart: IBarChart = {
  title: "Tags",
  type: ChartType.BAR,
  data: barDataMock,
};

// export const charts: TChartCard[] = [doughnutChart, lineChart, barChart];

export const SORT_BY_TITLE = "Sort by";
export const EMAIL_LABEL = "Email Address";
export const PASSWORD_LABEL = "Password";
export const CATEGORY_TITLE = "Search in";
export const MAIN_TITLE = "FILTER";
export const NO_DATA = "NONE";
export const DATE_KEY = "dates";
export const startDateIndexRange = [5, 15];
export const endDateIndexRange = [19, 29];

export const API_URL = "https://newsapi.org/v2/";
export const API_KEY = "23505bb23f6c49fcbc29b13770fae175";

// fc30f4ba09eb4775af717dad7d32b7a3
//d299469ecdb548a88e2c5f0fde8c080d
//23505bb23f6c49fcbc29b13770fae175
