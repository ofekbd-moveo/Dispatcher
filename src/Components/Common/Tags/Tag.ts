import styled from "styled-components";
import { Colors } from "../../types";

export const Tag = styled.div`
  font-family: Poppins;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${Colors.PURPLE_BLUE};
  background: ${Colors.BRIGHT_PURPLE_BLUE};
  border-radius: 10px;
  margin: 0px 0.3125rem;
  padding: 0.1875rem 0.625rem;
`;

export const TagsContainer = styled.div`
  display: inline-flex;
  float: right;
`;
