import styled from "styled-components";
import { Colors } from "../Common/types";

export const Title = styled.h1`
  margin-top: 19.25px;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${Colors.BLUISH_BLACK};
`;

export const Image = styled.img`
  width: clamp(100px, 20%, 600px);
  border-radius: 20px 0 0 20px;
  object-fit: cover;

  @media screen and (max-width: 780px) {
    width: auto;
    max-height: 100px;
    border-radius: 20px 20px 0 0;
  }
`;

export const Date = styled.span`
  letter-spacing: 0.015625rem;
  color: rgba(90, 90, 137, 0.5);
  font-size: 0.875rem;
  font-weight: 100;
`;

export const Source = styled.div`
  margin-top: 19.25px;
  font-size: 0.875rem;
  letter-spacing: 0.015625rem;
  color: rgba(90, 90, 137, 0.5);
  font-weight: 100;
`;

export const Description = styled.p`
  margin: 19.25px 0;
  color: ${Colors.PURPLE_BLUE};
  font-weight: 100;
  font-size: 0.875rem;
`;

export const ContentContainer = styled.div`
  margin: 16.5px;
`;

export const CardContainer = styled.div`
  height: 20vw;
  background: white;
  border: 1px solid ${Colors.LIGHT_GRAY};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  height: fit-content;
  margin: 24px;

  & Button {
    float: right;
  }

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
