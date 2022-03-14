import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 400;
    }

    body, html {
        overflow: auto;
        height: 100vh;
        width: 100vw;
    }

    *, input, button {
        font-family: 'Roboto', sans-serif;
    }
`;