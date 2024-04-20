import API from './API';

const sizeProductApi = {
  GetAmountSizeProduct: (dto) => {
    return API.post('/SizeDetails/GetAmountSizeProduct', dto);
  },
};

export default sizeProductApi;
