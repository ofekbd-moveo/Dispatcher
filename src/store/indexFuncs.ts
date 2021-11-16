import axios from "axios";
import _ from "lodash";
import { newsActions } from ".";
import { API_KEY, API_URL, COUNTRY } from "../Components/constants";
import { apiMock } from "../Components/DispatcherPage/Mock";
import { ICard } from "../Components/types";
import { convertCategoryToApiLabel, convertToParamsStr } from "../Utils/HelpFunctions/casting";

export const initCardsData = () => async (dispatch: any, getState: any) => {
  //Get client Entry Country
  const ipApiRes = await fetch("http://ip-api.com/json", { method: "GET" });
  const entryCountry = COUNTRY[(await ipApiRes.json()).country as keyof typeof COUNTRY];
  const API_CATEGORY = convertCategoryToApiLabel(getState().news.currCategory);

  const URL = API_URL + API_CATEGORY + "?country=" + entryCountry + "&apiKey=" + API_KEY;

  axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        dispatch(newsActions.setCards(res.data.articles));
      }
    })
    .catch((error) => console.error("Error:", error))
    .then(() => dispatch(newsActions.setIsLoading(false)));
  // dispatch(newsActions.setCards(apiMock.articles));
  // dispatch(newsActions.setIsLoading(false));
};

export const initSources = () => async (dispatch: any, getState: any) => {
  const URL = API_URL + "top-headlines/sources?apiKey=" + API_KEY;
  axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        let sourcesData = [];
        for (const source of res.data.sources) {
          sourcesData.push(source.name);
        }
        dispatch(newsActions.setSources(sourcesData));
      }
    })
    .catch((error) => console.error("Error:", error));
};

export const filterCardsData = () => async (dispatch: any, getState: any) => {
  const selectedFilters = getState().news.selectedFilters;
  const searchInput = getState().news.searchInput;

  const searchStr = searchInput === "" ? "" : `q=${searchInput}&`;

  const requestsParams = convertToParamsStr(selectedFilters);
  await dispatch(newsActions.setIsLoading(true));

  let newCards: ICard[] = [];
  for (const req of requestsParams) {
    const URL = API_URL + requestsParams[0] + searchStr + "apiKey=" + API_KEY;

    await axios
      .get(URL)
      .then((res) => {
        if (res.status === 200) {
          newCards.push(...res.data.articles);
        }
      })
      .catch((error) => console.log(error));
  }
  dispatch(newsActions.setCards(newCards));
  dispatch(newsActions.setIsLoading(false));

  // dispatch(newsActions.setCards([]));
  // dispatch(newsActions.setIsLoading(false));
};
