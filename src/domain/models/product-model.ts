type ratingProps = {
    rate: number;
    count: number;
};

export type ProductModel = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ratingProps;
};