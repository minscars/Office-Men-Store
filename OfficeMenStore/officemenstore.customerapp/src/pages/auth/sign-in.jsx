import { Card, Input, Checkbox, Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import userApi from '@/api/userApi';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Alert from '@/components/alert';
import cartApi from '@/api/cartItemApi';
import { jwtDecode } from 'jwt-decode';
export function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // ham dang nhap
  async function login(e) {
    e.preventDefault();
    const request = { username, password };

    await userApi
      .Login(request)
      .then(async (response) => {
        if (response.statusCode === 200) {
          window.localStorage.setItem('token', response.data);
          var token = window.localStorage.getItem('token');
          const user = jwtDecode(token);
          if (user) {
            // add to cart into db when user login successfully
            const dataLocal = localStorage.getItem('cartItems');
            const cartItems = JSON.parse(dataLocal);
            const dataLogin = await userApi.GetUserInformation(user.id);
            if (cartItems && cartItems.length !== 0) {
              for (const item of cartItems) {
                const data = {
                  cartId: dataLogin?.cartId,
                  productId: item?.id,
                  sizeId: item?.sizeid,
                  quantity: item?.quantity,
                };
                console.log('data', data);
                cartApi.AddToCart(data);
                fetch('url', {
                  method: 'POST',
                  body: data,
                });
              }
            }
            window.localStorage.removeItem('cartItems');
          }

          // end
          Alert.showSuccessAlert(
            response.message,
            () => (window.location.href = user.roles === 'User' ? '/user/home' : ''),
          );
        } else {
          Alert.showErrorAlert(response.message);
        }
      })
      .catch(() => {
        Alert.showErrorAlert('Oops, something went wrong! Please contact administrator.');
      });
  }

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Sign In
          </Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your email and password to Sign In.
          </Typography>
        </div>
        <form onSubmit={(e) => login(e)} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
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
              value={username}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Sign In
          </Button>

          <div className="flex items-center justify-between gap-2 mt-6">
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">Forgot Password?</a>
            </Typography>
          </div>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Not registered?
            <Link to="/auth/sign-up" className="text-gray-900 ml-1">
              Create account
            </Link>
          </Typography>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img src="/img/pattern.png" className="h-full w-full object-cover rounded-3xl" />
      </div>
    </section>
  );
}

export default SignIn;
