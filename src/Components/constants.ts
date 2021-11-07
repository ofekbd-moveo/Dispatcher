import { TFiltersOptions } from "./types";

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
export const initializedAllFiltersData: TFiltersOptions = {
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

export const SORT_BY_TITLE = "Sort by";
export const EMAIL_LABEL = "Email Address";
export const PASSWORD_LABEL = "Password";
export const CATEGORY_TITLE = "Search in";
export const MAIN_TITLE = "FILTER";
export const API_KEY = "fc30f4ba09eb4775af717dad7d32b7a3";
