import axios from 'axios';
import Product from '../models/product';
import { StockProduct } from '../models/stockProduct';

export async function getLandingPageProducts(): Promise<any> {
    return await axios.get<Product[]>("http://localhost:4000" + "/api/products?quantity=4");
}

export async function getStockProducts(): Promise<any> {
  return await axios.get<StockProduct[]>("http://localhost:4000" + "/api/stock");
}

export async function createStockProduct(productDescription: any): Promise<any> {
  return await axios.post<StockProduct[]>("http://localhost:4000" + "/api/stock", productDescription);
}