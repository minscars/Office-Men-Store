import API from './API';
const userApi = {
  Login: (request) => {
    return API.post('/Users/Login', request);
  },
  GetAllUser: (dto) => {
    return API.post('/Users/GetAllUser', dto);
  },
};

export default userApi;
