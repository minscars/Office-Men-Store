import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slicse/cartSlice';
import cartUiSlice from './slicse/cartUiSlice';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    // middleware: [thunk, logger],
  },
});

export default store;
