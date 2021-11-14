import dateFormat from "dateformat";
import { CATEGORY, COUNTRY, LANGUAGE, SORT_BY } from "../../Components/constants";
import { Categories, TFiltersOptions } from "../../Components/types";

export const formateDate = (dateText: string): string => {
  const date = new Date(dateText);
  return dateFormat(date, "dddd mmm d, yyyy");
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
