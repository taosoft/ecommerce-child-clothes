import axios from 'axios';
import Sale from "../models/sale";

const baseUrl = process.env.REACT_APP_BASE_URL || "";

export async function getSales(): Promise<any> {
  return await axios.get<Sale[]>(baseUrl + '/api/sales');
}