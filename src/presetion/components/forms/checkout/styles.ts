import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    min-height: 50vh;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    padding: 32px;

    .form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        height: 100%;
        max-width: 500px;
        width: 80%;

        h2 {
            font-size: 25px;
            color: #202124;
            margin-bottom: 32px;
            font-weight: 400;
        }
    }

    .items {
        margin-top: 32px;
        height: 100%;
        width: 100%;
        max-width: 460px;
        background-color: #F2F2F2;
        border-radius: 10px;
    }
`;