import axios from 'axios';
import { register } from '../models/register.model';

import { api, REGISTER_URL } from '../utils/apis';

export const createRegister = async (data: register) => {
  return await api.post(REGISTER_URL, data);
};
