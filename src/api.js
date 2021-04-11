import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export async function getProducts() {
  return await axios.get(BASE_URL);
}

export async function getProduct(id) {
  return await axios({
    method: 'get',
    url: BASE_URL,
    params: { id }
  })
}

export async function postProduct({ title, price }) {
  return await axios({
    method: 'post',
    url: BASE_URL,
    data: {
      title,
      price,
    }
  })
}
