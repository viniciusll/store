import { CheckoutContainer } from "./styles";

import { Input, CardNumberMask, Item } from '../../../components';

export function Checkout() {
    return (
        <CheckoutContainer>
            <form className="form">
                <h2>Detalhes do pagamento</h2>
                <Input type="text" name="name" placeholder="Nome" />
                <CardNumberMask />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="text" name="address" placeholder="Endereço" />
            </form>
            <div className="items">
                <Item />
            </div>
        </CheckoutContainer>
    );
};