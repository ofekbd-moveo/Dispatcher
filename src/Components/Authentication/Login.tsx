import assets from "../../Utils/assets";
import Button from "../Common/Button/Button";
import { buttonType } from "../Common/types";
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
} from "./AuthStyle";

const emailLabel = "Email Address";
const passwordLabel = "Password";

export const Login = (): JSX.Element => {
  return (
    <FormContainer>
      <Divider />
      <Form>
        <InputsContainer>
          <InputContainer>
            <InputLableContainer>
              {emailLabel}
              <Icon src={assets.asterisk} />
            </InputLableContainer>
            <Input placeholder={emailLabel}></Input>
          </InputContainer>

          <InputContainer>
            <InputLableContainer>
              {passwordLabel}
              <Icon src={assets.asterisk} />
            </InputLableContainer>
            <Input placeholder={passwordLabel}></Input>
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
  );
};
