import styled from "styled-components";

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30%;
  height: fit-content;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LegendListContainer = styled.div`
  height: 116px;
  overflow: scroll;
`;
export const LegendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 11px;
`;
export const LegendBullet = styled.div<{ color: string }>`
  height: 5px;
  width: 5px;
  border-radius: 50px;
  margin-right: 18px;
  background-color: ${(props) => props.color};
`;
export const LegendTitle = styled.div`
  font-family: "Mulish";
  font-size: 14px;
  color: rgba(3, 0, 53, 1);
  letter-spacing: 0.3px;
`;
export const LegendData = styled.div`
  font-family: "Mulish";
  font-size: 14px;
  color: rgba(159, 162, 180, 1);
`;

export const TitleAndBullet = styled.div`
  display: flex;
  align-items: center;
`;

export const DoughnutContainer = styled.div`
  width: 50%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;
