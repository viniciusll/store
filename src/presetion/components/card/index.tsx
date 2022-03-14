import { CardContainer } from './styles';
import { BsFillCartPlusFill } from 'react-icons/bs';

import { CardInterface } from '../../../domain/interfaces';
import { ProductModel } from '../../../domain/models/product-model';
import { useCart } from '../../context';

export function Card<CardInterface>({ ...props }) {
    const products = props.products as ProductModel[];

    const {getProducts, handleSetProducts} = useCart();

    function handleAddProductToCart(product: ProductModel) {
        const newProducts = [...getProducts, product];
        handleSetProducts(newProducts);
    };

    return (
        <CardContainer>
            <div className="content">
                <h1 className="title">{props.title}</h1>
                <div className="catalogProduct">
                    {products.map((product: ProductModel) => (
                        <div className="item" key={product.id}>
                            <img src={product.image} alt="product image" />
                            <div className="producDetail">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <div className="price">
                                    <span>${product.price.toFixed(2)}</span>
                                    <button onClick={() => handleAddProductToCart(product)}>
                                        <BsFillCartPlusFill />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CardContainer>
    );
};