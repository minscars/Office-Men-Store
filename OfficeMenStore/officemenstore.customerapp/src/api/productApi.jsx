import API from './API';
const productApi = {
  GetAll: () => {
    return API.get('/Products');
  },

  GetProductById: (id) => {
    return API.get(`/Products/${id}`);
  }
};



export default productApi;
