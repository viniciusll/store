import styled from 'styled-components';

export const InputContainer = styled.div`

    input {
        text-indent: 10px;
        border: 1px solid #ccc;
        width: 500px;
        height: 50px;
        border-radius: 10px;
    }

    input::placeholder {
        color: #ccc;
    }
`;