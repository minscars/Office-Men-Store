import API from './API';

const promotionApi = {
  AddPromotion: (dto) => {
    return API.post('/Promotions', dto);
  },
  UpdatePromotion: (dto) => {
    return API.patch('/Promotions', dto);
  },
};

export default promotionApi;
