import API from './API';
const cartApi = {
  AddToCart: (dto) => {
    return API.post('/CartItems', dto);
  },
  GetCartItemByUser: (userId) => {
    return API.get(`/CartItems/${userId}`);
  },
  DeleteCartItem: (dto) => {
    return API.put('/CartItems/DeleteCartItem', dto);
  },
  UpdateAmount: (dto) => {
    return API.put('/CartItems', dto);
  },
};

export default cartApi;
