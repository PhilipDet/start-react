import styled from "styled-components";

const sizes = {
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
};

export const ButtonStyled = styled.button`
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
    font-size: ${(props) => sizes[props.size]};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    transition: 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.hover};
        color: ${(props) => props.theme.hoverColor};
    }
`;
