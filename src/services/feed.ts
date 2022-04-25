import { api, FEED_URL } from '../utils/apis';

export const getFeed = async () => {
  return await api.get(FEED_URL);
};
