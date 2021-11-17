import styled from "styled-components";

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30%;
  height: fit-content;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
