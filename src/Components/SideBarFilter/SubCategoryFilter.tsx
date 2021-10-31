import { useEffect, useState } from "react";
import { RowContainer, RowTitle } from "./SideBarMenuStyle";

export interface ISubCategoryFilter {
  isSelected: boolean;
  value: string;
  filterClickHandler: () => void;
}

export const SubCategoryFilter = (props: ISubCategoryFilter): JSX.Element => {
  let { isSelected, value, filterClickHandler } = props;

  const selectedClickHandler = () => {
    filterClickHandler();
    isSelected = true;
  };

  return (
    <RowContainer isSelected={isSelected} onClick={selectedClickHandler}>
      <RowTitle>{value}</RowTitle>
    </RowContainer>
  );
};
