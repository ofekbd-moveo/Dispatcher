import styled from "styled-components";
import { Colors } from "../../Common/types";

export const HomePageContainer = styled.div`
  height: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  width: 30%;
  background: ${Colors.DARK_PURPLE};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 30%;
  }
`;
export const Logo = styled.img`
  margin: 7vw;
  display: block;
  @media screen and (max-width: 768px) {
    margin: 6vh;
  }
`;

export const ContentContainer = styled.div`
  align-self: center;
  width: 40vw;
  margin-left: 5%;
  letter-spacing: 0.015625rem;
  @media screen and (max-width: 768px) {
    width: auto;
    margin: 5%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const TextContainer = styled.div`
  letter-spacing: 0.015625rem;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 2.25rem;
  line-height: 3.8125rem;
  color: ${Colors.PURPLE_BLUE};
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 3rem;
  }
`;
export const Description = styled.h2`
  font-weight: 200;
  font-size: 1.625rem;
  line-height: 1.875rem;
  color: ${Colors.PURPLE_BLUE};
  @media screen and (max-width: 768px) {
    font-size: 1.27rem;
  }
`;
