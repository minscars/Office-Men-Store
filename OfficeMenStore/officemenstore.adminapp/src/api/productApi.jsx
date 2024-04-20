import API from './API';
import Api from './API.File';
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
  UpdateProduct: (dto) => {
    return Api.put('/Products/UpdateProduct', dto);
  },
  CreateProduct: (dto) => {
    return Api.post('/Products/CreateProduct', dto);
  },
  DeleteProduct: (productId) => {
    return API.delete(`/Products/DeleteProduct/${productId}`);
  },
};

export default productApi;
