import { useState, useEffect } from 'react';

import { GetAllProducts } from '../../context';
import { ProductModel } from '../../../domain/models/product-model';

import { Card } from '../card';
import { ListProductContainer } from './styles';

export function ListProduct() {
    const [listProducts, setListProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        GetAllProducts().then(products => {
            setListProducts(products);
        });
    }, []);

    return (
        <ListProductContainer>
            <Card products={listProducts} title="Produtos"/>
        </ListProductContainer>
    )
};