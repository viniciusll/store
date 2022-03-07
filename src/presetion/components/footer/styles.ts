import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 40px 0;
    background-color: #202124;
    color: #fff;
    margin-top: 32px;

    .social {
        text-align: center;
        padding-bottom: 25px;
    }

    .social > a {
        display: flex;
        font-size: 20px;
        width: 40px;
        height: 40px;
        display: inline-block;
        margin: 0 8px;
        color: inherit;
    }

    ul {
        padding: 0;
        list-style: none;
        text-align: center;
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 0;

        li {
            padding: 0 10px;

            a {
                color: inherit;
                text-decoration: none;
                opacity: 0.8;
            }

            a:hover {
                opacity: 1;
            }
        }
    }

    .copyright {
        margin-top:15px;
        text-align:center;
        font-size:13px;
        color:#aaa;
        margin-bottom:0;
    }
`;