import {
  SideBarContainer,
  OptionsContainer,
  Header,
  Footer,
  OptionListContainer,
  OptionContainer,
  OptionTitle,
  HederAndListContainer,
  BackArrow,
  BackDrop,
  FilterSideBarContainer,
} from "./SideBarFilterStyle";
import Button from "../Button/Button";
import { buttonType, SideBarFilterType } from "../types";
import assets from "../../../Utils/assets/assetsImports";
import { useState } from "react";

type TCategories = "Search in" | "Sources" | "Language" | "Dates";
type TSelectedOptionsEachCategory = { [category in TCategories]: string[] };

export interface ISideBarFilter {
  type: SideBarFilterType;
  title: string;
  optionsList: string[];
  filterBy?: TSelectedOptionsEachCategory;
  isFilterMenuOpen: boolean;
  closeFilterBarClickHandler: () => void;
}

export const SideBarFilter = (props: ISideBarFilter): JSX.Element => {
  const { title, optionsList, filterBy, isFilterMenuOpen, closeFilterBarClickHandler } = props;

  const [type, setType] = useState(SideBarFilterType.FILTER_LIST);

  const convertOptionsArrToString = (op: TCategories): string => {
    if (filterBy !== undefined) {
      const optionList = filterBy[op] as string[];
      const optionsStr =
        optionList.length === 0
          ? "All, "
          : optionList.reduce((optionsAcc: string, currOption: string) => currOption + ", " + optionsAcc, "");

      return optionsStr.slice(0, -2);
    }
    return "";
  };

  const renderOptionList = (type: SideBarFilterType, options: string[]) =>
    options.map((option: string, key: number) => (
      <OptionContainer key={key}>
        <OptionTitle>{option}</OptionTitle>
        {type === SideBarFilterType.FILTER_LIST && (
          <OptionListContainer>{convertOptionsArrToString(option as TCategories)}</OptionListContainer>
        )}
      </OptionContainer>
    ));

  return (
    <FilterSideBarContainer>
      <BackDrop onClick={closeFilterBarClickHandler} className={isFilterMenuOpen ? "open" : "close"} />
      <SideBarContainer className={isFilterMenuOpen ? "open" : "close"}>
        <HederAndListContainer>
          <Header>
            {type === SideBarFilterType.FILTER && <BackArrow src={assets.back} />}
            {title}
          </Header>
          <OptionsContainer>{renderOptionList(type, optionsList)}</OptionsContainer>
        </HederAndListContainer>
        <Footer>
          <Button
            className={buttonType.PRIMARY}
            isArrowVisible={false}
            content="VIEW RESULTS"
            onClickHandler={() => {}}
          ></Button>
        </Footer>
      </SideBarContainer>
    </FilterSideBarContainer>
  );
};
