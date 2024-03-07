import { useState } from 'react';
import { Card, Input, Checkbox, Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function SignUp() {
  const [username, setUsername] = useState(''); // Initialize with user data if available
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // Initialize with user data if available
  const [address, setAddress] = useState('');

  const formik = useFormik({
    initialValues: {
      name: username || '',
      password: password || '',
      confirmedPassword: '',
      phone: phoneNumber || '',
      email: email || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Vui lòng nhập tên').min(4, 'Must be 4 characters or more'),

      email: Yup.string()
        .required('Vui lòng nhập một địa chỉ email')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Địa chỉ email không hợp lệ'),

      phone: Yup.string()
        .required('Vui lòng nhập một số điện thoại')
        .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Must be a valid phone number'),

      password: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          'Password must be 7-19 characters and contain at least one letter, one number and a special character',
        ),
      confirmedPassword: Yup.string()
        .required('Vui lòng xác nhận  mật khẩu')
        .oneOf([Yup.ref('password'), null], 'Password không khớp'),
    }),

    onSubmit: (values) => {
      window.alert('Form submitted');
      console.log(values);
    },
  });

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img src="/img/pattern.png" className="h-full w-full object-cover rounded-3xl" />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Join Us Today
          </Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your email and password to register.
          </Typography>
        </div>
        <form className=" infoform mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={formik.handleSubmit}>
          {/* name */}
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-4 font-medium">
              Your name <strong className="text-red-500 ">*</strong>
            </Typography>
            <Input
              type="name"
              size="lg"
              id="name"
              name="name"
              placeholder="enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            {formik.errors.name && <p className="errorMsg text-red-500 text-sm -mt-4"> {formik.errors.name} </p>}
          </div>
          {/*email */}
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-4 font-medium mt-2">
              Your email <strong className="text-red-500 ">*</strong>
            </Typography>
            <Input
              type="email"
              size="lg"
              id="email"
              name="email"
              placeholder="name@mail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            {formik.errors.email && <p className="errorMsg text-red-500 text-sm -mt-4"> {formik.errors.email} </p>}
          </div>
          {/* sodienthoai */}
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-4 font-medium mt-2">
              Phone number <strong className="text-red-500 ">*</strong>
            </Typography>
            <Input
              type="text"
              size="lg"
              id="phone"
              name="phone"
              placeholder="Enter your phone numbers"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            {formik.errors.phone && <p className="errorMsg text-red-500 text-sm -mt-4"> {formik.errors.phone} </p>}
          </div>

          {/* password */}
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-4 font-medium mt-2">
              Password <strong className="text-red-500 ">*</strong>
            </Typography>
            <Input
              type="text"
              size="lg"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Confirm your password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            {formik.errors.password && (
              <p className="errorMsg text-red-500 text-sm -mt-4"> {formik.errors.password} </p>
            )}
          </div>
          {/* confirmpassword */}
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-4 font-medium mt-2">
              Confirme Password <strong className="text-red-500 ">*</strong>
            </Typography>
            <Input
              type="text"
              size="lg"
              id="confirmedPassword"
              name="confirmedPassword"
              value={formik.values.confirmedPassword}
              onChange={formik.handleChange}
              placeholder="Confirm your password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            {formik.errors.confirmedPassword && (
              <p className="errorMsg text-red-500 text-sm -mt-4"> {formik.errors.confirmedPassword} </p>
            )}
          </div>
          <Checkbox
            label={
              <Typography variant="small" color="gray" className="flex items-center justify-start font-medium">
                I agree the&nbsp;
                <a href="#" className="font-normal text-black transition-colors hover:text-gray-900 underline">
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />

          <Button className="mt-6" fullWidth type="submit" onSubmit={formik.handleSubmit}>
            Register Now
          </Button>

          <div className="space-y-4 mt-8">
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path
                    d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in With Google</span>
            </Button>
          </div>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
