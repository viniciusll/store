import { ProductModel } from '../../../domain/models/product-model';

import { Item as ItemStyled } from './styles';
import { InfoProduto } from './InfoProduto';
import { useCart, getTotal } from '../../context';

export function Item() {
    const { getProducts } = useCart();
    const total = getTotal();
    
    return (
        <ItemStyled>
            {getProducts.length > 0 ? getProducts.map((product: ProductModel, index: number) => (
                <InfoProduto key={index} product={product} />
            )) : (<h1>Não há produtos</h1>)}
            <div className="amount">
                <div className="total">
                    <p>Total:</p>
                    <span>${total}</span>
                </div>
            </div>
            <button>
                Finalizar
            </button>
        </ItemStyled>
    );
};