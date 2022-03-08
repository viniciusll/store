import styled from 'styled-components';

export const CardNumberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    width: 500px;
    height: 50px;
    border-radius: 10px;

    input {
        width: 100%;
        height: 100%;
        border: none;
        text-indent: 10px;
        background: transparent;
    }

    input:focus {
        outline: none;
        border: none;
    }

    .dateValidate {
        width: 60px;
    }

    .cvv {
        width: 80px;
    }  

    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input::placeholder {
        color: #ccc;
    }

    .dateValidate::placeholder {
        text-align: right;
    }

    input[type="month"]::-webkit-inner-spin-button,
    input[type="month"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;