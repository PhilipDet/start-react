import styled from "styled-components";

export const NavStyled = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.bgcolor}; // #2e9fe4

    ul {
        max-width: 1200px;
        width: 100%;
        list-style: none;
        padding: 2rem;

        display: flex;
        gap: 5rem;

        li {
            a {
                text-decoration: none;
                color: ${(props) => props.color}; // #333
                font-size: 3rem;
                font-weight: 700;
                cursor: pointer;
                position: relative;

                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    right: 50%;
                    transform: translateX(50%);
                    width: 0;
                    height: 2px;
                    background-color: #ffffff;
                    transition: width 0.3s;
                }

                &:hover:after {
                    width: 100%;
                }
            }

            &:last-child {
                margin-left: auto;

                a {
                    &:after {
                        display: none;
                    }
                }
            }
        }
    }
`;
