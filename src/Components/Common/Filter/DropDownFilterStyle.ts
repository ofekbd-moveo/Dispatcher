import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 190px;
`;
export const DropDownHeader = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 47px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  font-size: 0.875rem;
  letter-spacing: 0.25px;
  color: #5a5a89;
  padding: 15px;
  background: white;
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 6.5px;

  &.drop-down-arrow {
    width: 6.96px;
    height: 13.93px;
  }
`;

export const DropDownListContainer = styled.div`
  width: 100%;
  height: 126px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  overflow-x: overlay;

  &::-webkit-scrollbar {
    background: none;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #5a5a89;
  }
`;

export const DropDownList = styled.ul`
  list-style-type: none;
  padding: 6px 0;
`;

export const ListItem = styled.li`
  height: 1.75rem;
  padding: 10.5px 24px;
  font-family: "Mulish", sans-serif;
  font-size: 0.75rem;
  line-height: 50%;
  letter-spacing: 0.00625rem;
  &:hover {
    background: rgba(223, 224, 235, 0.41);
  }
`;