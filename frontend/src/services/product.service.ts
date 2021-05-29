import axios, { AxiosResponse } from 'axios';
import Product from '../models/product';
import { StockProduct } from '../models/stockProduct';
import ConjuntoNino from '../Images/conjunto_nino';
import Medias from '../Images/medias';
import PantalonNino from '../Images/pantalon_nino';
import Vestido from '../Images/vestido';
import ConjuntoBebe from '../Images/bebe_conjunto'
import ConjuntoNino2 from '../Images/conjunto_nino_2'
import Boxer from '../Images/boxer'
import Traje from '../Images/traje'
import Zapatilla from '../Images/zapatilla'

  const stockProducts: StockProduct[] = [
    {
      product: 
      {
        _id: "1",
        title: 'Jean y camisa',
        price: 1000,
        description: 'Pantalón de jean y camisa azul',
        image: ConjuntoNino,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        _id: "2",
        title: 'Medias',
        price: 2000,
        description: 'Medias para niños',
        image: Medias,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        _id: "3",
        title: 'Pantalón',
        price: 1400,
        description: 'Pantalón para niño',
        image: PantalonNino,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        _id: "4",
        title: 'Vestido',
        price: 2300,
        description: 'Vestido para niña',
        image: Vestido,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    { 
      product: 
      {
        _id: "5",
        title: 'Ropa bebé',
        price: 7000,
        description: 'Conjunto para bebé',
        image: ConjuntoBebe,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    { 
      product: 
      {
        _id: "6",
        title: 'Conjunto de ropa',
        price: 2200,
        description: 'Conjunto para niño',
        image: ConjuntoNino2,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    { 
      product: 
      {
        _id: "7",
        title: 'Ropa interior',
        price: 1000,
        description: 'Ropa interior de niño',
        image: Boxer,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    { 
      product: 
      {
        _id: "8",
        title: 'Traje gris',
        price: 1000,
        description: 'Traje para niño',
        image: Traje,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        _id: "9",
        title: 'Zapatilla',
        price: 1000,
        description: 'Zapatillas con estrellas',
        image: Zapatilla,
        imageText: 'Image Text',
      },
      quantity: 10
    }
  ];


export async function getLandingPageProducts(): Promise<any> {
    // let axiosResponse: AxiosResponse<Product[]> = {
    //     data: products,
    //     status: 200,
    //     config: {},
    //     headers: null,
    //     statusText: '',
    //     request: null
    // }
    // return await Promise.resolve(axiosResponse);
    return await axios.get<Product[]>("http://localhost:4000/api/products"); //cuando peguemos a api
}

export async function getStockProducts(): Promise<AxiosResponse<StockProduct[]>> {
  let axiosResponse: AxiosResponse<StockProduct[]> = {
      data: stockProducts,
      status: 200,
      config: {},
      headers: null,
      statusText: '',
      request: null
  }
  return await Promise.resolve(axiosResponse);
  //return await axios.get<Product[], AxiosResponse<Product[]>>(BASE_URL); //cuando peguemos a api
}