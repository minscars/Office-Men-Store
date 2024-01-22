import API from './API';
const productApi = {
  GetAll: () => {
    return API.get('/Products');
  },
};

export default productApi;
