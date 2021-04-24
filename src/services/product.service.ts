//import axios, { AxiosResponse } from 'axios';
import { AxiosResponse } from 'axios';
import Product from '../models/product';
//const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const featuredPosts: Product[] = [
    {
      id: "1",
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      id: "2",
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      id: "3",
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      id: "4",
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    }
  ];


export async function getLandingPageProducts(): Promise<AxiosResponse<Product[]>> {
    let axiosResponse: AxiosResponse<Product[]> = {
        data: featuredPosts,
        status: 200,
        config: {},
        headers: null,
        statusText: '',
        request: null
    }
    return await Promise.resolve(axiosResponse);
    //return await axios.get<Product[], AxiosResponse<Product[]>>(BASE_URL);
}