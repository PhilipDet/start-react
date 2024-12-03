import React from "react";
import { MainStyled } from "./main.styled";
import { Greeting } from "../greeting/greeting";
import { Dishes } from "../dishes/dishes";

export const Main = () => {
    const dishes = ["Pizza", "Burger", "Pasta", "Lasagne", "Bøf"];

    return (
        <>
            <MainStyled>
                <h2>Hilsner</h2>
                <Greeting name="John" />
                <Greeting name="Jane" />
                <Greeting name="Bob" />

                <hr />

                <h2>Livretter</h2>
                <ol>
                    <Dishes foods={dishes} />
                </ol>
            </MainStyled>
        </>
    );
};
