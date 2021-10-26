import styled from "styled-components";
import { Colors } from "../types";

export const FilterSideBarContainer = styled.div``;

export const BackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(48, 48, 50, 0.7);
  &.close {
    width: 0;
  }

  &.open {
    animation: fadeIn;
    animation-duration: 1s;
  }
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

export const SideBarContainer = styled.div`
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
  &.close {
    width: 0;
  }

  &.open {
    width: 80%;
  }
`;

export const HederAndListContainer = styled.div``;
export const OptionsContainer = styled.div``;
export const Header = styled.div`
  border-bottom: 1px solid rgba(217, 219, 233, 0.5);
  display: flex;
  font-size: 1rem;
  color: ${Colors.PURPLE_BLUE};
  letter-spacing: 0.015625rem;
  align-items: center;
  padding: 25px 16px 27px;
  text-transform: uppercase;
`;
export const Footer = styled.div`
  background: ${Colors.GHOST_WHITE};
  align-self: center;
  padding: 20px;
  width: 100%;
  text-align: center;
`;
export const OptionContainer = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(217, 219, 233, 0.5);
  padding: 11px 19px;
`;
export const OptionTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 200;
  color: ${Colors.PURPLE_BLUE};
`;
export const OptionListContainer = styled.div`
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
