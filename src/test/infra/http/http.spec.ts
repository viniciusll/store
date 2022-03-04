import api from '../../../infra/http/index';
import { ProductModel } from '../../../domain/models/product-model';

test('product validation', async () => {
    const products = await api.get('/products?limit=5') as ProductModel[];

    expect(!products.length).toBe(true);
});

// test('categories validation', async () => {
//     // const categories = await api.get('/products/categories');
// })