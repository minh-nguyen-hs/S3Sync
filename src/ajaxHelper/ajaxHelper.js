import axios from 'axios';
import { TOKEN } from '../constants';

export const getUrl = (url) => {
  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `ID_TOKEN=${TOKEN}`
    },
  });
};
