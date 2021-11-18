import { buttonType } from "../../types";
import {
  BtnContainer,
  CloseBtn,
  ErrorMsg,
  ErrorMsgContainer,
  ErrorMsgTitle,
  ModalBackground,
  ModalContainer,
  ModalErrorContainer,
} from "./ModalErrorStyle";

export interface IModalError {
  errMsg: string;
  isErrorOccur: boolean;
  setIsErrorOccur: (newState: boolean) => void;
}

export const ModalError = (props: IModalError): JSX.Element => {
  const { errMsg, isErrorOccur, setIsErrorOccur } = props;

  return (
    <ModalErrorContainer isErrorOccur={isErrorOccur}>
      <ModalBackground />
      <ModalContainer>
        <ErrorMsgContainer>
          <ErrorMsgTitle>Oops! something went wrong</ErrorMsgTitle>
          <ErrorMsg>{errMsg}</ErrorMsg>
        </ErrorMsgContainer>
        <BtnContainer>
          <CloseBtn onClick={() => setIsErrorOccur(false)}>Dissmis</CloseBtn>
        </BtnContainer>
      </ModalContainer>
    </ModalErrorContainer>
  );
};
