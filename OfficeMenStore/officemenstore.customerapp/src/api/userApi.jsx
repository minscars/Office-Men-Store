import API from './API';
const userApi = {
  Login: (request) => {
    return API.post('/Users/Login', request);
  },
  GetUserInformation: (userId) => {
    return API.get(`/Users/${userId}`);
  },
};

export default userApi;
