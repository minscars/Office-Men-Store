import API from './API';
const productApi = {
  GetAll: (offset, limit) => {
    return API.get(`/Products?page=${offset}&limit=${limit}`);
  },

  GetProductById: (id) => {
    return API.get(`/Products/${id}`);
  },
  Search: (offset, limit, key) => {
    return API.get(`/Products/Search?page=${offset}&limit=${limit}&key=${key}`);
  },
  GetProductByCate: (offset, limit, cateId) => {
    return API.get(`/Products/Category?page=${offset}&limit=${limit}&cateId=${cateId}`);
  },
};

export default productApi;
