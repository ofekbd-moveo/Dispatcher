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

  //   fetch(URL, { method: "GET" })
  //     .then((response) => response.json())
  //     .then((jsonRes) => {
  //       if (jsonRes.status === "ok") {
  //         dispatch(newsActions.setCards(jsonRes.articles));
  //       }
  //     })
  //     .catch((error) => console.error("Error:", error))
  //     .then(() => dispatch(newsActions.setIsLoading(false)));

  dispatch(newsActions.setCards(apiMock.articles));
  dispatch(newsActions.setIsLoading(false));
};

export const initSources = () => async (dispatch: any, getState: any) => {
  const URL = API_URL + "top-headlines/sources?apiKey=" + API_KEY;
  // fetch(URL, { method: "GET" })
  //   .then((response) => response.json())
  //   .then((jsonRes) => {
  //     if (jsonRes.status === "ok") {
  //       let sourcesData = [];
  //       for (const source of jsonRes.sources) {
  //         sourcesData.push(source.name);
  //       }
  //       dispatch(newsActions.setSources(sourcesData));
  //     }
  //   })
  //   .catch((error) => console.error("Error:", error));
};

export const filterCardsData = () => async (dispatch: any, getState: any) => {
  const selectedFilters = getState().news.selectedFilters;
  const requestsParams = convertToParamsStr(selectedFilters);
  await dispatch(newsActions.setIsLoading(true));
  // dispatch(newsActions.setCards([])); //clean selectedFilters
  let newCards: ICard[] = [];
  //   for (const req of requestsParams) {
  //     const URL = API_URL + req + "apiKey=" + API_KEY;
  //     await fetch(URL, { method: "GET" })
  //       .then((response) => response.json())
  //       .then((data) => {
  // if (data.status === "ok") _.union(newCards, data.articles);
  //        // if (data.status === "ok") dispatch(newsActions.addCards(data.articles));
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       }).then(()=>dispatch(newsActions.setCards(newCards)));
  //   }
  //   dispatch(newsActions.setIsLoading(false));

  dispatch(newsActions.setCards([]));
  dispatch(newsActions.setIsLoading(false));
};
