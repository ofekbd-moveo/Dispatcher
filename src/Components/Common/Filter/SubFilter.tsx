import { useEffect, useState } from "react";
import { SubFilterContainer } from "./SubFilterStyle";

export interface ISubFilter {
  isMark: boolean;
  value: string;
  subFilterClickHandler: (subFilter: string) => void;
}

export const SubFilter = (props: ISubFilter): JSX.Element => {
  const { isMark, value, subFilterClickHandler } = props;

  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (isMark) {
      setIsSelected(true);
    }
  }, [isMark]);
  const selectedClickHandler = (isSelected: boolean) => {
    subFilterClickHandler(value);
    setIsSelected(!isSelected);
  };

  return (
    <SubFilterContainer isSelected={isSelected} onClick={() => selectedClickHandler(isSelected)}>
      {value}
    </SubFilterContainer>
  );
};
