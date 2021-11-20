import styled from "styled-components";
import { SubCategory } from "../DropDownFilter/SubCategory";
import { Colors } from "../types";

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

  div.DropDownContainer {
    width: 70px;
    position: relative;
    height: 20px;
  }

  div.DropDownHeader {
    padding: 0;
    height: fit-content;
    margin-bottom: 19px;
  }

  div.DropDownListContainer {
    width: 100px;
    border-radius: 0;
    li {
      padding: 10px;
    }
  }
`;

export const FilterBarIcon = styled.img``;

export const FilterBarIconContainer = styled.div``;
