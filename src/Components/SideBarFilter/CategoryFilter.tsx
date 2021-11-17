import { RowContainer, RowTitle } from "./SideBarMenuStyle";
import { newsActions } from "../../store/index";
import { useDispatch } from "react-redux";

export interface ICategoryFilter {
  isSelected: boolean;
  category: string;
  backClickHandler: () => void;
}

export const CategoryFilter = (props: ICategoryFilter): JSX.Element => {
  const { isSelected, category, backClickHandler } = props;
  const dispatch = useDispatch();

  const changeCategory = () => {
    dispatch(newsActions.changeCategory(category));
    backClickHandler();
  };

  return (
    <RowContainer isSelected={isSelected} onClick={changeCategory}>
      <RowTitle>{category}</RowTitle>
    </RowContainer>
  );
};
