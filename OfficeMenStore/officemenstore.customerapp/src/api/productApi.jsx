import API from './API';
const productApi = {
  GetAll: () => {
    return API.get('/Products');
  },

  GetProductById: (id) => {
    return API.get(`/Products/${id}`);
  },
  GetProductByCate: (categoryId) => {
    return API.get(`/Products/Category/${categoryId}`);
  },
};

export default productApi;
