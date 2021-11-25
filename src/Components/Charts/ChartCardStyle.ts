import styled from "styled-components";
import { Colors } from "../types";

export const ChartCardContainer = styled.div`
  background: ${Colors.WHITE};
  border: 1px solid ${Colors.LIGHT_GRAY};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 24px;
  padding: 25px 14px;
  height: 100%;
  width: 100%;
  margin-bottom: 24px;
`;

export const ChartContainer = styled.div`
  text-align: -webkit-center;
`;

export const Divider = styled.div`
  border: 2px solid ${Colors.PURPLE_BLUE};
  width: 22px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const ChartTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${Colors.BLUISH_BLACK};
  margin-bottom: 10px;
`;

export const SumTitle = styled.div`
  position: absolute;
  color: rgba(3, 0, 53, 1);
  font-family: "Mulish";
  letter-spacing: 0.1px;
  font-size: 14px;
`;
