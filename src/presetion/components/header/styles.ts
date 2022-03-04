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
                }

                .button {
                    padding: 16px 24px;
                    background: #202124;
                    color: #fff;
                    border-radius: 8px;
                    font-weight: 500;
                }
            }
        }
    }
`;