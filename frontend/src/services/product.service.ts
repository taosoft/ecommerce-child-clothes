import axios from 'axios';
import Product from '../models/product';
import { StockProduct } from '../models/stockProduct';

const baseUrl = process.env.REACT_APP_BASE_URL || "";

export async function getLandingPageProducts(): Promise<any> {
  return await axios.get<Product[]>(baseUrl + "/api/products?quantity=4");
}

export async function getStockProducts(): Promise<any> {
  return await axios.get<StockProduct[]>(baseUrl + "/api/stock");
}

export async function createStockProduct(productDescription: any): Promise<any> {
  return await axios.post<StockProduct[]>(baseUrl + "/api/stock", productDescription);
}

export async function updateProductStock(productDescription: any): Promise<any> {
  return await axios.put<StockProduct[]>(baseUrl + "/api/stock", productDescription);
}