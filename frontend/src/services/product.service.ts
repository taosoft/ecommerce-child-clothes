import axios from 'axios';
import Product from '../models/product';
import { StockProduct } from '../models/stockProduct';

const baseUrl = 'http://localhost:4000' || ""

export async function getLandingPageProducts(): Promise<any> {
  return await axios.get<Product[]>(baseUrl + "/api/products?quantity=4");
}

export async function getStockProducts(): Promise<any> {
  return await axios.get<StockProduct[]>(baseUrl + "/api/stock");
}

export async function createStockProduct(productDescription: any): Promise<any> {
  return await axios.post<StockProduct[]>(baseUrl + "/api/stock", productDescription);
}