import { ProductModel } from "../models/product-model";

export interface CartContextManager {
    clearCart: Function;
    removeItem: (id?: string) => void;
    addItem: (product: ProductModel) => void;
    hasInTheCart: (product: ProductModel) => boolean;
    products: ProductModel[];
};