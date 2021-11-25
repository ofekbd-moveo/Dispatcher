import styled from "styled-components";
import { Colors, NoDataType } from "../types";

export const NoDataContainer = styled.div<{ type: NoDataType }>`
  text-align: center;
  width: 100%;
  margin-top: ${(props) => (props.type === NoDataType.TEXTUAL ? "295px" : "0px")};
  @media screen and (max-width: 768px) {
    margin-top: ${(props) => (props.type === NoDataType.TEXTUAL ? "135px" : "0px")};
  }
`;

export const NoDataMsg = styled.p`
  font-size: 1.125rem;
  color: ${Colors.PURPLE_BLUE};
  padding-top: 18px;
`;
