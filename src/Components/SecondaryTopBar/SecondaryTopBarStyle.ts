import styled from "styled-components";
import { Colors } from "../Common/types";

export const SecondaryTopBarContainer = styled.div`
  width: 100%;
  background: ${Colors.WHITE};
  justify-content: space-between;
  height: 44px;
  align-items: center;
  padding: 0 16px;
  border-bottom: 2px solid ${Colors.LIGHT_PURPLE_GRAY};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export const SortByContainer = styled.div`
  color: ${Colors.PURPLE_BLUE};
  font-size: 1rem;
  letter-spacing: 0.015625rem;
`;
export const DropDownArrowIcon = styled.img`
  margin-left: 8px;
`;
export const FilterBarIcon = styled.img``;

export const FilterBarIconContainer = styled.div``;
