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
import { Dashboard } from '@/pages/admin';
import { SignIn, SignUp } from '@/pages/auth';

import { Oders, OdersDetails, AllProducts, AddProducts, CustomerTable, UpdateProduct } from '@/pages/admin';
const icon = {
  className: 'w-5 h-5 text-inherit',
};

export const routes = [
  {
    layout: 'admin',
    pages: [
      //admin
      { icon: <Squares2X2Icon {...icon} />, name: 'Dashboard', path: '/dashboard', element: <Dashboard /> },
      { icon: <CubeIcon {...icon} />, name: 'product', path: '/allproduct', element: <AllProducts /> },
      { path: '/allproduct/addproducts', element: <AddProducts /> },
      { path: '/allproduct/updateproduct', element: <UpdateProduct /> },
      { icon: <NewspaperIcon {...icon} />, name: 'Orders', path: '/allorders', element: <Oders /> },
      { icon: <UsersIcon {...icon} />, name: 'customers', path: '/allcustomers', element: <CustomerTable /> },

      { path: '/allorders/ordersdetail', element: <OdersDetails /> },
      //Accout
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
