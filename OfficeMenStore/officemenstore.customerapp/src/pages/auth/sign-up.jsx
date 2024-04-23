import { Card, Input, Checkbox, Button, Typography } from '@material-tailwind/react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import userApi from '@/api/userApi';
import Alert from '@/components/alert';
import { Link, useNavigate } from 'react-router-dom';
export function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone: '',
      email: '',
      password: '',
      confirmedPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please enter a your name.').min(4, 'Must be 4 characters or more'),

      address: Yup.string().required('Required'),

      phone: Yup.string()
        .required('Please enter a phone number.')
        .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Must be a valid phone number'),

      email: Yup.string()
        .required('Please enter a phone email.')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address'),

      password: Yup.string()
        .required('Please enter a phone password.')
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          'Password must be 7-19 characters and contain at least one letter, one number and a special character',
        ),
      confirmedPassword: Yup.string()
        .required('Please enter again password.')
        .oneOf([Yup.ref('password'), null], 'Password must match'),
    }),
    onSubmit: async (values) => {
      await userApi.Register(values).then((res) => {
        if (res.statusCode === 200) {
          Alert.showSuccessAlert(res.message, navigate('/auth/sign-in'));
        } else Alert.showErrorAlert(res.message);
      });
    },
  });

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img src="/img/register-img.jpg" className="h-full w-full object-cover rounded-3xl" />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4 text-blue-900">
            Join Us Today
          </Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your email and password to register.
          </Typography>
        </div>

        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="font-medium">
              Your name <strong className="text-red-500">*</strong>
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && formik.errors.name}
            />
            {formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
          </div>

          <div className=" mb-4">
            <Typography variant="small" color="blue-gray" className="font-medium">
              Phone number <strong className="text-red-500">*</strong>
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your phone number"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && formik.errors.phone}
            />
            {formik.errors.phone && <p className="text-red-500 text-sm">{formik.errors.phone}</p>}
          </div>
          <div className="flex gap-6">
            <div className="w-full mb-4">
              <Typography variant="small" color="blue-gray" className="font-medium">
                Your email <strong className="text-red-500">*</strong>
              </Typography>
              <Input
                size="lg"
                placeholder="email@gmail.com"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && formik.errors.email}
              />
              {formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
            </div>
          </div>

          <div className="w-full mb-4">
            <Typography variant="small" color="blue-gray" className="font-medium">
              Password <strong className="text-red-500">*</strong>
            </Typography>
            <Input
              size="lg"
              placeholder="Password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
            />
            {formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
          </div>

          <div className="w-full mb-4">
            <Typography variant="small" color="blue-gray" className="font-medium">
              Confirm Password <strong className="text-red-500">*</strong>
            </Typography>
            <Input
              size="lg"
              placeholder="ConfirmedPassword"
              id="confirmedPassword"
              name="confirmedPassword"
              value={formik.values.confirmedPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmedPassword && formik.errors.confirmedPassword}
            />
            {formik.errors.confirmedPassword && (
              <p className="text-red-500 text-sm">{formik.errors.confirmedPassword}</p>
            )}
          </div>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="font-medium">
              Address <strong className="text-red-500">*</strong>
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && formik.errors.address}
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-sm">{formik.errors.address}</p>
            )}
          </div>

          <Button type="submit" className="mt-6 bg-blue-900" fullWidth>
            Register Now
          </Button>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1 ">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
