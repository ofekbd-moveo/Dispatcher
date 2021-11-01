import { SetStateAction } from "react";
import { RowContainer, RowTitle } from "./SideBarMenuStyle";

export interface ICategoryFilter {
  isSelected: boolean;
  category: string;
  setCurrentCategory: (value: SetStateAction<string>) => void;
  backClickHandler: () => void;
}

export const CategoryFilter = (props: ICategoryFilter): JSX.Element => {
  const { isSelected, category, setCurrentCategory, backClickHandler } = props;
  const changeCategory = () => {
    setCurrentCategory(category);
    backClickHandler();
  };

  return (
    <RowContainer isSelected={isSelected} onClick={changeCategory}>
      <RowTitle>{category}</RowTitle>
    </RowContainer>
  );
};
