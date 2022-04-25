import axios from 'axios';

export const FEED_URL = '/posts/posts';
export const REGISTER_URL = '/cadastros';
export const LOGIN_URL = '/cadastros/buscar';

import ENV from '../environments/environment';

const { BASE_API_URL } = ENV;

export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Accept: 'application/json',
  },
});
