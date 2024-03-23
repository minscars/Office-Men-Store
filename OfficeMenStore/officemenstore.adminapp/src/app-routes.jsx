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
  TagIcon,
} from '@heroicons/react/24/solid';
import { Dashboard, Tables, Notifications } from '@/pages/user';
import { SignIn, SignUp } from '@/pages/auth';
import MyOrderDetail from './pages/accounts/orderhistorydetail';
import { Checkout, Cart } from '@/pages/cart';
import { Accounts } from '@/pages/accounts';
import { Oders, OdersDetails, Products, Categories, AddProducts, CustomerTable, UpdateProduct } from '@/pages/admin';
const icon = {
  className: 'w-5 h-5 text-inherit',
};

export const routes = [
  {
    layout: 'admin',
    pages: [
      //Route in sidebar
      // { icon: <HomeIcon {...icon} />, name: 'Home', path: '/home', element: <Home /> },
      // { icon: <ShoppingBagIcon {...icon} />, name: 'product', path: '/product', element: <Product /> },
      // { icon: <ShoppingCartIcon {...icon} />, name: 'Cart', path: '/cart', element: <Cart /> },
      // { icon: <UserCircleIcon {...icon} />, name: 'Account', path: '/account', element: <Accounts /> },
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: 'notifications',
      //   path: '/notifications',
      //   element: <Notifications />,
      // },
      // { icon: <TableCellsIcon {...icon} />, name: 'tables', path: '/tables', element: <Tables /> },
      //admin
      //{ icon: <Squares2X2Icon {...icon} />, name: 'Dashboard', path: '/dashboard', element: <Dashboard /> },
      { icon: <CubeIcon {...icon} />, name: 'product management', path: '/product', element: <Products /> },
      { path: '/product/addproducts', element: <AddProducts /> },
      { path: '/product/updateproduct', element: <UpdateProduct /> },
      { icon: <TagIcon {...icon} />, name: 'category management', path: '/category', element: <Categories /> },
      {
        icon: <UsersIcon {...icon} />,
        name: 'customers management',
        path: '/allcustomers',
        element: <CustomerTable />,
      },

      { icon: <NewspaperIcon {...icon} />, name: 'Orders management', path: '/allorders', element: <Oders /> },
      { path: '/allorders/ordersdetail', element: <OdersDetails /> },

      //Cart
      { path: '/cart/checkout/', name: 'Checkout', element: <Checkout /> },
      //Accout
      { path: '/account/orderdetails', name: 'myorder', element: <MyOrderDetail /> },
    ],
  },
  {
    title: 'auth pages',
    layout: 'auth',
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: 'sign in',
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: 'sign up',
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
