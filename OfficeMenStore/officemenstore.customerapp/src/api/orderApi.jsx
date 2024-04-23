import API from './API';
const orderApi = {
  GetAll: (requestDto) => {
    return API.post(`/Orders/GetAll`, requestDto);
  },
  Order: (dto) => {
    return API.post('/Orders', dto);
  },
  GetOrderByUserAccount: (userId) => {
    return API.get(`/Orders/GetOrderByUser/${userId}`);
  },
  GetPromotionByCondition: (promotionTypeId, orderValue) => {
    return API.get(`/Orders/promotions/get-by-condition/${promotionTypeId}/${orderValue}`);
  },
  GetDetailPromotion: (promotionId) => {
    return API.get(`/Orders/GetDetailPromotion/${promotionId}`);
  },
};
export default orderApi;
