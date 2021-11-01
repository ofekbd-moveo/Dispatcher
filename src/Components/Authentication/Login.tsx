import assets from "../../Utils/assets";
import Button from "../Common/Button/Button";
import { EMAIL_LABEL, PASSWORD_LABEL } from "../constants";
import { buttonType } from "../types";
import {
  ButtonsContainer,
  Divider,
  Form,
  FormContainer,
  Icon,
  Input,
  InputContainer,
  InputLableContainer,
  InputsContainer,
  ButtonContainer,
  Container,
} from "./AuthStyle";

export const Login = (): JSX.Element => {
  return (
    <Container>
      <FormContainer>
        <Divider />
        <Form>
          <InputsContainer>
            <InputContainer>
              <InputLableContainer>
                {EMAIL_LABEL}
                <Icon src={assets.asterisk} />
              </InputLableContainer>
              <Input placeholder={EMAIL_LABEL}></Input>
            </InputContainer>

            <InputContainer>
              <InputLableContainer>
                {PASSWORD_LABEL}
                <Icon src={assets.asterisk} />
              </InputLableContainer>
              <Input placeholder={PASSWORD_LABEL}></Input>
            </InputContainer>
          </InputsContainer>

          <ButtonsContainer>
            <ButtonContainer>
              <Button
                className={buttonType.SECONDARY}
                isArrowVisible={false}
                content="REGISTER"
                onClickHandler={() => {}}
              ></Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button
                className={buttonType.PRIMARY}
                isArrowVisible={true}
                content="LOGIN"
                onClickHandler={() => {}}
              ></Button>
            </ButtonContainer>
          </ButtonsContainer>
        </Form>
      </FormContainer>
    </Container>
  );
};
