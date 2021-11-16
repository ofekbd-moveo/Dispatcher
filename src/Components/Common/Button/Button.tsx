import React from "react";
import { ButtonStyle } from "./ButtonStyle";
import assets from "../../../Utils/assets";
import { buttonType, TButtonAtrType } from "../../types";

export interface IButton {
  name?: string;
  type?: TButtonAtrType;
  className?: buttonType;
  isArrowVisible: boolean;
  content: string;
  onClickHandler?: () => void;
}

const Button: React.FC<IButton> = (props: IButton): JSX.Element => {
  return (
    <ButtonStyle type={props.type ? props.type : "button"} className={props.className} onClick={props.onClickHandler}>
      {props.content}
      {props.isArrowVisible && <img className="arrow-right" src={assets.arrowRight} />}
    </ButtonStyle>
  );
};

export default Button;
