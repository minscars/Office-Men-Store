// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   //// xac dinh trng thai ban dau cho gio hang
//   cartItems: [], //mang chua cac san phan
//   totalAmount: 0,
//   totalQuantity: 0,
// };

// /**
//  *  CreateSlice: Redux Toolkit giới thiệu createSlice,
//  *  một cách đơn giản để định nghĩa các "slice" của trạng thái ứng dụng cùng với các reducer, actions và selectors tương ứng.
//  *  Điều này giúp giảm sự trùng lặp mã và làm cho việc quản lý trạng thái dễ dàng hơn.
//  *
//  *
//  *
//  *  3. Một lát giỏ hàng được tạo bằng cách sử dụng hàm "createSlice" từ Redux Toolkit.
//  * Nó nhận vào một đối tượng có ba thuộc tính:
//  * - "name": Đặt thành "cart" để xác định slice này trong cửa hàng Redux.
//  * - "initialState": Đặt thành "initialstate" được xác định trước đó.
//  * - "reducers": Chứa các hành động khác nhau có thể được gửi đi để sửa đổi trạng thái.
//  */
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState, // nhung gia tri ban dau ban muon khi ban vao thi nhung gia tri ban dau cua no se la
//   reducers: {
//     // ham them san pham vao gio hang
//     // chua nhung cai cach giup ban lam viec voi slice
//     addItem: (state, action) => {
//       //sate la nhung cai ban da thiet lap san phi tren cua ham
//       //action la nhung gia tri ben ngoai
//       const newItem = action.payload; /* la mot gia tri ben ngoai nao do */
//       const existingItem = state.cartItems.find(
//         /*  Mục hiện có được tìm kiếm trong mảng "cartitems" bằng phương pháp "find" với chức năng gọi lại để kiểm tra xem ID của mục đó có khớp với ID của mục mới hay không.*/
//         (item) => item.id === newItem.id && item.size === newItem.size,
//       );
//       state.totalQuantity += newItem.quantity; // tong so
//       if (!existingItem) {
//         /**Nếu không tìm thấy mục hiện có, một đối tượng mục mới sẽ được đẩy vào mảng "cartitems" với số lượng ban đầu là 1 và các chi tiết tương ứng từ mục mới. */
//         state.cartItems.push({
//           id: newItem.id,
//           productsName: newItem.productsName,
//           imgUrl: newItem.imgUrl,
//           category: newItem.category,
//           price: newItem.price,
//           quantity: newItem.quantity,
//           size: newItem.size,
//           totalPrice: newItem.price,
//         });
//       } else {
//         /*Nếu tìm thấy mặt hàng hiện có, số lượng và tổng giá của nó sẽ được cập nhật.*/
//         existingItem.quantity++;
//         existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
//       }
//       // function  formatCurrency(amount) {
//       //   return new Intl.NumberFormat('en-US', { style: 'decimal', currency: 'USD' }).format(amount);
//       // }
//       /**"Tổng số tiền" được tính bằng cách giảm mảng "cartitems" và cộng giá nhân với số lượng của từng mặt hàng. */
//       state.totalAmount = state.cartItems.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),
//         0,
//       );

//       console.log(state.totalAmount);
//     },

//     // // Hàm xóa sản phẩm trong giỏ hàng
//     // deleteItem: (state, action) => {
//     //   const id = action.payload;
//     //   const existingItem = state.cartItems.find(item => item.id === id);
//     //   if (existingItem) {
//     //     state.totalQuantity -= existingItem.quantity; // Giảm tổng số lượng sản phẩm
//     //     state.cartItems = state.cartItems.filter(item => item.id !== id);
//     //   }

//     //   function formatCurrency(amount) {
//     //     return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
//     //   }

//     //   // Tính lại tổng số tiền sau khi xóa sản phẩm
//     //   state.totalAmount = formatCurrency(state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0));
//     // },

//     // ham delete san pham trong gio hang
//     // Hàm xóa sản phẩm trong giỏ hàng
//     deleteItem: (state, action) => {
//       const id = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === id);
//       if (existingItem) {
//         state.totalQuantity -= existingItem.quantity; // Giảm tổng số lượng sản phẩm
//         state.cartItems = state.cartItems.filter((item) => item.id !== id);
//       }

//       // function formatCurrency(amount) {
//       //   return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
//       // }

//       // Tính lại tổng số tiền sau khi xóa sản phẩm
//       state.totalAmount = state.cartItems.reduce(
//         (total, item) => total + Number(item.price) * Number(item.quantity),
//         0,
//       );

//       console.log(state.totalAmount);
//     },
//     // Hàm giảm số lượng sản phẩm trong giỏ hàng
//     decreaseQuantity: (state, action) => {
//       const { id, size } = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === id && item.size === size);

//       if (existingItem && existingItem.quantity > 1) {
//         existingItem.quantity--;
//         existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
//         state.totalQuantity--;
//         state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.totalPrice), 0);
//       }
//     },

//     increaseQuantity: (state, action) => {
//       const { id, size } = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === id && item.size === size);

//       if (existingItem) {
//         existingItem.quantity++;
//         existingItem.totalPrice = Number(existingItem.totalPrice) + Number(existingItem.price);
//         state.totalQuantity++;
//         state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.totalPrice), 0);
//       }
//     },
//   },
// });
// export const cartActions = cartSlice.actions;
// export default cartSlice.reducer;
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

    //============ delete item ===========

    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
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
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
