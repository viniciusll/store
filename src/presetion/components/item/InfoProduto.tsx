import { InfoProduto as InfoProdutosStyled } from './styles';

import { InfoProdutoInterface } from '../../../domain/interfaces';
import { ProductModel } from '../../../domain/models/product-model';

export function InfoProduto<InfoProdutoInterface>({...props}) {
    const product = props.product as ProductModel;

    return (
        <InfoProdutosStyled>
            <div className="info-produto-wrapper">
                <img src={product.image} alt="product image" />
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.category}</p>
                </div>
            </div>
            <span>${product.price}</span>
        </InfoProdutosStyled>
    )
};