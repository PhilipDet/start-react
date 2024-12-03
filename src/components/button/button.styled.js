import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
    font-size: ${(props) => props.size};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.hover};
        color: ${(props) => props.theme.hoverColor};
    }
`;
