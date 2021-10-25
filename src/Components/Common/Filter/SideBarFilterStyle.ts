import styled from "styled-components";
import { Colors } from "../types";

export const FilterSideBarContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  transition: right ease-in-out 1s;

  &.close {
    right: -100%;
  }

  &.open {
    right: 0;
  }
`;

export const BackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(48, 48, 50, 0.7);
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
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(217, 219, 233, 0.5);
  padding: 11px 19px;

  &:hover {
    background: rgba(90, 90, 137, 0.05);
    cursor: pointer;
  }
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
