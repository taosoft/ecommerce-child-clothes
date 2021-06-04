import axios from 'axios';
import Product from '../models/product';
import { StockProduct } from '../models/stockProduct';

export async function getLandingPageProducts(): Promise<any> {
    return await axios.get<Product[]>(process.env.BASE_URL + "/api/products?quantity=4");
}

export async function getStockProducts(): Promise<any> {
  return await axios.get<StockProduct[]>(process.env.BASE_URL + "/api/stock");
}