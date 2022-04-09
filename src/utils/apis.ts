import axios from 'axios';

export const FEE_URL = '/feed';
export const REGISTER_URL = '/register';

import ENV from '../environments/environment';

const { BASE_API_URL } = ENV;

export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Accept: 'application/json',
  },
});
