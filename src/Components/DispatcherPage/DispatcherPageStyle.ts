import styled from "styled-components";
import { Colors } from "../types";

export const ContentContainer = styled.div`
  margin: 1% 8%;

  @media screen and (max-width: 480px) {
    margin: 5px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${Colors.DARK_PURPLE};
  margin-bottom: 20px;
`;
export const DataContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
