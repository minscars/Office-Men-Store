import API from './API';

const addressApi = {
  CreateAddress: (dto) => {
    return API.post('/Addresses', dto);
  },
};

export default addressApi;
