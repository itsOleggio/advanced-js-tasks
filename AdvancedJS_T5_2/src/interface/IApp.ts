export interface ICart {
    id: number;
    content: Object[]; 
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
}

export interface ICartItem{
    product: IProduct;
    quantity: number;
}