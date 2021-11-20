import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Categories, ICard, TFiltersOptions } from "../Components/types";
import _ from "lodash";
import {
  COUNTRY,
  DATE_KEY,
  initializedAllFiltersOptions,
  initializedSelectedFilters,
  SOURCES,
} from "../Components/constants";
import { loadLocalStorageState, setLocalStorageState } from "../Utils/CustomHooks/LocalStorage";
import { categories } from "../Components/DispatcherPage/Mock";
import { SubCategory } from "../Components/DropDownFilter/SubCategory";

const initializedRecentSearches = loadLocalStorageState();

interface TNews {
  currCategory: string;
  selectedFilters: TFiltersOptions;
  allFiltersOptions: TFiltersOptions;
  cards: ICard[];
  isLoading: boolean;
  searchInput: string;
  recentSearches: string[];
  mainTitle: string;
  isInitial: boolean;
  isErrorOccur: boolean;
  errorMsg: string;
}
const initializedNews: TNews = {
  currCategory: Categories.topHeadline,
  selectedFilters: initializedSelectedFilters,
  allFiltersOptions: initializedAllFiltersOptions,
  cards: [],
  isLoading: true,
  searchInput: "",
  recentSearches: initializedRecentSearches,
  mainTitle: "",
  isInitial: true,
  isErrorOccur: false,
  errorMsg: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState: initializedNews,
  reducers: {
    changeCategory(state, action) {
      state.currCategory = action.payload;
    },

    toogleFilter(state, action) {
      let { subCategory, filter } = action.payload;

      let filtersList = state.selectedFilters[state.currCategory][subCategory];

      switch (subCategory) {
        case "country":
          filter = Object.keys(COUNTRY).find((key) => COUNTRY[key] === filter);
          break;
        case "sources":
          filter = Object.keys(SOURCES).find((key) => SOURCES[key] === filter);
          break;
      }

      const isSelectedFilter = filtersList.includes(filter);

      state.selectedFilters[state.currCategory][subCategory] = isSelectedFilter
        ? _.pull(filtersList, filter)
        : _.concat(filtersList, filter);
    },
    setDate(state, action) {
      state.selectedFilters[Categories.everything][DATE_KEY] = [action.payload];
    },
    setCards(state, action) {
      state.cards = action.payload;
    },
    setMainTitle(state, action) {
      state.mainTitle = action.payload;
    },
    setIsInitial(state, action) {
      state.isInitial = action.payload;
    },

    setSources(state, action) {
      state.allFiltersOptions.everything.sources = action.payload;
      state.allFiltersOptions.topHeadline.sources = action.payload;
    },

    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSearceInput(state, action) {
      state.searchInput = action.payload;
    },
    setLocalStorageState(state, action) {
      setLocalStorageState(action.payload);
      state.recentSearches = action.payload;
    },
    setErrorMsg(state, action) {
      state.errorMsg = action.payload;
    },
    setIsErrorOccur(state, action) {
      state.isErrorOccur = action.payload;
    },
    resetErrorHandler(state) {
      state.errorMsg = "";
      state.isErrorOccur = false;
    },
  },
});

const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});

export const newsActions = newsSlice.actions;
export type RootState = ReturnType<typeof store.getState>;

export default store;
