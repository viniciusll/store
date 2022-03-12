import { useState, useEffect } from 'react';

import { CatalogContainer } from './styles';
import { Card, Loader } from '../../components';

import { GetProductLimitResults } from '../../context';
import { ProductModel } from '../../../domain/models/product-model';

export function Catalog() {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetProductLimitResults(8).then(response => {
            setProducts(response);
            setLoading(false);
        });
    }, []);

    if (loading === true) {
        return <Loader />
    };
    
    return (
        <CatalogContainer>
           <Card products={products} title="Produtos mais vendidos" />
        </CatalogContainer>
    );
};