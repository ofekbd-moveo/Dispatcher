import { useDispatch, useSelector } from "react-redux";
import { newsActions, RootState } from "../../../store";
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
}

export const ModalError = (props: IModalError): JSX.Element => {
  const { errMsg } = props;
  const dispatch = useDispatch();
  const isErrorOccur = useSelector((state: RootState) => state.news.isErrorOccur);

  return (
    <ModalErrorContainer isErrorOccur={isErrorOccur}>
      <ModalBackground />
      <ModalContainer>
        <ErrorMsgContainer>
          <ErrorMsgTitle>Oops! something went wrong</ErrorMsgTitle>
          <ErrorMsg>{errMsg}</ErrorMsg>
        </ErrorMsgContainer>
        <BtnContainer>
          <CloseBtn
            onClick={() => {
              dispatch(newsActions.resetErrorHandler());
            }}
          >
            Dissmis
          </CloseBtn>
        </BtnContainer>
      </ModalContainer>
    </ModalErrorContainer>
  );
};
