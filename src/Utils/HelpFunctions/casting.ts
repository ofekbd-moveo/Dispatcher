import dateFormat from "dateformat";

export const convertDate = (dateText: string): string => {
  const date = new Date(dateText);
  return dateFormat(date, "dddd mmm d, yyyy");
};
