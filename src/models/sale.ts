import CartProduct from './cartProduct';
import User from './user';

export default interface Sale {
  id: number;
  products: CartProduct[],
  user: User,
  date: Date,
}