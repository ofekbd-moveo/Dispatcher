import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 1.203125rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: #14142b;
`;

export const Image = styled.img`
  width: clamp(100px, 20%, 600px);
  border-radius: 20px 0 0 20px;
  object-fit: cover;
`;

export const Date = styled.span`
  letter-spacing: 0.015625rem;
  color: rgba(90, 90, 137, 0.5);
  font-size: 0.875rem;
  font-weight: 100;
`;

export const Source = styled.div`
  margin-top: 1.203125rem;
  font-size: 0.875rem;
  letter-spacing: 0.015625rem;
  color: rgba(90, 90, 137, 0.5);
  font-weight: 100;
`;

export const Description = styled.p`
  margin: 1.203125rem 0;
  color: #5a5a89;
  font-weight: 100;
  font-size: 0.875rem;
`;

export const ContentContainer = styled.div`
  margin: 1.03125rem;
`;

export const CardContainer = styled.div`
  height: 20vw;
  background: white;
  border: 1px solid #d9dbe9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  height: fit-content;
  margin: 1.5rem;

  & Button {
    float: right;
  }
`;
