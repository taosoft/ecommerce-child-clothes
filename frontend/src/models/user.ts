export default interface User {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  password: string;
  email: string;
  isAdmin: boolean;
}