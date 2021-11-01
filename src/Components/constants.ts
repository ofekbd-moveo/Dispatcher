import { TFiltersOptions } from "./types";

export const ACCOUNT_LETTERS = "AC";

export const SORT_BY_TITLE = "Sort by";

export const EMAIL_LABEL = "Email Address";
export const PASSWORD_LABEL = "Password";

export const allFiltersOptions: TFiltersOptions = {
  everything: {
    sources: ["CBS", "NBC", "Sport 1", "Ynet"],
    country: ["Israel", "France", "London", "Germany", "Greece"],
    category: ["Medical", "Politics", "Music", "Sport"],
  },
  topHeadline: {
    sources: ["CBS", "NBC", "Sport 1"],
    language: ["he", "en", "arb"],
    dates: ["01/01/2020", "20/12/1993"],
  },
};

export const initializedSelectedFilters = {
  everything: {
    sources: [],
    country: [],
    category: [],
  },
  topHeadline: {
    sources: [],
    language: [],
    dates: [],
  },
};

export const CATEGORY_TITLE = "Search in";
export const MAIN_TITLE = "FILTER";
