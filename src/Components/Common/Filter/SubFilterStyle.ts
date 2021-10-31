import styled from "styled-components";
import { Colors } from "../types";

export const SubFilterContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 1px 0px rgb(0 0 0 / 50%);
  padding: 11px 19px;
  background: ${(props) => (props.isSelected ? Colors.LIGHT_GRAY : Colors.WHITE)};
  font-size: 0.875rem;
  font-weight: 200;
  color: ${Colors.PURPLE_BLUE};
`;
