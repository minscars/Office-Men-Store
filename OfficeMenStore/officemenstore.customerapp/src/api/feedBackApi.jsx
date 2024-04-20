import API from './API';

const feedBackApi = {
  GetFeedBacksFollowProduct: (productId) => {
    return API.get(`/FeedBacks/GetFeebBackFollowingProduct/${productId}`);
  },
  AddFeedBack: (dto) => {
    return API.post('/FeedBacks/AddFeedBack', dto);
  },
};

export default feedBackApi;
