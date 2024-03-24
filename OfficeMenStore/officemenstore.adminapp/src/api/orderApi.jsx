import API from './API';
const orderApi = {
  GetAll: (requestDto) => {
    return API.post(`/Orders/GetAll`, requestDto);
  },
};
export default orderApi;
