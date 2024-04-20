import { useState, useEffect } from 'react';
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
import { MyOrder } from '@/pages/accounts';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import userApi from '@/api/userApi';
export function Profile() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const token = window.localStorage.getItem('token');
  const [user, setUser] = useState();
  var userLogin = null;
  useEffect(() => {
    if (token != null) {
      userLogin = jwtDecode(token);
    }
    const getUser = async () => {
      const data = await userApi.GetUserInformation(userLogin.id);
      setUser(data);
    };
    getUser();
  }, []);
  console.log(user);
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
    <>
      <div className="mx-0 flex justify-center mt-2 gap-5">
        {/* avtaar */}
        {/* Thông tin  */}
        <div className="xl:col-span-2 ">
          <Card className="mt-0 mb-3 mr-5 h-100 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
            <CardBody className=" px-0 pt-0 pb-2 mt-5 flex">
              <div className="items-center w-[700px] gap-4 px-4 py-4 my-3 mt-20">
                <div className="mt-2 flex justify-center">
                  <img src={user?.avatar} alt="avatar" className="rounded-full h-auto w-[200px]" />
                </div>
                <div className="flex justify-center">
                  <Typography variant="h4" color="blue-gray" className="pt-2">
                    {user?.name}
                  </Typography>
                </div>
                <div className="flex justify-center">
                  <Button className="flex items-center gap-2 mt-3 bg-blue-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5 mx-0 my-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    Change avatar
                  </Button>
                </div>
              </div>
              <div className="w-full flex flex-col mt-0">
                <form className="mt-2 mb-2 mx-auto max-w-screen-lg xl:w-3/4 ml-10" onSubmit={formik.handleSubmit}>
                  <div className="mt-2">
                    <Typography variant="h4" color="blue-gray" className="mb-1 mt">
                      Your information{' '}
                    </Typography>
                  </div>
                  {/* name */}
                  <div className="mb-1 flex flex-col gap-6 mt-3 ">
                    <Typography variant="small" color="blue-gray" className="-mb-4 font-medium">
                      Your name
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter your name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                    {formik.errors.name && (
                      <p className="font-[0.75rem] w-full text-red-500 -mt-4"> {formik.errors.name} </p>
                    )}
                  </div>
                  {/* email */}
                  <div className="mb-1 flex flex-col gap-6 mt-5">
                    <Typography variant="small" color="blue-gray" className="-mb-4 font-medium">
                      Your email
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="name@mail.com"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                    {formik.errors.email && (
                      <p className="font-[0.75rem] w-full text-red-500 -mt-4"> {formik.errors.email} </p>
                    )}
                  </div>

                  <div className="mb-1 flex flex-col gap-6 mt-5">
                    <Typography variant="small" color="blue-gray" className="-mb-4 font-medium">
                      Address
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter your address"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                    {formik.errors.address && (
                      <p className="font-[0.75rem] w-full text-red-500 -mt-4"> {formik.errors.address} </p>
                    )}
                  </div>

                  {/* phone */}
                  <div className="mb-1 flex flex-col gap-6 mt-5">
                    <Typography variant="small" color="blue-gray" className="-mb-4 font-medium">
                      Phone number
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                    {formik.errors.phone && (
                      <p className="font-[0.75rem] w-full text-red-500 -mt-4"> {formik.errors.phone} </p>
                    )}
                  </div>
                  <div className="">
                    <Button type="submit" className="mt-6 bg-blue-900">
                      Update
                    </Button>
                  </div>
                </form>
              </div>
            </CardBody>
          </Card>
        </div>
        {/* mật khẩu */}

        {/*  */}
      </div>
    </>
  );
}

export default Profile;
