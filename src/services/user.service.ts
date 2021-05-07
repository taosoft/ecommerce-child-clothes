import { AxiosResponse } from 'axios';
import User from '../models/user';

const users: User[] = [
    {
      id: 1,
      age: 18,
      email: "ejemplo@ejemplo.com",
      firstName: "Ejemplo",
      lastName: "Ejemplo2",
      password: "admin",
      isAdmin: true
    }
  ];

export async function login(email: string, password: string): Promise<AxiosResponse<User | null>> {

    let user = users.filter(user => user.email === email && user.password === password);
    if(user.length === 1) {
      let axiosResponse: AxiosResponse<User> = {
          data: user[0],
          status: 200,
          config: {},
          headers: null,
          statusText: '',
          request: null
      };
      return await Promise.resolve(axiosResponse);
    }
    else{
      let axiosResponse: AxiosResponse<null> = {
        data: null,
        status: 401,
        config: {},
        headers: null,
        statusText: '',
        request: null
      };
      return await Promise.resolve(axiosResponse);
    }
    //return await axios.get<Product[], AxiosResponse<Product[]>>(BASE_URL); //cuando peguemos a api
}