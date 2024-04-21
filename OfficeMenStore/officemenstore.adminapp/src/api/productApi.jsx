import API from './API';
import Api from './API.File';
const productApi = {
  GetAll: (dto) => {
    return API.post('/Products/GetAllProductPagination', dto);
  },

  GetProductById: (id) => {
    return API.get(`/Products/${id}`);
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
