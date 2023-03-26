export interface IProducts {
    id: number; 
    title: string;
    description: string;
    price: number;
    discountPercentage: number; 
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface IProductsData {
    products: IProducts[];
}

export interface IProductsSingle {
    product: IProducts;
}