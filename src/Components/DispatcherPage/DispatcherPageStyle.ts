import styled from "styled-components";
import { Colors } from "../Common/types";

export const ContentContainer = styled.div`
  margin: 1% 8%;

  @media screen and (max-width: 480px) {
    margin: 5px 10px;
  }
`;
export const FilterList = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.9375rem;
  @media screen and (max-width: 768px) {
    height: 0;
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
