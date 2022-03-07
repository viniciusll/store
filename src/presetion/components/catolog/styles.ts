import styled from 'styled-components';

export const CatalogContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 32px;
    padding: 0 16px;
    
    .content {
        width: 100%;
        max-width: 1400px;

        .title {
            font-size: 32px;
            font-weight: 700;
            color: #202124;
            margin-bottom: 32px;
        }

        .catalogProduct {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 32px;
        }

        .item {
            border: 1px solid #e6e6e6;
            border-radius: 8px;
            width: 100%;
            height: 400px;
            position: relative;

            img {
                width: 100%;
                height: 200px;
                object-fit: contain;
                border-radius: 8px 8px 0 0;
                padding: 8px;
            }

            .producDetail {
                padding: 16px;

                span {
                    font-size: 14px;
                    color: #5F6368;
                }

                h2 {
                    font-size: 18px;
                    color: #202124;
                    margin: 16px 0;
                    max-width: 100%;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2; 
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .price {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 16px;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    right: 0;
                    padding: 16px;

                    span {
                        font-size: 16px;
                        color: #202124;
                        font-weight: 700;
                    }

                    button {
                        width: 48px;
                        font-size: 22px;
                        height: 48px;
                        border-radius: 100%;
                        background: #ff872c;
                        outline: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: none;
                        color: #fff;
                        cursor: pointer;
                        box-shadow: rgb(0 0 0 / 10%) 0px 9px 16px, rgb(0 0 0 / 32%) 0px 2px 2px;
                    }
                }
            }
        }
    }
`;