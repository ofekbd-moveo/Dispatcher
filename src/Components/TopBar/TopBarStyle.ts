import styled from "styled-components";
import { Colors } from "../types";

export const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${Colors.DARK_PURPLE};
  padding: 12px;
  justify-content: space-between;
  height: 75px;
  .tooltip {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  }
  .tooltip.place-bottom::after {
    border: none;
  }
`;

export const LogoIcon = styled.img`
  /* margin-right: 10%; */
  margin-right: max(calc(12vw - 80px), 10px);
`;

export const IconList = styled.div`
  display: flex;
`;

export const LogoAndSearchContainer = styled.div`
  display: flex;
`;
export const Icon = styled.img`
  padding: 7px;
`;

export const IconSearch = styled.img`
  display: none;
  padding: 7px;

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const Account = styled.div`
  color: ${Colors.WHITE};
  background: ${Colors.CYAN_BLUE};
  border-radius: 30px;
  width: fit-content;
  padding: 11px;
  font-size: 0.875rem;
  line-height: 1.875rem;
  &:hover {
    cursor: pointer;
  }
`;
