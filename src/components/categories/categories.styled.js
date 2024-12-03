import styled from "styled-components";

export const CategoriesStyled = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 1rem;

    li {
        a {
            text-decoration: none;
            color: #333;
            font-weight: 500;

            &:hover {
                color: #cb2828;
            }
        }
    }
`;
