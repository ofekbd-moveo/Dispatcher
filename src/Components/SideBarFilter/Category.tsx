import { CATEGORY_TITLE } from "../constants";
import { ICategory } from "../types";
import { FilterListContainer, RowContainer, RowTitle } from "./SideBarMenuStyle";

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
