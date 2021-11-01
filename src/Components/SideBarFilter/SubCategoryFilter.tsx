import { useState } from "react";
import { ISubCategoryFilter } from "../types";
import { RowContainer, RowTitle } from "./SideBarMenuStyle";

export const SubCategoryFilter = (props: ISubCategoryFilter): JSX.Element => {
  let { isAllreadySelected, value, filterClickHandler } = props;
  const [isSelected, setIsSelected] = useState(isAllreadySelected);

  const selectedClickHandler = () => {
    filterClickHandler();
    setIsSelected(true);
  };

  return (
    <RowContainer isSelected={isSelected} onClick={selectedClickHandler}>
      <RowTitle>{value}</RowTitle>
    </RowContainer>
  );
};
