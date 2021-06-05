import CartProduct from './cartProduct';
import User from './user';

export default interface Sale {
  _id: number;
  cartProducts: CartProduct[],
  user: User,
  date: Date,
}