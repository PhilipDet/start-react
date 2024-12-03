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

    const buttonThemes = {
        light: {
            bgColor: "#f4f4f4",
            color: "#333",
            hover: "#333",
            hoverColor: "#f4f4f4",
        },
        dark: {
            bgColor: "#333",
            color: "#f4f4f4",
            hover: "#f4f4f4",
            hoverColor: "#333",
        },
        purple: {
            bgColor: "#cb28cb",
            color: "#fff",
            hover: "#9f509f",
            hoverColor: "#fff",
        },
        blue: {
            bgColor: "#2828cb",
            color: "#fff",
            hover: "#5454a5",
            hoverColor: "#fff",
        },
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
                    theme={buttonThemes.blue}
                    text="Klik Her!"
                />

                <Button />
            </MainStyled>
        </>
    );
};
