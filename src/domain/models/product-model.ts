type ratingProps = {
    rate: number;
    count: number;
};

export type ProductModel = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ratingProps;
};