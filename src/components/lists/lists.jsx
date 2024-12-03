import React from "react";

export const Lists = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </>
    );
};
