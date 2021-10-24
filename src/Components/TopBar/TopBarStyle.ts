import styled from "styled-components";
import { Colors } from "../Common/types";

export const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${Colors.DARK_PURPLE};
  padding: 12px;
  justify-content: space-between;
  height: 75px;
`;

export const LogoIcon = styled.img`
  margin-right: 10%;
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
  padding: 16px;
  font-size: 0.875rem;
`;
