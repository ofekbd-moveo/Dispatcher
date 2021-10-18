import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.625rem;
  color: #ffffff;
  padding: 0px 10px;
  width: 100%;
  height: 36px;
  background: #0058b9;
  border-radius: 10px;
  border: none;
  letter-spacing: 0.015625rem;
  text-transform: uppercase;

  &.primary {
    border-radius: 20px;
    width: 242px;
  }

  &.secondary {
    background: #d9dbe9;
    letter-spacing: 0.015625rem;
    text-transform: uppercase;
    color: #5a5a89;
    border-radius: 20px;
    width: 110px;
  }

  &.text {
    background: none;
    color: #5a5a89;
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
