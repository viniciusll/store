import { createContext, useState, useContext } from "react";

import { ProductModel } from "../../domain/models/product-model";
import CartStorage from '../../infra/cache/cartStorage';

interface Props {
    children: React.ReactNode;
};

type CartProps = {
    cartProducts: ProductModel[];
    handleSetProducts: (products: ProductModel[]) => void;
    handleClearCart: () => void;
    handleRemoveProduct: (removeProduct: ProductModel) => void;
};

export const CartContext = createContext({} as CartProps);

export default function CartProvider({ children }: Props) {
    const [cartProducts, setCartProducts] = useState<ProductModel[]>([]);
    
    function handleSetProducts(products: ProductModel[]) {

        setCartProducts(products);
        CartStorage.setProductsToCart(products);
    };

    function handleClearCart() {
        setCartProducts([])
        CartStorage.clearCart()
    }

    function handleRemoveProduct(removeProduct: ProductModel) {
        const newProducts = cartProducts.filter(p => p.id !== removeProduct.id);
        setCartProducts(newProducts);
        CartStorage.removeProductOfCart(removeProduct.id);
    }

    return (
        <CartContext.Provider value={{ cartProducts, handleSetProducts, handleClearCart, handleRemoveProduct}}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    };

    const { cartProducts, handleSetProducts, handleClearCart, handleRemoveProduct } = context;

    const getProducts = cartProducts.length > 0 ? cartProducts : CartStorage.getProductsCart();

    return {getProducts, handleSetProducts, handleClearCart, handleRemoveProduct};
};

export function getTotal() {
    const { getProducts } = useCart();
    const total = getProducts.reduce((accumulator: number, product: ProductModel) => {
        const total_price = accumulator + product.price;
        const round = (Math.round(total_price * 100) / 100).toFixed(2);
        return parseFloat(round);
    }, 0);

    return total;
};