import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Categories, ICard, TFiltersOptions } from "../Components/types";
import _ from "lodash";
import { initializedAllFiltersOptions, initializedSelectedFilters } from "../Components/constants";

interface TNews {
  currCategory: string;
  selectedFilters: TFiltersOptions;
  allFiltersOptions: TFiltersOptions;
  cards: ICard[];
  isLoading: boolean;
}
const initializedNews: TNews = {
  currCategory: Categories.topHeadline,
  selectedFilters: initializedSelectedFilters,
  allFiltersOptions: initializedAllFiltersOptions,
  cards: [],
  isLoading: true,
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

      let filtersList = state.selectedFilters[state.currCategory][subCategory];
      const isSelectedFilter = filtersList.includes(filter);

      state.selectedFilters[state.currCategory][subCategory] = isSelectedFilter
        ? _.pull(filtersList, filter)
        : _.concat(filtersList, filter);
    },

    setCards(state, action) {
      state.cards = action.payload;
    },

    addCards(state, action) {
      state.cards = _.union(state.cards, action.payload);
    },

    setSources(state, action) {
      state.allFiltersOptions.everything.sources = action.payload;
      state.allFiltersOptions.topHeadline.sources = action.payload;
    },

    setIsLoading(state, action) {
      state.isLoading = action.payload;
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
