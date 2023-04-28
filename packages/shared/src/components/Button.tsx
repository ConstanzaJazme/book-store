import { FunctionComponent } from "react";
import "./Button.css";

type ButtonProps = {
  caption: string;
};

const Button: FunctionComponent<ButtonProps> = ({ caption }) => (
  <button className="shared-button">{caption}</button>
);

export default Button;
