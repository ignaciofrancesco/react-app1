import { useState } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onButtonClicked: () => void;
}

const Button = ({ children, color = "primary", onButtonClicked }: Props) => {
  let buttonColor = "btn-" + color;

  return (
    <>
      <button
        type="button"
        className={"btn " + buttonColor}
        onClick={() => {
          onButtonClicked();
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
