import axios from 'axios';
import Sale from "../models/sale";

export async function getSales(): Promise<any> {
    return await axios.get<Sale[]>('http://localhost:4000/api/sales');
  }