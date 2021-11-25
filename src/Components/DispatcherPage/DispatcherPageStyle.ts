import styled from "styled-components";
import { Colors } from "../types";

export const ContentContainer = styled.div`
  /* margin: 1% 8%; */
  margin: 1% 12vw;

  @media screen and (max-width: 768px) {
    margin: 5px 10px;
  }
`;

export const Title = styled.h1<{ isInitial: boolean }>`
  font-size: ${(props) => (props.isInitial ? 1.5 : 0.875)}rem;
  color: ${(props) => (props.isInitial ? Colors.DARK_PURPLE : `rgba(90, 90, 137, 0.5)`)};
  margin-bottom: ${(props) => (props.isInitial ? 20 : 15)}px;
  font-weight: ${(props) => (props.isInitial ? 600 : 400)};
`;
export const DataContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
