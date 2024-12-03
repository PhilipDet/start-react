import React from "react";

export const Dishes = ({ foods }) => {
    return (
        <>
            {foods.map((food) => (
                <li key={food}>{food}</li>
            ))}
        </>
    );
};
