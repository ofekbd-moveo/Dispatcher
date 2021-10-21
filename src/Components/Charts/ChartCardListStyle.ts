import styled from "styled-components";

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35%;
  height: fit-content;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
