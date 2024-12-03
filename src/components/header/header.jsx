import React from "react";
import { HederStyled } from "./header.styled";
import { Navigation } from "../nav/nav";
import { Categories } from "../categories/categories";

export const Header = () => {
    return (
        <>
            <HederStyled>
                <Navigation />
                <Categories />
            </HederStyled>
        </>
    );
};
