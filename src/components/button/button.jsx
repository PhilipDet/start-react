import React from "react";
import { ButtonStyled } from "./button.styled";

export const Button = ({ action, size, theme, text }) => {
    action = action == null ? () => console.log("No Actions Given!") : action;
    size = getSize(size);
    theme = getTheme(theme);
    text = text == null ? "Click Me!" : text;

    return (
        <ButtonStyled size={size} theme={theme} onClick={() => action()}>
            {text}
        </ButtonStyled>
    );
};

const getSize = (size) => {
    switch (size) {
        case "small":
            return "1rem";
        default:
        case "medium":
            return "2rem";
        case "large":
            return "3rem";
    }
};

const getTheme = (theme) => {
    switch (theme) {
        default:
        case "light":
            return {
                bgColor: "#f4f4f4",
                color: "#333",
                hover: "#333",
                hoverColor: "#f4f4f4",
            };
        case "dark":
            return {
                bgColor: "#333",
                color: "#f4f4f4",
                hover: "#f4f4f4",
                hoverColor: "#333",
            };
        case "purple":
            return {
                bgColor: "#cb28cb",
                color: "#fff",
                hover: "#9f509f",
                hoverColor: "#fff",
            };
        case "blue":
            return {
                bgColor: "#2828cb",
                color: "#fff",
                hover: "#5454a5",
                hoverColor: "#fff",
            };
    }
};
