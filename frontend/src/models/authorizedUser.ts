import User from "./user";

export default interface AuthorizedUser {
    token: string;
    user: User;
}