//import axios, { AxiosResponse } from 'axios';
import { AxiosResponse } from 'axios';
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

const products: Product[] = [
    {
      id: "1",
      title: 'Conjunto para niño',
      price: 1000,
      description: 'Pantalón de jean y camisa azul',
      image: ConjuntoNino,
      imageText: 'Image Text',
    },
    {
      id: "2",
      title: 'Post title',
      price: 2000,
      description: 'This is a wider card.',
      image: Medias,
      imageText: 'Image Text',
    },
    {
      id: "3",
      title: 'Post title',
      price: 1400,
      description: 'This is a wider card.',
      image: PantalonNino,
      imageText: 'Image Text',
    },
    {
      id: "4",
      title: 'Post title',
      price: 2300,
      description: 'This is a wider card.',
      image: Vestido,
      imageText: 'Image Text',
    }
  ];


  const stockProducts: StockProduct[] = [
    {
      product: 
      {
        id: "1",
        title: 'Featured post',
        price: 1000,
        description: 'This is a wider card.',
        image: ConjuntoNino,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        id: "2",
        title: 'Post title',
        price: 2000,
        description: 'This is a wider card.',
        image: Medias,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        id: "3",
        title: 'Post title',
        price: 1400,
        description: 'This is a wider card.',
        image: PantalonNino,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        id: "4",
        title: 'Post title',
        price: 2300,
        description: 'This is a wider card.',
        image: Vestido,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    { 
      product: 
      {
        id: "5",
        title: 'Conjunto',
        price: 7000,
        description:
          'This is a wider card.',
        image: ConjuntoBebe,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    { 
      product: 
      {
        id: "6",
        title: 'Gorrito',
        price: 2200,
        description:
          'This is a wider card.',
        image: ConjuntoNino2,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    { 
      product: 
      {
        id: "7",
        title: 'Featured post',
        price: 1000,
        description:
          'This is a wider card.',
        image: Boxer,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    { 
      product: 
      {
        id: "8",
        title: 'Featured post',
        price: 1000,
        description:
          'This is a wider card.',
        image: Traje,
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        id: "9",
        title: 'Featured post',
        price: 1000,
        description: 'This is a wider card.',
        image: Zapatilla,
        imageText: 'Image Text',
      },
      quantity: 10
    }
  ];


export async function getLandingPageProducts(): Promise<AxiosResponse<Product[]>> {
    let axiosResponse: AxiosResponse<Product[]> = {
        data: products,
        status: 200,
        config: {},
        headers: null,
        statusText: '',
        request: null
    }
    return await Promise.resolve(axiosResponse);
    //return await axios.get<Product[], AxiosResponse<Product[]>>(BASE_URL); //cuando peguemos a api
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