import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export function getProducts() {
  return axios.get(BASE_URL);
}

export function getProduct(id) {
  return axios({
    method: 'get',
    url: BASE_URL,
    params: { id },
  })
}

export function postProduct({ title, body }) {
  return axios({
    method: 'post',
    url: BASE_URL,
    data: {
      title,
      body,
    }
  })
}
