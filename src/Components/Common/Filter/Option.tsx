import { useEffect, useState } from "react";
import { OptionContainer } from "./OptionStyle";

export interface IOption {
  shouldMark: boolean;
  value: string;
  subFilterClickHandler: (option: string) => void;
}
export const Option = (props: IOption): JSX.Element => {
  const { shouldMark, value, subFilterClickHandler } = props;

  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (shouldMark) {
      setIsSelected(true);
    }
  }, []);
  const selectedClickHandler = (isSelected: boolean) => {
    subFilterClickHandler(value);
    setIsSelected(!isSelected);
  };

  return (
    <OptionContainer isSelected={isSelected} onClick={() => selectedClickHandler(isSelected)}>
      {value}
    </OptionContainer>
  );
};
