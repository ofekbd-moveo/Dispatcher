import styled from "styled-components";
import { Colors } from "../../types";

export const ModalBackground = styled.div`
  color: ${Colors.BLUISH_BLACK};
  position: absolute;
  height: 125%;
  width: 100%;
  z-index: 200;
  background: #14142b;
  opacity: 0.7;
`;

export const ModalContainer = styled.div`
  background-color: ${Colors.WHITE};
  position: absolute;
  z-index: 201;
  background-color: #ffffff;
  border-radius: 4px;
  width: 70%;
  height: 30%;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 30vh;
`;

export const ErrorMsgContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 30px;
`;
export const ErrorMsg = styled.div`
  font-size: 1rem;
  font-weight: 200;
  color: ${Colors.PURPLE_BLUE};
`;
export const ErrorMsgTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 10px 0;
  color: ${Colors.PURPLE_BLUE};
`;

export const ModalErrorContainer = styled.div<{ isErrorOccur: boolean }>`
  display: ${(props) => (props.isErrorOccur ? "flex" : "none")};
  justify-content: center;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 20%;
`;

export const CloseBtn = styled.button`
  color: ${Colors.PURPLE_BLUE};
  width: 100%;
  height: 100%;
  border: none;
  letter-spacing: 0.0625rem;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${Colors.GHOST_WHITE};
  &:hover {
    background-color: ${Colors.BRIGHT_PURPLE_BLUE};
    cursor: pointer;
  }
`;
