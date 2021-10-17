import React from "react";
import { Button } from "./Button";
import arrowRight from "../../../Utils/assets/arrowRight.svg";
import { buttonType } from "../types";

export interface IButton {
  className?: buttonType;
  isArrowVisible: boolean;
  content: string;
  onClickHander: () => void;
}

const ButtonContainer: React.FC<IButton> = (props: IButton): JSX.Element => {
  return (
    <Button className={props.className}>
      {props.content}
      {props.isArrowVisible && <img className="arrow-right" src={arrowRight} onClick={props.onClickHander} />}
    </Button>
  );
};

export default ButtonContainer;
