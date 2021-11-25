import styled from "styled-components";
import { Colors } from "../types";

export const SearchSmallScreenContainer = styled.form`
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background: ${Colors.GHOST_WHITE};
  transition: width ease-in-out 1s;
  white-space: nowrap;

  &.close {
    width: 0;
    overflow: hidden;
  }

  &.open {
    width: 100%;
  }
`;

export const UpperContainer = styled.div`
  height: 100%;
`;

export const SearchInputContainer = styled.div`
  background: ${Colors.WHITE};
  border-bottom: 1px solid ${Colors.LIGHT_PURPLE_GRAY};
  padding: 26px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 32px 64px 0px #0000000d;
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
  width: 250px;
  font-size: 1.125rem;
  vertical-align: super;
  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap;
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
  border-bottom: 1px solid ${Colors.LIGHT_PURPLE_GRAY};
`;

export const RecentSearchesContainer = styled.div`
  max-height: 70%;
  overflow: scroll;
`;

export const SearchButtonContainer = styled.div`
  align-self: center;
  padding: 10px;
  text-align: center;
  width: 100%;
`;

export const DataContainer = styled.div`
  margin: 5px 10px;
`;
