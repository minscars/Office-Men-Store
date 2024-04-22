import { Update } from '@mui/icons-material';
import API from './API';
import Api from './API.File';
const categoryApi = {
  GetAll: () => {
    return API.get('/Categories');
  },
  AddCategory: (dto) => {
    return Api.post('/Categories/CreateCategory', dto);
  },
  UpdateCategory: (dto) => {
    return Api.put('/Categories/UpdateCategory', dto);
  },
  GetDetail: (cateId) => {
    return API.get(`/Categories/GetDetailCategory/${cateId}`);
  },
};

export default categoryApi;
