import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 400;
    }
    *, input, button {
        font-family: 'Roboto', sans-serif;
    }
`;