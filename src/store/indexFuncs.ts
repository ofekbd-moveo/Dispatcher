import axios from "axios";
import _ from "lodash";
import { newsActions } from ".";
import { API_KEY, API_URL, COUNTRY } from "../Components/constants";
import { Categories, CategoriesStr, ICard } from "../Components/types";
import { convertCategoryToApiLabel, convertToParamsStr } from "../Utils/HelpFunctions/casting";

export const initCardsData = () => async (dispatch: any, getState: any) => {
  //Get client Entry Country
  const ipApiRes = await fetch("http://ip-api.com/json", { method: "GET" });
  const entryCountryStr = (await ipApiRes.json()).country as keyof typeof COUNTRY;
  const entryCountryApi = COUNTRY[entryCountryStr];
  const API_CATEGORY = convertCategoryToApiLabel(getState().news.currCategory);

  const URL = API_URL + API_CATEGORY + "?country=" + entryCountryApi + "&apiKey=" + API_KEY;

  //init Main Title
  dispatch(newsActions.setMainTitle(`${CategoriesStr[Categories.topHeadline]} in ${entryCountryStr}`));

  axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        dispatch(newsActions.setCards(res.data.articles));
      }
    })
    .catch((error) => {
      dispatch(newsActions.setErrorMsg(error.response.data.message));
      dispatch(newsActions.setIsErrorOccur(true));
    })
    .then(() => dispatch(newsActions.setIsLoading(false)));
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
    .catch((error) => {
      dispatch(newsActions.setErrorMsg(error.response.data.message));
      dispatch(newsActions.setIsErrorOccur(true));
    });
};

export const filterCardsData = () => async (dispatch: any, getState: any) => {
  const selectedFilters = getState().news.selectedFilters;
  const searchInput = getState().news.searchInput;
  const currCategory = getState().news.currCategory;

  const searchStr = searchInput === "" ? "" : `q=${searchInput}&`;

  const requestsParams = convertToParamsStr(currCategory, selectedFilters);
  dispatch(newsActions.setIsInitial(false));
  await dispatch(newsActions.setIsLoading(true));

  const URL = API_URL + requestsParams + searchStr + "apiKey=" + API_KEY;
  console.log(URL);

  await axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        dispatch(newsActions.setCards(res.data.articles));
      }
    })
    .catch((error) => {
      dispatch(newsActions.setErrorMsg(error.response.data.message));
      dispatch(newsActions.setIsErrorOccur(true));
    });
  dispatch(newsActions.setIsLoading(false));
};
