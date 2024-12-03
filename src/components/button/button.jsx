import React from "react";
import { ButtonStyled } from "./button.styled";

export const Button = ({ action, size, theme, text }) => {
    action = action == null ? () => console.log("Button Clicked!") : action;
    size = size == null ? "medium" : size;
    theme =
        theme == null
            ? {
                  bgColor: "#f4f4f4",
                  color: "#333",
                  hover: "#333",
                  hoverColor: "#f4f4f4",
              }
            : theme;
    text = text == null ? "Click Me!" : text;

    return (
        <ButtonStyled size={size} theme={theme} onClick={() => action()}>
            {text}
        </ButtonStyled>
    );
};
