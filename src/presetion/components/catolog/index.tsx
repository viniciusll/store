import * as Styled from './styles';

import ImageProduct from '../../../assets/product-01.jpg';

export function Catalog() {
    const products = [1, 2, 3, 4, 5, 6, 7, 8];
    
    return (
        <Styled.CatalogContainer>
           <div className="content">
                <h1 className="title">Catalog</h1>
                <div className="catalogProduct">
                    {products.map((products, index) => (
                        <div className="items" key={index}>
                            <img src={ImageProduct} alt="product image" />
                            <div className="producDetail">
                                <span>code: 12345</span>
                                <h2>Product Name</h2>
                                <span>Price</span>
                                <div className="price">
                                    <span>$500</span>
                                    <button>C</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styled.CatalogContainer>
    );
};