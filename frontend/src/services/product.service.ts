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

export async function createStockProduct(productDescription: any, token: string): Promise<any> {
  return await axios.post<StockProduct[]>(baseUrl + "/api/stock", productDescription, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  });
}

export async function updateProductStock(productDescription: any, token: string): Promise<any> {
  return await axios.put<StockProduct>(baseUrl + "/api/stock", productDescription, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  });
}

export async function updateOnlyStock(productDescription: any, token: string): Promise<any> {
  return await axios.put<any>(baseUrl + `/api/stock/${productDescription.product._id}`, productDescription, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  });
}

export async function deleteStockProduct(productDescription: any, token: string): Promise<any> {
  return await axios.delete<String>(baseUrl + "/api/products/" + productDescription.product._id, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  });
}