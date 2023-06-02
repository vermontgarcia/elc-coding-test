/**
 * Axios request services
 */
import axios from 'axios';

const base_url = 'http://localhost:3035';

export const searchProduct = (search) => {
  return axios.get(`${base_url}/products?search=${search}`)
};
