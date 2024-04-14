import API from './API';
const orderApi = {
  GetAll: (requestDto) => {
    return API.post(`/Orders/GetAll`, requestDto);
  },
  Order: (dto) => {
    return API.post("/Orders",dto)
  },
  GetOrderByUserAccount: (userId) => {
    return API.get(`/Orders/GetOrderByUser/${userId}`)
  }
  
};
export default orderApi;
