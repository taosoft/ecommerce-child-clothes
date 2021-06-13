import axios from 'axios';
import Product from '../models/product';
import { StockProduct } from '../models/stockProduct';

export async function getLandingPageProducts(): Promise<any> {
    return await axios.get<Product[]>("/api/products?quantity=4");
}

export async function getStockProducts(): Promise<any> {
  return await axios.get<StockProduct[]>("/api/stock");
}

export async function createStockProduct(productDescription: any): Promise<any> {
  return await axios.post<StockProduct[]>("/api/stock", productDescription);
}