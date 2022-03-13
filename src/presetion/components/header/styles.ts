import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
    active: boolean;
};

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 32px;

    .logo {
        max-width: 100px;
        height: auto;
    }

    .navigation {
        display: flex;
        
        ul {
            display: flex;
            gap: 32px;

            li {
                display: flex;
                list-style-type: none;
                align-items: center;

                a {
                    text-decoration: none;
                    color: #202124;
                    font-size: 22px;
                }
            }
        }
    }
`;

export const Button = styled.div<ButtonProps>`
    padding: 16px 24px;
    background-color: ${(props) => props.active ? '#FFC13F' : '#fff'};
    border-radius: 8px;
    font-weight: 500;
    transition: 1s;

    span {
        color: ${(props) => props.active ? '#FFF' : '#202124'};
    }


    &:hover {
        background: #FFC13F;
        
        span {
            color: #fff;
            transition: 1.2s;
        }
    }
`;