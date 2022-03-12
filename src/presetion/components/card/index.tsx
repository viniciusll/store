import { CardContainer } from './styles';

import { CardInterface } from '../../../domain/interfaces';
import { ProductModel } from '../../../domain/models/product-model';
import { BsFillCartPlusFill } from 'react-icons/bs';

export function Card<CardInterface>({ ...props }) {
    const products = props.products as ProductModel[];

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
        </CardContainer>
    );
};