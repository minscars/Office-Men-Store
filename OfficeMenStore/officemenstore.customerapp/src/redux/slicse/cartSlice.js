import { createSlice } from '@reduxjs/toolkit';

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];

const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0;

const totalQuantity =
  localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem('cartItems', JSON.stringify(item));
  localStorage.setItem('totalAmount', JSON.stringify(totalAmount));
  localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    // =========== add item ============
    addItem(state, action) {
      const newItem = action.payload;
      const id = action.payload.id;
      const extraIngredients = action.payload.extraIngredients;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id && item.size === newItem.size);

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productsName: newItem.productsName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          category: newItem.category,
          quantity: 1,
          totalPrice: newItem.price,
          size: newItem.size,
        });
        state.totalQuantity++;
      } else if (existingItem && JSON.stringify(existingItem.extraIngredients) === JSON.stringify(extraIngredients)) {
        state.totalQuantity++;
        existingItem.quantity++;
      } else {
        const value = JSON.parse(localStorage.getItem('cartItems'));
        let index = value.findIndex((s) => s.id === existingItem.id);
        const newValue = {
          id: existingItem.id,
          productsName: existingItem.productsName,
          imgUrl: existingItem.imgUrl,
          price: existingItem.price,
          category: existingItem.category,
          quantity: 1,
          totalPrice: existingItem.price,
          size: existingItem.size,
        };
        state.cartItems.splice(index, 1, newValue);
        state.totalQuantity = state.cartItems.reduce((total, item) => total + Number(item.quantity), 0);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0,
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity,
      );
    },

    // ========= remove item ========

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0,
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity,
      );
    },
    //============ increaseQuantity ===========

    increaseQuantity(state, action) {
      const { id, size } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id && item.size === size);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(existingItem.price);
        state.totalQuantity++;
        state.totalAmount += Number(existingItem.price);
        setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
      }
    },

    //============ ===========
    decreaseQuantity(state, action) {
      const { id, size } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id && item.size === size);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
        state.totalQuantity--;
        state.totalAmount -= Number(existingItem.price);
        setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
      }
    },

    //============ delete item ===========

    // deleteItem(state, action) {
    //   const id = action.payload;
    //   const existingItem = state.cartItems.find((item) => item.id === id);

    //   if (existingItem) {
    //     state.cartItems = state.cartItems.filter((item) => item.id !== id);
    //     state.totalQuantity = state.totalQuantity - existingItem.quantity;
    //   }

    //   state.totalAmount = state.cartItems.reduce(
    //     (total, item) => total + Number(item.price) * Number(item.quantity),
    //     0,
    //   );
    //   setItemFunc(
    //     state.cartItems.map((item) => item),
    //     state.totalAmount,
    //     state.totalQuantity,
    //   );
    // },
    deleteItem(state, action) {
      const { id, size } = action.payload;


      if (existingItems.length > 0) {
        state.cartItems = state.cartItems.filter((item) => !(item.id == id && item.size == size));
        state.totalQuantity = state.totalQuantity - existingItems.quantity;
      }

      // Tính lại tổng số tiền
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0,
      );
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity,
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
