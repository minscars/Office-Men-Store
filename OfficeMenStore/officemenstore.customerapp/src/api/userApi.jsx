import API from './API';
const userApi = {
  Login: (request) => {
    return API.post('/Users/Login', request);
  },
  GetUserInformation: (userId) => {
    return API.get(`/Users/${userId}`);
  },
  Register: (dto) => {
    return API.post('/Users/Register', dto);
  },
};

export default userApi;
