import styled from 'styled-components';

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    overflow: hidden;
    
    img {
        width: 100%;
        max-width: 1400px;
        border-radius: 16px;
        max-height: 600px;
        object-fit: cover;
    }
`;