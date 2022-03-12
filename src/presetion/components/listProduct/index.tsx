import { useState, useEffect } from 'react';

import { GetAllProducts } from '../../context';
import { ProductModel } from '../../../domain/models/product-model';

import { Card, Loader } from '../../components';
import { ListProductContainer } from './styles';

export function ListProduct() {
    const [listProducts, setListProducts] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetAllProducts().then(products => {
            setListProducts(products);
            setLoading(false);
        });
    }, []);

    if (loading === true) {
        return <Loader />
    };

    return (
        <ListProductContainer>
            <Card products={listProducts} title="Produtos"/>
        </ListProductContainer>
    )
};