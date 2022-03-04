import styled from 'styled-components';

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;
    padding: 0 16px;

    img {
        width: 100%;
        max-width: 1400px;
        height: 600px;
        object-fit: cover;
        border-radius: 16px;
    }
`;