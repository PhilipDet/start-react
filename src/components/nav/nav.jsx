import React from "react";
import { NavStyled } from "./nav.styled";
import { ThemeBTN } from "./theme";

export const Navigation = () => {
    return (
        <NavStyled bgcolor="#cb2828" color="#fff">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <ThemeBTN />
                </li>
            </ul>
        </NavStyled>
    );
};
