import { InfoProduto as InfoProdutosStyled } from './styles';

import { InfoProdutoInterface } from '../../../domain/interfaces';
import { ProductModel } from '../../../domain/models/product-model';
import { useCart } from '../../context';

export function InfoProduto<InfoProdutoInterface>({...props}) {
    const product = props.product as ProductModel;

    const { handleRemoveProduct } = useCart();

    function handleRemoveProductFromCart() {
        handleRemoveProduct(product)
    };

    return (
        <InfoProdutosStyled>
            <div className="info-produto-wrapper">
                <img src={product.image} alt="product image" />
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.category}</p>
                </div>
            </div>
            <div className='additional'>
                <span>${product.price}</span>
                <button onClick={handleRemoveProductFromCart} className='remove-product-btn'>
                    <div className='remove-product'>
                        X
                    </div>
                </button>
            </div>
        </InfoProdutosStyled>
    )
};