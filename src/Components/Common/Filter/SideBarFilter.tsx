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
import { buttonType, Categories, SideBarFilterType } from "../types";
import assets from "../../../Utils/assets/assetsImports";
import { useState } from "react";
import { Option } from "./Option";

type TCategories = Categories.SEARCH_IN | Categories.COUNTRY | Categories.SOURCES | Categories.TAGS;
type TSelectedOptionsEachCategory = { [category in TCategories]: string[] };

export interface ISideBarFilter {
  optionsOfEachFilter: TSelectedOptionsEachCategory;
  isFilterMenuOpen: boolean;
  closeFilterBarClickHandler: () => void;
}

export const SideBarFilter = (props: ISideBarFilter): JSX.Element => {
  const { optionsOfEachFilter, isFilterMenuOpen, closeFilterBarClickHandler } = props;
  const FILTER_MENU_TITLE = "FILTER";
  const [currTitle, setCurrTitle] = useState(FILTER_MENU_TITLE);
  const [filterBy, setFilterBy] = useState({
    [Categories.SEARCH_IN]: ["Everything"],
    [Categories.SOURCES]: [] as string[],
    [Categories.COUNTRY]: [] as string[],
    [Categories.TAGS]: [] as string[],
  });

  const convertOptionsArrToString = (optionList: string[]): string => {
    const optionsStr =
      optionList.length === 0
        ? "All, "
        : optionList.reduce((optionsAcc: string, currOption: string) => currOption + ", " + optionsAcc, "");

    return optionsStr.slice(0, -2);
  };

  const categoryClickHandler = (category: TCategories) => {
    setCurrTitle(category);
  };
  const backClickHandler = () => {
    setCurrTitle(FILTER_MENU_TITLE);
  };

  const renderCategories = () => {
    const categories = Object.keys(filterBy) as TCategories[];

    return categories.map((category: TCategories, key: number) => (
      <OptionContainer key={key} onClick={() => categoryClickHandler(category)}>
        <OptionTitle>{category}</OptionTitle>
        <OptionListContainer>{convertOptionsArrToString(filterBy[category] as string[])}</OptionListContainer>
      </OptionContainer>
    ));
  };

  const renderOptions = () => {
    const options = optionsOfEachFilter[currTitle as TCategories];
    const subFilterOptions = filterBy[currTitle as TCategories];

    return options.map((option: string, key: number) => (
      <Option
        shouldMark={subFilterOptions.includes(option)}
        value={option}
        subFilterClickHandler={subFilterClickHandler}
      />
    ));
  };
  const removeOptionFromFilterBy = (optionToRemove: string) => {
    const newOptions = filterBy[currTitle as TCategories].filter((op: string) => op !== optionToRemove);
    setFilterBy((prevState) => ({
      ...prevState,
      [currTitle]: newOptions,
    }));
  };
  const addOptionFromFilterBy = (optionToAdd: string) => {
    const newOptions = [...filterBy[currTitle as TCategories], optionToAdd];

    setFilterBy((prevState) => ({
      ...prevState,
      [currTitle]: newOptions,
    }));
  };
  const editSubFilterOptions = (option: string) => {
    const subFilterOptions = filterBy[currTitle as TCategories];

    const isOptionInFilterByList = subFilterOptions.includes(option);
    isOptionInFilterByList ? removeOptionFromFilterBy(option) : addOptionFromFilterBy(option);
  };
  const subFilterClickHandler = (option: string) => {
    editSubFilterOptions(option);
  };

  return (
    <FilterSideBarContainer>
      <BackDrop onClick={closeFilterBarClickHandler} className={isFilterMenuOpen ? "open" : "close"} />
      <SideBarContainer className={isFilterMenuOpen ? "open" : "close"}>
        <HederAndListContainer>
          <Header>
            {currTitle !== FILTER_MENU_TITLE && <BackArrow src={assets.back} onClick={backClickHandler} />}
            {currTitle}
          </Header>
          <OptionsContainer>{currTitle === FILTER_MENU_TITLE ? renderCategories() : renderOptions()}</OptionsContainer>
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
