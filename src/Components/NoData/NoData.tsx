import { NoDataType } from "../types";
import assets from "../../Utils/assets";
import { NoDataContainer, NoDataMsg } from "./NoDataStyle";

const loadNoDataByType = (type: NoDataType) => {
  switch (type) {
    case NoDataType.TEXTUAL:
      return { text: "We couldn't find any matches for your query", imageURL: assets.noFound };
    case NoDataType.GRAPHIC:
      return { text: "No data to display", imageURL: assets.chart };
  }
};

export const NoData = ({ type }: { type: NoDataType }): JSX.Element => {
  const { text, imageURL } = loadNoDataByType(type);
  return (
    <NoDataContainer type={type}>
      <img src={imageURL} />
      <NoDataMsg>{text}</NoDataMsg>
    </NoDataContainer>
  );
};
