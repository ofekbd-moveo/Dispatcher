import styled from "styled-components";

export const CardsContainer = styled.div`
  min-width: 65%;
  overflow: scroll;
  height: 125vh;
  @media screen and (max-width: 768px) {
    max-height: 65vh;
  }
`;
