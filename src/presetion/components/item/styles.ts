import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin: 32px;
    gap: 32px;

    .amount {
        display: flex;
        flex-direction: column;
        border-top: 1px solid #8B8B8B;
        border-bottom: 1px solid #8B8B8B;

        .total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 15px 0 15px 0px;

            p {
                color: #8B8B8B;
            }
        }
    }

    button {
        background-color: #201C27;
        border-radius: 10px;
        color: #FFFFFF;
        border: none;
        outline: none;
        padding: 15px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            filter: brightness(1.5);
        }
    }

    .clear-btn {
        background-color: #f03e3e;
        border-radius: 10px;
        color: #FFFFFF;
        border: none;
        outline: none;
        padding: 15px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            filter: brightness(1.3);
        }
    }
`;

export const InfoProduto = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    
    .info-produto-wrapper {
        display: flex;
        align-items: center;

        img { 
            width: 60px;
            height: 100%;
            border-radius: 10px;
        }
    }

    div {
        gap: 10px;

        h3 {
            font-size: 18px;
            color: #202124;
            margin-left: 15px;
            max-width: 250px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1; 
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        p {
            margin-top: 5px;
            left: 15px;
            position: relative;
            color: #8B8B8B;
        }
    }


    .additional {
        display: flex;
        align-items: center;
    }

    span {
        color: #202124;
    }

    .remove-product-btn {
        background-color: transparent;
        font-size: small;
        color: #f03e3e;

        .remove-product {
            border: 1px solid #F03E3E;
            border-radius: 100%;
            padding: 5px;
            text-align: center;
        }


        &:hover {
            filter: brightness(1.3);
            background-color: #f03e3e;
            color: #fff;

            .remove-product {
                border: 1px solid #fff;
                border-radius: 90%;
                padding: 5px;
                text-align: center;
            }
        }
    }
`;