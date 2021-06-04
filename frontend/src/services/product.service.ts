import axios from 'axios';
import Product from '../models/product';
import { StockProduct } from '../models/stockProduct';

export async function getLandingPageProducts(): Promise<any> {
    return await axios.get<Product[]>("http://localhost:4000" + "/api/products?quantity=4");
}

export async function getStockProducts(): Promise<any> {
  return await axios.get<StockProduct[]>("http://localhost:4000" + "/api/stock");
}