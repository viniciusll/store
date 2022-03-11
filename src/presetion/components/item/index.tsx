import { Item as ItemStyled } from './styles';

import { InfoProduto } from './InfoProduto';

export function Item() {
    return (
        <ItemStyled>
            <InfoProduto />
            <div className="amount">
                <div className="subtotal">
                    <p>Sub total:</p>
                    <span>$1.99</span>
                </div>
                <div className="total">
                    <p>Total:</p>
                    <span>$1.99</span>
                </div>
            </div>
            <button>
                Finalizar
            </button>
        </ItemStyled>
    );
};