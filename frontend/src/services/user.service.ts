import axios from 'axios';
import AuthorizedUser from '../models/authorizedUser';

const baseUrl = process.env.REACT_APP_BASE_URL || ""

export async function login(email: string, password: string): Promise<any> {
    return await axios.post<AuthorizedUser>(baseUrl + '/api/users/login', { email, password });
}

export async function create(firstName: string, lastName: string, email: string, password: string): Promise<any> {
    return await axios.post<AuthorizedUser>(baseUrl + '/api/users/registration', { name: firstName + ' ' + lastName, email, password });
}