//import axios, { AxiosResponse } from 'axios';
import { AxiosResponse } from 'axios';
import Product from '../models/product';
import { StockProduct } from '../models/stockProduct';
//const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const products: Product[] = [
    {
      id: "1",
      title: 'Featured post',
      price: 1000,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/featured/?clothes,kids',
      imageText: 'Image Text',
    },
    {
      id: "2",
      title: 'Post title',
      price: 2000,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/featured/?clothes,kids',
      imageText: 'Image Text',
    },
    {
      id: "3",
      title: 'Post title',
      price: 1400,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/featured/?clothes,kids',
      imageText: 'Image Text',
    },
    {
      id: "4",
      title: 'Post title',
      price: 2300,
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/featured/?clothes,kids',
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
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/featured/?clothes,kids',
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        id: "2",
        title: 'Featured post',
        price: 1000,
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/featured/?clothes,kids',
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        id: "3",
        title: 'Featured post',
        price: 1000,
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/featured/?clothes,kids',
        imageText: 'Image Text',
      },
      quantity: 10
    },
    {
      product: 
      {
        id: "4",
        title: 'Featured post',
        price: 1000,
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/featured/?clothes,kids',
        imageText: 'Image Text',
      },
      quantity: 10
    },
    { 
      product: 
      {
        id: "5",
        title: 'Featured post',
        price: 1000,
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/featured/?clothes,kids',
        imageText: 'Image Text',
      },
      quantity: 10
    },
    { 
      product: 
      {
        id: "6",
        title: 'Featured post',
        price: 1000,
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/featured/?clothes,kids',
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
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/featured/?clothes,kids',
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
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/featured/?clothes,kids',
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
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/featured/?clothes,kids',
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