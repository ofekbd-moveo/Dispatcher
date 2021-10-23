import styled from "styled-components";
import { Colors } from "../types";

export const ButtonStyle = styled.button`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.625rem;
  color: ${Colors.WHITE};
  padding: 0px 10px;
  width: 100%;
  height: 36px;
  background: ${Colors.CYAN_BLUE};
  border-radius: 10px;
  border: none;
  letter-spacing: 0.015625rem;
  text-transform: uppercase;
  width: fit-content;
  padding: 0 0.625rem;

  &.none {
    width: 100%;
  }

  &.primary {
    border-radius: 20px;
    width: 242px;
  }

  &.secondary {
    background: ${Colors.LIGHT_GRAY};
    letter-spacing: 0.015625rem;
    text-transform: uppercase;
    color: ${Colors.PURPLE_BLUE};
    border-radius: 20px;
  }

  &.text {
    background: none;
    color: ${Colors.PURPLE_BLUE};
    border-radius: 20px;
  }

  &.text:hover {
    background: rgba(217, 219, 233, 0.3);
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  & .arrow-right {
    margin-left: 0.5rem;
  }
`;
