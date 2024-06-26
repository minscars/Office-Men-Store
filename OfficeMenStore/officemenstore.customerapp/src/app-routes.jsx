import { Chip } from '@material-tailwind/react';

import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  CubeIcon,
  NewspaperIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { useSelector, useDispatch } from 'react-redux';

import { SignIn, SignUp } from '@/pages/auth';
import Home from './pages/home';
import Product from './pages/product';
import Details from './pages/product/detail';
import MyOrderDetail from './pages/accounts/orderhistorydetail';
import { Checkout, Cart, Success, Payment } from '@/pages/cart';
import { Accounts } from '@/pages/accounts';
const icon = {
  className: 'w-5 h-5 text-inherit',
};

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

export const routes = [
  {
    layout: 'user',
    pages: [
      //Route in sidebar
      // { icon: <HomeIcon {...icon} />, name: 'Home', path: '/home', element: <Home /> },
      { icon: <ShoppingBagIcon {...icon} />, name: 'product', path: '/product', element: <Product /> },
      {
        icon: <ShoppingCartIcon {...icon} />,
        name: 'Cart',
        path: '/cart',
        element: <Cart />,
      },
      { icon: <UserCircleIcon {...icon} />, name: 'Account', path: '/account', element: <Accounts /> },
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: 'notifications',
      //   path: '/notifications',
      //   element: <Notifications />,
      // },
      // { icon: <TableCellsIcon {...icon} />, name: 'tables', path: '/tables', element: <Tables /> },

      //Product
      { path: '/product/details/:id', element: <Details /> },

      //Cart
      { path: '/cart/checkout/', name: 'Checkout', element: <Checkout /> },
      {
        path: '/cart/checkout/payment',
        name: 'payment',
        element: <Payment />,
      },
      { path: '/cart/success/', name: 'Success', element: <Success /> },
      //Accout
      { path: '/account/orderdetails', name: 'myorder', element: <MyOrderDetail /> },
      { path: '/cart/sign-in', name: 'myorder', element: <SignIn /> },
    ],
  },
  // {
  //   title: 'auth pages',
  //   layout: 'auth',
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: 'sign in',
  //       path: '/sign-in',
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <RectangleStackIcon {...icon} />,
  //       name: 'sign up',
  //       path: '/sign-up',
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
