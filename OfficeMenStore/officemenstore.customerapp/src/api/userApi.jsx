import API from './API';
const userApi = {
  Login: (request) => {
    return API.post('/Users/Login', request);
  },
};

export default userApi;
