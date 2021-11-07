import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Categories, ICard, TFiltersOptions } from "../Components/types";
import _ from "lodash";
import { API_KEY, COUNTRY, initializedAllFiltersData, initializedSelectedFilters } from "../Components/constants";
import { convertCategoryToApiLabel, convertToParamsStr } from "../Utils/HelpFunctions/casting";

interface TNews {
  currCategory: string;
  selectedFilters: TFiltersOptions;
  allFiltersData: TFiltersOptions;
  cards: ICard[];
}
const initializedNews: TNews = {
  currCategory: Categories.topHeadline,
  selectedFilters: initializedSelectedFilters,
  allFiltersData: initializedAllFiltersData,
  cards: [],
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

    setCards(state, action) {
      state.cards = action.payload;
    },

    addCards(state, action) {
      state.cards = _.union(state.cards, action.payload);
    },

    setSources(state, action) {
      state.allFiltersData.everything.sources = action.payload;
      state.allFiltersData.topHeadline.sources = action.payload;
    },
  },
});

export const getCardsData = () => {
  return async (dispatch: any, getState: any) => {
    //Get client entry country
    const ipApiRes = await fetch("http://ip-api.com/json", { method: "GET" });
    const entryCountry = COUNTRY[(await ipApiRes.json()).country as keyof typeof COUNTRY];
    const API_CATEGORY = convertCategoryToApiLabel(getState().news.currCategory);

    const URL = "https://newsapi.org/v2/" + API_CATEGORY + "?country=" + entryCountry + "&apiKey=" + API_KEY;

    fetch(URL, { method: "GET" })
      .then((response) => response.json())
      .then((jsonRes) => {
        if (jsonRes.status === "ok") dispatch(newsActions.setCards(jsonRes.articles));
      })
      .catch((error) => console.error("Error:", error));
  };
};

export const getAndSetSources = () => {
  return async (dispatch: any, getState: any) => {
    const URL = "https://newsapi.org/v2/top-headlines/sources?apiKey=" + API_KEY;
    fetch(URL, { method: "GET" })
      .then((response) => response.json())
      .then((jsonRes) => {
        if (jsonRes.status === "ok") {
          let sourcesData = [];
          for (const source of jsonRes.sources) {
            sourcesData.push(source.name);
          }
          dispatch(newsActions.setSources(sourcesData));
        }
      })
      .catch((error) => console.error("Error:", error));
  };
};

export const filterCardsData = () => {
  return async (dispatch: any, getState: any) => {
    const selectedFilters = getState().news.selectedFilters;
    const requestsParams = convertToParamsStr(selectedFilters);

    dispatch(newsActions.setCards([])); //clean selectedFilters

    for (const req of requestsParams) {
      const URL = "https://newsapi.org/v2/" + req + "apiKey=" + API_KEY;
      fetch(URL, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "ok") dispatch(newsActions.addCards(data.articles));
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  };
};

const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});

export const newsActions = newsSlice.actions;
export type RootState = ReturnType<typeof store.getState>;

export default store;
