import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 32px;

    .navigation {
        display: flex;
        
        ul {
            display: flex;
            gap: 32px;

            li {
                list-style-type: none;

                a {
                    text-decoration: none;
                    color: #202124;
                    font-size: 22px;
                }

                .button {
                    padding: 16px 24px;
                    background: #fff;
                    color: #202124;
                    border-radius: 8px;
                    font-weight: 500;
                }

                .button:hover {
                    background: #202124;
                    color: #fff;
                    transition-delay: 0.3s;
                }
            }
        }
    }
`;