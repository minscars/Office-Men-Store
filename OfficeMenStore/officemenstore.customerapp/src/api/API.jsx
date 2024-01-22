import axios from 'axios';
//import.meta.env.REACT_APP_API_URL;

const API = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
  },
  refreshHeader: () => {
    API.interceptors.request.use(async (config) => {
      var newConfig = {};
      newConfig = {
        ...config,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return newConfig;
    });
  },
});

API.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    console.error(error);
  },
);

export default API;
