import API from './API';
const orderApi = {
  GetAll: (requestDto) => {
    return API.post(`/Orders/GetAll`, requestDto);
  },
  GetOrderDetail: (orderId) => {
    return API.get(`/Orders/OrderDetail/${orderId}`);
  },
  UpdateOrderStatus: (dto) => {
    return API.put('/Orders/UpdateOrderStatus', dto);
  },
};
export default orderApi;
