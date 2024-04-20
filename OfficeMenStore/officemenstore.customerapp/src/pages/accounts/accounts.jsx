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
import { UserCircleIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import { MyOrder, Profile } from '@/pages/accounts';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export function Accounts() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('profile');
  const [tab, setTab] = useState('desc');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const token = window.localStorage.getItem('token');

  return (
    <div className="mt-12 gap-10">
      {token ? (
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
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="mt-20 text-xl text-gray-700">
            You not sign in! Please{' '}
            <Link className="font-bold" to={'/auth/sign-in'}>
              Sign in
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Accounts;
