import API from './API';
const sizeProductApi = {
  GetAllSizeByProduct: (productId) => {
    return API.get(`/SizeDetails/${productId}`);
  },
  UpdateQuantitySizeProduct: (dto) => {
    return API.put('/SizeDetails/UpdateQuantitySizeProduct', dto);
  },
};

export default sizeProductApi;
