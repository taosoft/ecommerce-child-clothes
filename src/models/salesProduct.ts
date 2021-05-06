import Product from './product';
import User from './user';

export default interface SalesProduct {
  product: Product[],
  quantity: number,
  user: User,
  date: Date,
}