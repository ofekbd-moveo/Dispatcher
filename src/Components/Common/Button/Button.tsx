import React from "react";
import { StyleButton } from "./ButtonStyle";
import arrowRight from "../../../images/arrowRight.svg";
import { buttonType } from "../../Common/types";

export interface IButton {
  className?: buttonType;
  withArrow: boolean;
  content: string;
  link?: string;
}

const Button: React.FC<IButton> = (props: IButton): JSX.Element => {
  return (
    <StyleButton className={props.className}>
      {props.content}
      {props.withArrow && <img className="arrow-right" src={arrowRight} />}
    </StyleButton>
  );
};

export default Button;
