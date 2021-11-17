import styled from "styled-components";
import { Colors } from "../types";
export const SearchContainer = styled.div`
  width: clamp(100px, 45vw, 600px);
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const SearchLineContainer = styled.form`
  display: flex;
  justify-content: space-between;
  background: white;
  height: 3.125rem;
  border-radius: 10px;
  width: 100%;
  & .vertical-div {
    opacity: 0.3;
    border: 1px solid #d9dbe9;
    height: 80%;
    align-self: center;
  }
`;

export const SearchIcon = styled.input`
  width: 1.52875rem;
  height: 1.5rem;
  align-self: center;
  margin: 0.9375rem;
`;

export const SearchArea = styled.input`
  border: none;
  outline: none;
  width: 80%;
  border-radius: 20px;
`;

export const RecentSearchesContainer = styled.div`
  background: white;
  border-radius: 10px;
  width: 100%;
  max-height: 10rem;
  margin-top: 0.375rem;
  padding: 0.25rem 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  overflow-x: scroll;
  position: relative;
  z-index: 10;
`;

export const RecentSearchesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.99875rem;

  & .recent-searches-title {
    font-weight: 400;
    font-size: 0.75rem;
    color: #5a5a89;
  }
`;

export const RecentSearch = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  letter-spacing: 0.00625rem;
  color: ${Colors.PURPLE_BLUE};
  font-weight: 200;
  padding: 0.5rem 0.99875rem;

  &:hover {
    background: rgba(223, 224, 235, 0.41);
    cursor: pointer;
  }
`;

export const ExitIcon = styled.img`
  width: 12px;
  height: 11px;
`;
