import { SetStateAction } from "react";
import { FilterListContainer, RowContainer, RowTitle } from "./SideBarMenuStyle";

export interface ICategory {
  category: string;
  setMenuTitle: (value: SetStateAction<string>) => void;
}

const CATEGORY_TITLE = "Search in";

export const Category = (props: ICategory) => {
  const { category, setMenuTitle } = props;
  const renderCategory = () => {
    setMenuTitle(CATEGORY_TITLE);
  };
  return (
    <RowContainer onClick={renderCategory}>
      <RowTitle>{CATEGORY_TITLE}</RowTitle>
      <FilterListContainer>{category}</FilterListContainer>
    </RowContainer>
  );
};
