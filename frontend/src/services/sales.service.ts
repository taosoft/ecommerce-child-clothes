import axios from 'axios';
import Sale from "../models/sale";

const baseUrl = process.env.REACT_APP_BASE_URL || "";

export async function getSales(token: string): Promise<any> {
  return await axios.get<Sale[]>(baseUrl + '/api/sales', {
    headers: {
      'authorization': `Bearer ${token}`
    }
  });
}

export async function createSale(sale: Sale, token: string): Promise<any> {
  return await axios.post<Sale>(baseUrl + '/api/sales', sale, {
    headers: {
    'authorization': `Bearer ${token}` 
    }
  });
}