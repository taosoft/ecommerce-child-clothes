import Product from './product';

export default interface CartProduct {
  _id?: String,
  product?: Product,
  quantity: number
}