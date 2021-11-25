import styled from "styled-components";
import { Colors } from "../types";

export const CardsContainer = styled.div`
  min-width: 70%;
  overflow: scroll;
  height: calc(100vh - 200px);
  @media screen and (max-width: 768px) {
    max-height: 100%;
  }
`;

export const EndScrollMsg = styled.p`
  color: ${Colors.PURPLE_BLUE};
`;
