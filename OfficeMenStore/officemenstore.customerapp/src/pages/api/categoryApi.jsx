import API from './API';
const categoryApi = {
  GetAll: () => {
    return API.get('/Categories');
  },
};

export default categoryApi;
