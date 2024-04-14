import React, { useState, useRef } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Avatar,
  Tabs,
  TabsHeader,
  Tab,
} from '@material-tailwind/react';
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
  UserCircleIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline';
import { MyOrder, Profile } from '@/pages/accounts';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

export function Accounts() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('profile');
  const [tab, setTab] = useState('desc');

  console.log(cartItems);
  //from
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      confirmedPassword: '',
      address: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required').min(4, 'Must be 4 characters or more'),
      email: Yup.string()
        .required('Required')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address'),
      password: Yup.string()
        .required('Required')
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          'Password must be 7-19 characters and contain at least one letter, one number and a special character',
        ),
      confirmedPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Password must match'),
      phone: Yup.string()
        .required('Required')
        .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Must be a valid phone number'),

      address: Yup.string().required('Required'), // Validation for address field
    }),
    onSubmit: (values) => {
      toast.success('Form submitted');
      console.log(values);
    },
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-12 gap-10">
      {/* <div className="relative -mt-5 h-40 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cove bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div> */}
      <Card className="grid-cols-1 xl:grid-cols-3 -mt-5 border  border-blue-gray-100 shadow-sm mb-5">
        {/* thẻ tab */}
        <div className="ml-4 mt-5 items-end justify-end">
          <div className="w-96 float-left left-0">
            <Tabs value={activeTab}>
              <TabsHeader>
                <Tab value="profile" onClick={() => handleTabChange('profile')}>
                  <UserCircleIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                  Profile
                </Tab>
                <Tab value="myorder" onClick={() => handleTabChange('myorder')}>
                  <ListBulletIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                  Orders
                </Tab>

                {/* <Tab value="settings" onClick={() => handleTabChange('settings')}>
                  <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                  Settings
                </Tab> */}
              </TabsHeader>
            </Tabs>
          </div>
        </div>

        <CardBody className="px-0 pt-0 pb-2 mt-5">
          <div className="w-full flex flex-col">
            {activeTab === 'myorder' && (
              // Content for the "App" tab
              <MyOrder />
            )}
            {activeTab === 'profile' && (
              // Content for the "Message" tab
              <Profile />
            )}
            {activeTab === 'settings' && (
              // Content for the "Settings" tab
              <YourSettingsComponent />
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Accounts;
