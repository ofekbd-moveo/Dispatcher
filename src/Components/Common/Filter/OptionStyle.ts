import styled from "styled-components";
import { Colors } from "../types";

export const OptionContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(217, 219, 233, 0.5);
  padding: 11px 19px;
  background: ${(props) => (props.isSelected ? Colors.LIGHT_GRAY : Colors.WHITE)};
  font-size: 0.875rem;
  font-weight: 200;
  color: ${Colors.PURPLE_BLUE};
`;
