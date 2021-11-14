import { doughnutDataType, lineDataType, TFiltersOptions } from "./types";

export const COUNTRY: { [item: string]: string } = {
  Argentina: "ar",
  Australia: "au",
  Austria: "at",
  Belgium: "be",
  Brazil: "br",
  Canada: "ca",
  China: "cn",
  Israel: "il",
  USA: "us",
};
export const LANGUAGE: { [item: string]: string } = {
  Arabic: "ar",
  English: "en",
  French: "fr",
  Italian: "it",
  Hebrew: "he",
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
    sortBy: Object.keys(SORT_BY),
    Dates: [],
    sources: [],
    language: Object.keys(LANGUAGE),
  },
  topHeadline: {
    country: Object.keys(COUNTRY),
    category: Object.keys(CATEGORY),
    sources: [],
  },
};

export const initializedSelectedFilters: TFiltersOptions = {
  everything: {
    sortBy: [],
    Dates: [],
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
    },
  ],
};

export const lineData: lineDataType = {
  labels: [],
  datasets: [
    {
      label: "# of dispatchers",
      data: [],
      fill: true,
      backgroundColor: "rgba(0, 88, 185, 0.2)",
      borderColor: "rgba(0, 88, 185, 0.7)",
      tension: 1,
    },
  ],
};

export const SORT_BY_TITLE = "Sort by";
export const EMAIL_LABEL = "Email Address";
export const PASSWORD_LABEL = "Password";
export const CATEGORY_TITLE = "Search in";
export const MAIN_TITLE = "FILTER";
export const API_URL = "https://newsapi.org/v2/";
export const API_KEY = "fc30f4ba09eb4775af717dad7d32b7a3";
