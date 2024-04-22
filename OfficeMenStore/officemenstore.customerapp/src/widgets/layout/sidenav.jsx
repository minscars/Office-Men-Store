// thanh nav ngang

import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Avatar, Button, IconButton, Typography, Chip, ListItemSuffix } from '@material-tailwind/react';
import { useMaterialTailwindController, setOpenSidenav } from '@/context';
import Logo from '@/components/image/logo-store.png';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import cartItemApi from '@/api/cartItemApi';
import { useState, useEffect } from 'react';
export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: 'bg-gradient-to-br from-gray-800 to-gray-900',
    white: 'bg-white shadow-sm',
    transparent: 'bg-transparent',
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [cartItemList, setCartItemList] = useState([]);
  const token = window.localStorage.getItem('token');
  var userLogin = null;

  useEffect(() => {
    if (token != null) {
      userLogin = jwtDecode(token);
    }
    const GetCartItem = async () => {
      const data = await cartItemApi.GetCartItemByUser(userLogin.id);
      setCartItemList(data.data);
    };
    GetCartItem();
  }, [cartItemList.total]);

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? 'translate-x-0' : '-translate-x-80'
      }  fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className={`relative`}>
        <Link to="/" className="py-6 px-8 text-center">
          <img src={Logo} alt="" className="ml-4 h-auto w-[250px]" />
        </Link>
        {/* nút thoát */}
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
        {/*  */}
      </div>
      {/*đăng nhập đăng xuất */}
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? 'white' : 'blue'}
                  className="font-blue-900 uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {/* chỉnh lại sidenav */}
            {pages
              .filter((page) => page.icon)
              .map(({ icon, name, path }) => (
                <li key={name}>
                  <NavLink to={`/${layout}${path}`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? 'gradient' : 'text'}
                        color={isActive ? sidenavColor : sidenavType === 'dark' ? 'white' : 'blue-gray'}
                        className="flex items-center gap-4 px-4 capitalize"
                        fullWidth
                      >
                        {icon}
                        <Typography color="inherit" className="font-medium capitalize">
                          {name}
                        </Typography>
                        {/* {name === 'Cart' && (
                          <ListItemSuffix>
                            <Chip
                              value={token ? cartItemList.totalItems : totalQuantity}
                              size="sm"
                              variant="ghost"
                              color="blue-gray"
                              className="rounded-full"
                            />
                          </ListItemSuffix>
                        )} */}
                      </Button>
                    )}
                  </NavLink>
                </li>
              ))}
          </ul>
        ))}
      </div>

      <div className="mt-[360px] ml-2 flex w-full flex-col items-center justify-center  border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <div className="gap-4 text-blue-gray-900 sm:justify-center">
          <Typography className="text-blue-gray font-medium">Support: 0398897634</Typography>
          <Typography className="text-blue-gray font-medium">Contact: admin@officemenstore.com</Typography>
        </div>
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: '/img/logo-ct.png',
  brandName: 'Material Tailwind React',
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
Sidenav.displayName = '/src/widgets/layout/sidnave.jsx';
export default Sidenav;
