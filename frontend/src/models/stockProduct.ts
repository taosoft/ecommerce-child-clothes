import Product from "./product";

export interface StockProduct {
    _id: string,
    product: Product,
    quantity: number,
}