import API from './API';
const orderApi = {
  GetAll: (dto) => {
    return API.post(`/Orders/GetAll`, dto);
  },
  GetOrderDetail: (orderId) => {
    return API.get(`/Orders/OrderDetail/${orderId}`);
  },
  UpdateOrderStatus: (dto) => {
    return API.put('/Orders/UpdateOrderStatus', dto);
  },
  GetAllPromotions: () => {
    return API.get('/Orders/promotions');
  },
};
export default orderApi;
