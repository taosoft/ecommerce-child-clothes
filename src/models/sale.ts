import CartProduct from './cartProduct';
import User from './user';

export default interface Sale {
  products: CartProduct[],
  user: User,
  date: Date,
}