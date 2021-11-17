import styled from "styled-components";
import { Colors } from "../types";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  background: ${Colors.WHITE};
  width: 70vw;
  height: 70vh;
  border: 1px solid ${Colors.LIGHT_GRAY};
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
export const Divider = styled.div`
  border: 1px solid ${Colors.LIGHT_GRAY};
  height: 80%;
  margin: 0 10px 0 30vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Form = styled.div`
  width: 100%;
  margin: 10%;
`;
export const InputsContainer = styled.div``;
export const InputContainer = styled.div`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  background: ${Colors.WHITE};
  border: 1px solid ${Colors.LIGHT_GRAY};
  border-radius: 10px;
  width: 100%;
  height: 38px;

  &::placeholder {
    color: ${Colors.GRAY};
    padding-left: 10px;
  }
`;
export const InputLableContainer = styled.div`
  font-size: 0.875rem;
  color: ${Colors.PURPLE_BLUE};
  letter-spacing: 0.015625rem;
  width: 400;
`;
export const Icon = styled.img`
  margin: 3px;
`;

export const ButtonContainer = styled.div`
  margin-left: 10px;
  inline-size: max-content;
`;
export const ButtonsContainer = styled.div`
  justify-content: right;
  display: flex;
`;
