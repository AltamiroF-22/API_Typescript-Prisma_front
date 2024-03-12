import React from "react";
import "./button.sass";

interface ButtonProps {
  bgColor: string;
  text: string;
  width: string;
  onsubmit?: () => void;
}

const Button: React.FC<ButtonProps> = ({ bgColor, text, width, onsubmit }) => {
  return (
    <button className={`${bgColor} ${width} button`} onClick={onsubmit}>
      {text}
    </button>
  );
};

export default Button;
