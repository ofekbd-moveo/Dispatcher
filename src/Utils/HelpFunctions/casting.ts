import dateFormat from "dateformat";
import moment from "moment";
import {
  CATEGORY,
  COUNTRY,
  DATE_KEY,
  endDateIndexRange,
  LANGUAGE,
  SORT_BY,
  startDateIndexRange,
} from "../../Components/constants";
import { Categories, TFiltersOptions } from "../../Components/types";

export const formateDate = (dateText: string): string => {
  const date = new Date(dateText);
  return dateFormat(date, "dddd mmm d, yyyy");
};
export const formateChartDate = (dateText: string): string => {
  const date = new Date(dateText);
  return dateFormat(date, "mmm d");
};

export const formatDateRange = (dateStr: string) => {
  const startStr = moment(dateStr.slice(...startDateIndexRange)).format("DD/MM/YY");
  const endStr = moment(dateStr.slice(...endDateIndexRange)).format("DD/MM/YY");
  return `${startStr} - ${endStr}`;
};

export const convertCategoryToApiLabel = (category: string): string => {
  switch (category) {
    case Categories.everything:
      return "everything";
    case Categories.topHeadline:
      return "top-headlines";
    default:
      return category;
  }
};
export const convertFilterToApiLabel = (subCategory: string, filter: string): string => {
  switch (subCategory) {
    case "sortBy":
      return SORT_BY[filter];
    case "language":
      return LANGUAGE[filter];
    case "country":
      return COUNTRY[filter];
    case "category":
      return CATEGORY[filter];
    default:
      return filter;
  }
};

export const convertToParamsStr = (selectedFilters: TFiltersOptions): string[] => {
  let requestsParams = [];

  for (const category in selectedFilters) {
    let params = convertCategoryToApiLabel(category) + "?";

    for (const subCategory in selectedFilters[category]) {
      if (selectedFilters[category][subCategory].length !== 0) {
        if (subCategory === DATE_KEY) {
          params += selectedFilters[category][subCategory][0];
          continue;
        }
        params += selectedFilters[category][subCategory].reduce(
          (acc: string, curr: string) => acc + subCategory + "=" + convertFilterToApiLabel(subCategory, curr) + "&",
          ""
        );
      }
    }
    requestsParams.push(params);
  }
  return requestsParams;
};
