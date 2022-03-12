import styled, { keyframes } from "styled-components";

const running = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;

    .loading {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border: 8px solid #202124;
        border-left: 8px solid #FFC140;

        animation-name: ${running};
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
`;