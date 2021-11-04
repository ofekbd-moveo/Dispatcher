import { createSlice, configureStore, current } from "@reduxjs/toolkit";
import { Categories, TFiltersOptions } from "../Components/types";
import _ from "lodash";

interface TNews {
  currCategory: string;
  selectedFilters: TFiltersOptions;
  allFiltersData: TFiltersOptions;
}
const initializedNews: TNews = {
  currCategory: Categories.everything,
  selectedFilters: {
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
  },
  allFiltersData: {
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
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState: initializedNews,
  reducers: {
    changeCategory(state, action) {
      state.currCategory = action.payload;
    },
    toogleFilter(state, action) {
      const { subCategory, filter } = action.payload;
      var filtersList = state.selectedFilters[state.currCategory][subCategory];
      const isSelectedFilter = filtersList.includes(filter);

      state.selectedFilters[state.currCategory][subCategory] = isSelectedFilter
        ? _.pull(filtersList, filter)
        : _.concat(filtersList, filter);
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
