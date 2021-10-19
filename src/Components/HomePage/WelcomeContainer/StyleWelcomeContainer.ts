import styled from "styled-components";
import { Colors } from "../../Common/types";

export const StyleWelcomeContainer = styled.div`
  & .welcome-title {
    font-weight: 300;
    font-size: 3rem;
    letter-spacing: 0.015625rem;
    color: ${Colors.PURPLE_BLUE};
  }
  & .app-description {
    font-weight: 200;
    font-size: 2.25rem;
    letter-spacing: 0.015625rem;
    color: ${Colors.PURPLE_BLUE};
  }
`;
