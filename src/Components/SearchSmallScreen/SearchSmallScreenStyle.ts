import styled from "styled-components";
import { Colors } from "../Common/types";

export const SearchSmallScreenContainer = styled.div`
  position: absolute;
  /* top: 0; */
  right: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 100;
  background: white;
  transition: right ease-in-out 1s;

  &.close {
    right: -100%;
  }

  &.open {
    right: 0;
  }
`;

export const SearchInputContainer = styled.div`
  background: ${Colors.WHITE};
  border-bottom: 1px solid rgba(217, 219, 233, 0.5);
  padding: 26px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackArrow = styled.img`
  margin-right: 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const RemoveIcon = styled.img`
  width: 18px;
  height: 18px;
  &:hover {
    cursor: pointer;
  }
`;
export const SearchInputArea = styled.input`
  border: none;
  outline: none;
  width: 80%;
  font-size: 1.125rem;
  vertical-align: super;
`;

export const TitleContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Colors.PURPLE_BLUE};
  font-size: 0.875rem;
  letter-spacing: 0.015625rem;

  & Button.text {
    background: ${Colors.LIGHT_GRAY};
    border-radius: 0;
  }
`;

export const RecentSearch = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  letter-spacing: 0.015625rem;
  color: ${Colors.PURPLE_BLUE};
  font-weight: 200;
  padding: 1.25rem 1.25rem 1.25rem 1.0625rem;
  border-bottom: 1px solid rgba(217, 219, 233, 0.5);
`;

export const RecentSearchesContainer = styled.div``;

export const SearchButtonContainer = styled.div`
  align-self: center;
  padding: 10px;
`;
