import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '26f8f440b83e4785b33c57036ecfd945',
  },
});
