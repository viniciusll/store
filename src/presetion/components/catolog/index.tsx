import { useState, useEffect } from 'react';

import * as Styled from './styles';
import ImageProduct from '../../../assets/product-01.jpg';
import { BsFillCartPlusFill } from 'react-icons/bs';

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
        <Styled.CatalogContainer>
           <div className="content">
                <h1 className="title">Catálogo</h1>
                <div className="catalogProduct">
                    {products.map((product: ProductModel) => (
                        <div className="item" key={product.id}>
                            <img src={product.image} alt="product image" />
                            <div className="producDetail">
                                <h2>{product.title}</h2>
                                <span>Price</span>
                                <div className="price">
                                    <span>${product.price.toFixed(2)}</span>
                                    <button>
                                        <BsFillCartPlusFill />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styled.CatalogContainer>
    );
};