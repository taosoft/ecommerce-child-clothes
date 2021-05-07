import { AxiosResponse } from 'axios';
import Sale from "../models/sale";

const sales: Sale[] = [
    {
      products:
      [
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
          }
      ],
      user: {
        id: 1,
        firstName: "Juan",
        lastName: "Perez",
        age: 25,
        password: "123",
        email: "admin@google.com",
      },
      date: new Date(),
    }
]

export async function getStockProducts(): Promise<AxiosResponse<Sale[]>> {
    let axiosResponse: AxiosResponse<Sale[]> = {
        data: sales,
        status: 200,
        config: {},
        headers: null,
        statusText: '',
        request: null
    }
    return await Promise.resolve(axiosResponse);
    //return await axios.get<Product[], AxiosResponse<Product[]>>(BASE_URL); //cuando peguemos a api
  }