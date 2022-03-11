import ProductImage from '../../../assets/product-01.jpg';

import { InfoProduto as InfoProdutosStyled } from './styles';

export function InfoProduto() {
    return (
        <InfoProdutosStyled>
            <div className="info-produto-wrapper">
                <img src={ProductImage} alt="product image" />
                <div>
                    <h3>Product name</h3>
                    <p>Categoria</p>
                </div>
            </div>
            <span>$1.99</span>
        </InfoProdutosStyled>
    )
};