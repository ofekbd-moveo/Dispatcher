import React from "react";
import { ButtonStyle } from "./ButtonStyle";
import assets from "../../../Utils/assets/assetsImports";
import { buttonType } from "../types";

export interface IButton {
  className?: buttonType;
  isArrowVisible: boolean;
  content: string;
  onClickHandler: () => void;
}

const Button: React.FC<IButton> = (props: IButton): JSX.Element => {
  return (
    <ButtonStyle className={props.className}>
      {props.content}
      {props.isArrowVisible && <img className="arrow-right" src={assets.arrowRight} onClick={props.onClickHandler} />}
    </ButtonStyle>
  );
};

export default Button;
