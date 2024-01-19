import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/solid';
import { Dashboard, Tables, Notifications } from '@/pages/user';
import Product from '@/pages/product';
import Cart from '@/pages/cart';
import { SignIn, SignUp } from '@/pages/auth';

const icon = {
  className: 'w-5 h-5 text-inherit',
};

export const routes = [
  {
    layout: 'user',
    pages: [
      // {
      //   icon: <HomeIcon {...icon} />,
      //   name: 'Home',
      //   path: '/home',
      //   element: <Home />,
      // },
      {
        icon: <ShoppingBagIcon {...icon} />,
        name: 'product',
        path: '/product',
        element: <Product />,
      },

      {
        icon: <ShoppingCartIcon {...icon} />,
        name: 'Cart',
        path: '/cart',
        element: <Cart />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: 'notifications',
        path: '/notifications',
        element: <Notifications />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: 'tables',
        path: '/tables',
        element: <Tables />,
      },
      {
        icon: <HomeIcon {...icon} />,
        name: 'Dashboard',
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
];

export default routes;
