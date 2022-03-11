import { useState, useEffect } from 'react';

import { CatalogContainer } from './styles';
import { Card } from '../card';

import { GetProductLimitResults } from '../../context';
import { ProductModel } from '../../../domain/models/product-model';

export function Catalog() {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        GetProductLimitResults(8).then(response => {
            setProducts(response);
        });
    }, []);
    
    return (
        <CatalogContainer>
           <Card products={products} />
        </CatalogContainer>
    );
};