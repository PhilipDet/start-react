import React from "react";
import { CategoriesStyled } from "./categories.styled";
import { Button } from "./button";

export const Categories = () => {
    return (
        <CategoriesStyled>
            <li>
                <Button text="Item 1" />
            </li>
            <li>
                <Button text="Item 2" />
            </li>
            <li>
                <Button text="Item 3" />
            </li>
            <li>
                <Button text="Item 4" />
            </li>
            <li>
                <Button text="Item 5" />
            </li>
        </CategoriesStyled>
    );
};
