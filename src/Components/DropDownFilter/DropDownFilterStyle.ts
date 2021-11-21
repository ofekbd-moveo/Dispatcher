import styled from "styled-components";
import { Colors } from "../types";

export const DropDownContainer = styled.div<{ className: string }>`
  width: min(20vw, 190px);

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.className === "category" ? "none" : "")};
  }

  .react-datepicker {
    right: 7px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    border: none;
    z-index: 1;
  }
  .react-datepicker__header {
    border-bottom: 1px solid ${Colors.LIGHT_GRAY};
    background: ${Colors.WHITE};
  }
  .react-datepicker__day,
  .react-datepicker__day-name {
    margin: 0;
    font-weight: 100;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__day--in-range,
  .react-datepicker__day--keyboard-selected {
    background-color: ${Colors.CYAN_BLUE};
    color: ${Colors.WHITE} !important;
  }

  .react-datepicker__current-month {
    font-weight: 400;
  }
  .react-datepicker__current-month,
  .react-datepicker__day-name,
  .react-datepicker__day {
    color: ${Colors.PURPLE_BLUE};
  }
`;
export const DropDownHeader = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 47px;
  font-weight: 500;
  border-radius: 10px;
  border: none;
  white-space: nowrap;
  font-size: 0.875rem;
  letter-spacing: 0.015625rem;
  color: ${Colors.PURPLE_BLUE};
  padding: 15px;
  background: white;
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 6.5px;

  &.drop-down-arrow {
    width: 7px;
    height: 14px;
  }
  &:hover {
    cursor: pointer;
  }
  .span-title {
    margin-right: 16px;
  }
`;

export const DropDownListContainer = styled.div`
  width: 100%;
  max-height: 126px;
  background: ${Colors.WHITE};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  overflow-x: overlay;
  position: relative;
  z-index: 9;

  &::-webkit-scrollbar {
    background: none;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${Colors.PURPLE_BLUE};
  }
`;

export const DropDownList = styled.ul`
  list-style-type: none;
  padding: 6px 0;
`;

export const ListItem = styled.li<{ isSelected?: boolean }>`
  height: fit-content;
  padding: 10.5px 24px;
  font-family: "Mulish", sans-serif;
  font-size: 0.75rem;
  line-height: 0.75rem;
  letter-spacing: 0.00625rem;
  background: ${(props) => (props.isSelected ? Colors.LIGHT_GRAY : Colors.WHITE)};
  &:hover {
    background-color: fade(${Colors.LIGHT_PURPLE_GRAY}, 40%);
    background: ${(props) => (props.isSelected ? Colors.LIGHT_GRAY : "")};
    cursor: pointer;
  }
`;

export const SubCategoryList = styled.div`
  display: flex;
  flex-direction: row;
  height: 47px;

  @media screen and (max-width: 768px) {
    height: 0;
    display: none;
  }
`;

export const SubCategoryContainer = styled.div`
  margin-right: 20px;
`;

export const Title = styled.span`
  margin-right: 16px;
`;
