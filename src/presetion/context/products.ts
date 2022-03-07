import { ProductModel } from '../../domain/models/product-model';

import api from '../../infra/http';

export async function GetAllProducts() {
    const products = await api.get('/products') as ProductModel[];

    return products;
};

export async function GetProductLimitResults(limit: number) {
    const response = await api.get(`/products?limit=${limit}`);
    const products = response.data as ProductModel[];

    return products;
};