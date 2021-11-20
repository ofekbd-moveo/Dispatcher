import styled, { css } from "styled-components";
import { Colors } from "../types";

export const BackDrop = styled.div<{ isFilterMenuOpen: boolean }>`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: rgba(48, 48, 50, 0.7);
  ${(props) =>
    props.isFilterMenuOpen
      ? css`
          animation: fadeIn;
          animation-duration: 1s;
        `
      : css`
          width: 0;
        `};

  @keyframes fadeIn {
    0% {
      opacity: 0;
      width: 100%;
    }
    100% {
      opacity: 1;
      width: 100%;
    }
  }
`;
export const SideBarContainer = styled.div<{ isFilterMenuOpen: boolean }>`
  position: absolute;
  width: 80%;
  height: 100%;
  z-index: 100;
  overflow: hidden;
  background-color: ${Colors.WHITE};
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width ease-in-out 1s;
  white-space: nowrap;
  width: ${(props) => (props.isFilterMenuOpen ? 40 : 0)}%;
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.isFilterMenuOpen ? 80 : 0)}%;
  }

  text-align: center;
  .react-datepicker {
    font-size: 0.875rem;
    border: none;
    width: -webkit-fill-available;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__day--in-range,
  .react-datepicker__day--keyboard-selected {
    background-color: ${Colors.CYAN_BLUE};
    color: ${Colors.WHITE} !important;
  }
  .react-datepicker__day {
    margin: 8px;
    font-weight: 100;
  }
  .react-datepicker__day-name {
    font-weight: 100;
  }
  .react-datepicker__current-month {
    font-weight: 400;
  }
  .react-datepicker__current-month,
  .react-datepicker__day-name,
  .react-datepicker__day {
    color: ${Colors.PURPLE_BLUE};
  }
  .react-datepicker__month-container {
    width: -webkit-fill-available;
  }

  .react-datepicker__header {
    border-bottom: 1px solid ${Colors.LIGHT_GRAY};
    background: ${Colors.WHITE};
  }
`;
export const Header = styled.div``;
export const Footer = styled.div`
  background: ${Colors.GHOST_WHITE};
  align-self: center;
  padding: 20px;
  width: 100%;
  text-align: center;
`;

export const SidebarTitle = styled.div`
  border-bottom: 1px solid rgba(217, 219, 233, 0.5);
  display: flex;
  font-size: 1rem;
  color: ${Colors.PURPLE_BLUE};
  letter-spacing: 0.015625rem;
  align-items: center;
  padding: 25px 16px 27px;
  text-transform: uppercase;
`;
export const RowContainer = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.LIGHT_PURPLE_GRAY};
  padding: 11px 19px;
  background: ${(props) => (props.isSelected ? Colors.LIGHT_GRAY : Colors.WHITE)};
`;

export const RowTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 200;
  color: ${Colors.PURPLE_BLUE};
`;
export const FilterListContainer = styled.div`
  color: ${Colors.PURPLE_BLUE};
  opacity: 0.85;
  font-size: 0.875rem;
  font-weight: 200;
`;

export const BackArrow = styled.img`
  margin-right: 15px;
  &:hover {
    cursor: pointer;
  }
`;
