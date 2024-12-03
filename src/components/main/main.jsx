import React from "react";
import { MainStyled } from "./main.styled";
import { Greeting } from "../greeting/greeting";
import { Lists } from "../lists/lists";
import { Button } from "../button/button";

export const Main = () => {
    const dishes = ["Pizza", "Burger", "Pasta", "Lasagne", "Bøf"];
    const movies = [
        "The Godfather",
        "The Shawshank Redemption",
        "Pulp Fiction",
        "The Dark Knight",
        "Forrest Gump",
    ];

    const eventClick = () => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        console.log("Button Click at: " + hour + ":" + minute + ":" + second);
    };

    const helloWorld = () => {
        console.log("Hello, World!");
    };

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
                    <Lists items={dishes} />
                </ol>

                <hr />

                <h2>Film</h2>
                <ol>
                    <Lists items={movies} />
                </ol>

                <Button
                    action={eventClick}
                    size="medium"
                    theme="blue"
                    text="Klik Her!"
                />

                <Button
                    action={helloWorld}
                    size="large"
                    theme="purple"
                    text="Hello, World!"
                />

                <Button text="Button without props" />
            </MainStyled>
        </>
    );
};
