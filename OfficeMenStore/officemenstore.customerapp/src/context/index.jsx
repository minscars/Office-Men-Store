import React from 'react';
import PropTypes from 'prop-types';

//MaterialTailwind: Đây là một React Context được tạo bằng React.createContext(null),
// nó được sử dụng để chia sẻ giữa các thành phần
export const MaterialTailwind = React.createContext(null);
MaterialTailwind.displayName = 'MaterialTailwindContext';

// reducer: Là một hàm reducer của React, nhận vào một trạng thái và một hành động, trả về trạng thái mới dựa trên hành động.
export function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_SIDENAV': {
      return { ...state, openSidenav: action.value };
    }
    case 'SIDENAV_TYPE': {
      return { ...state, sidenavType: action.value };
    }
    case 'SIDENAV_COLOR': {
      return { ...state, sidenavColor: action.value };
    }
    case 'TRANSPARENT_NAVBAR': {
      return { ...state, transparentNavbar: action.value };
    }
    case 'FIXED_NAVBAR': {
      return { ...state, fixedNavbar: action.value };
    }
    case 'OPEN_CONFIGURATOR': {
      return { ...state, openConfigurator: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
// MaterialTailwindControllerProvider: Là một thành phần Provider của Context,
// cung cấp trạng thái và hàm dispatch thông qua React Reducer cho các thành phần con.
// Trạng thái khởi tạo của ứng dụng được xác định trong initialState của MaterialTailwindControllerProvider.
// Các thuộc tính bao gồm:

export function MaterialTailwindControllerProvider({ children }) {
  // openSidenav: Trạng thái hiển thị/ẩn thanh điều hướng bên.
  // sidenavColor: Màu sắc của thanh điều hướng bên.
  // sidenavType: Kiểu thiết kế của thanh điều hướng bên.
  // transparentNavbar: Trạng thái thanh điều hướng trắng trong suốt hay không.
  // fixedNavbar: Trạng thái thanh điều hướng cố định khi cuộn trang.
  // openConfigurator: Trạng thái mở/đóng cấu hình.
  const initialState = {
    openSidenav: false,
    sidenavColor: 'dark',
    sidenavType: 'white',
    transparentNavbar: true,
    fixedNavbar: false,
    openConfigurator: false,
  };
  // Là một React functional component, sử dụng useReducer để quản lý trạng thái ứng dụng.
  const [controller, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialTailwind.Provider value={value}>{children}</MaterialTailwind.Provider>;
}
// Một hook custom để dễ dàng sử dụng giá trị từ React Context.
// Nó sử dụng useContext để lấy giá trị từ MaterialTailwind Context.
export function useMaterialTailwindController() {
  const context = React.useContext(MaterialTailwind);

  if (!context) {
    throw new Error('useMaterialTailwindController should be used inside the MaterialTailwindControllerProvider.');
  }

  return context;
}

MaterialTailwindControllerProvider.displayName = '/src/context/index.jsx';

MaterialTailwindControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
// Một loạt các hàm (ví dụ: setOpenSidenav, setSidenavType, ...) được cung cấp để giảm sự phức tạp khi gửi các hành động đến reducer.
// Những hàm này nhận giá trị và gọi hàm dispatch với một hành động cụ thể.
export const setOpenSidenav = (dispatch, value) => dispatch({ type: 'OPEN_SIDENAV', value });
export const setSidenavType = (dispatch, value) => dispatch({ type: 'SIDENAV_TYPE', value });
export const setSidenavColor = (dispatch, value) => dispatch({ type: 'SIDENAV_COLOR', value });
export const setTransparentNavbar = (dispatch, value) => dispatch({ type: 'TRANSPARENT_NAVBAR', value });
export const setFixedNavbar = (dispatch, value) => dispatch({ type: 'FIXED_NAVBAR', value });
// export const setOpenConfigurator = (dispatch, value) =>
//   dispatch({ type: "OPEN_CONFIGURATOR", value });
