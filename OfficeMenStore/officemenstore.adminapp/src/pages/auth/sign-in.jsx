import { Card, Input, Checkbox, Button, Typography } from '@material-tailwind/react';
import userApi from '@/api/userApi';
import { useEffect, useState } from 'react';
import Alert from '@/components/alert';
import { jwtDecode } from 'jwt-decode';
export function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userlogin, setUsser] = useState();
  async function login(e) {
    e.preventDefault();
    const request = { username, password };

    await userApi
      .Login(request)
      .then((response) => {
        if (response.statusCode === 200) {
          window.localStorage.setItem('token', response.data);
          var token = window.localStorage.getItem('token');
          const user = jwtDecode(token);
          if (user) {
            Alert.showSuccessAlert(response.message, () => (window.location.href = '/admin/product'));
          }
        } else {
          Alert.showErrorAlert(response.message);
        }
      })
      .catch(() => {
        Alert.showErrorAlert('Oops, something went wrong! Please contact administrator.');
      });
  }
  return (
    <div className="h-[690px] m-8 flex gap-4 justify-center bg-[url('/img/bg-admin.jpg')] rounded-xl">
      <div className="h-[520px] lg:w-2/5 mt-24 bg-white rounded-xl">
        <div className="text-center">
          <div className="flex justify-center">
            <img src="/img/admin-logo.png" alt="" className="mt-6 ml-4 h-auto w-[150px] right-0 left-0" />
          </div>
          <Typography variant="h2" className="font-bold mb-2 mt-4">
            Hello Admin!
          </Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your email and password to Sign In.
          </Typography>
        </div>
        <form onSubmit={(e) => login(e)} className="mt-6  mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="mt-6">
              Sign In
            </Button>
          </div>
        </form>
      </div>
      {/* <div className="w-2/5 h-full hidden lg:block">
        <img src="/img/pattern.png" className="h-full w-full object-cover rounded-3xl" />
      </div> */}
    </div>
  );
}

export default SignIn;
