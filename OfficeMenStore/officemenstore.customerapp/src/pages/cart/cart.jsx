import React from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Avatar,
  Tooltip,
  Progress,
  input,
} from '@material-tailwind/react';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/solid';
import { EllipsisVerticalIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../redux/slicse/cartSlice';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import cartItemApi from '@/api/cartItemApi';
import userApi from '@/api/userApi';
import Swal from 'sweetalert2';
import Alert from '@/components/alert';
import ProductCartWidget from '@/pages/product/product-cart-widget';
export function Cart() {
  const icon = {
    className: 'w-5 h-5 text-inherit',
  };
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  const [cartItemList, setCartItemList] = useState([]);
  const [trigger, setTrigger] = useState();
  const token = window.localStorage.getItem('token');
  const [user, setUser] = useState();
  var userLogin = null;
  useEffect(() => {
    if (token != null) {
      userLogin = jwtDecode(token);
    }
    const GetCartItem = async () => {
      const data = await cartItemApi.GetCartItemByUser(userLogin.id);
      setCartItemList(data.data);
    };
    GetCartItem();

    const getUser = async () => {
      const data = await userApi.GetUserInformation(userLogin.id);
      setUser(data);
    };
    getUser();
  }, [trigger]);
  async function handleDec(e) {
    var productId = e.productId;
    var sizeId = e.sizeId;
    var quantity = e.quantity - 1;
    var cartId = user?.cartId;
    var dto = { productId, sizeId, quantity, cartId };
    await cartItemApi.UpdateAmount(dto).then((res) => {
      if (res.statusCode === 200) {
        setTrigger(Math.random() + 1)
          ?.toString(36)
          .substring(7);
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    });
  }

  async function handleInc(e) {
    var productId = e.productId;
    var sizeId = e.sizeId;
    var quantity = e.quantity + 1;
    var cartId = user?.cartId;
    var dto = { productId, sizeId, quantity, cartId };
    await cartItemApi.UpdateAmount(dto).then((res) => {
      if (res.statusCode === 200) {
        setTrigger(Math.random() + 1)
          ?.toString(36)
          .substring(7);
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    });
  }
  const checkLoggedIn = async (event) => {
    const token = window.localStorage.getItem('token');
    if (token != null && cartItemList.cartItemList.length != 0) {
      navigate('/user/cart/checkout');
    } else {
      if (cartItemList.cartItemList.length == 0) {
        toast.error('Cart is empty!');
      } else {
        toast.error('Sign in please!');
      }
    }
  };

  console.log(cartItemList);
  console.log('cartItems', cartItems);

  async function deleteCartItem(e) {
    var productId = e.productId;
    var sizeId = e.sizeId;
    var cartId = user?.cartId;
    var dto = { productId, sizeId, cartId };
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await cartItemApi.DeleteCartItem(dto).then((res) => {
          if (res.statusCode === 200) {
            setTrigger(Math.random() + 1)
              ?.toString(36)
              .substring(7);
            Alert.showSuccessAlert(res.message);
          } else {
            Alert.showErrorAlert(res.message);
          }
        });
      }
    });
  }
  return (
    <div className="mt-6 mr-3">
      <ProductCartWidget totalQuantityDb={cartItemList?.totalItems} totalQuantityLocal={totalQuantity} />
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-4">
          {cartItemList?.cartItemList?.length === 0 && cartItems?.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <p className="mt-[300px] text-xl text-gray-700">Cart is empty!</p>
            </div>
          ) : (
            <Card className="overflow-hidden  xl:col-span-2 border border-blue-gray-100 shadow-sm">
              <CardBody className="overflow-x-scroll h-[500px] px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {['Items', 'Price', 'Quatily', 'Sub Total'].map((el) => (
                        <th key={el} className="border-b border-blue-gray-50 py-3 px-6 text-left">
                          <Typography variant="small" className="text-[11px] font-medium uppercase text-blue-gray-400">
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {token
                      ? cartItemList.cartItemList?.map((item, key) => {
                          const className = `py-3 px-5 ${
                            key === cartItems.length - 1 ? '' : 'border-b border-blue-gray-50'
                          }`;
                          return (
                            <tr key={key} className={className}>
                              {/* teen */}
                              <td className={className}>
                                <div className="flex items-center gap-4">
                                  <img
                                    src={item.productImage}
                                    alt={item.productName}
                                    className="h-20 w-20 object-cover rounded-lg"
                                  />
                                  <div className="flex flex-col justify-between ml-4 flex-grow gap-[2px]">
                                    <span className="font-bold text-sm text-black text-[25px] ">
                                      {item.productName}
                                    </span>
                                    <Typography
                                      variant="small"
                                      className="flex items-center gap-1 font-normal text-blue-gray-600"
                                    >
                                      Size: <strong>{item.sizeName}</strong>
                                    </Typography>
                                    <Typography
                                      variant="small"
                                      className="flex items-center gap-1 font-normal text-blue-gray-600"
                                    >
                                      Quantity: <strong>{item.quantity}</strong>
                                    </Typography>
                                  </div>
                                </div>
                              </td>
                              {/* gia */}
                              <td>
                                <Typography variant="h6" color="blue-gray" className="mb-1 ml-5">
                                  {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                  }).format(item.price)}
                                </Typography>
                              </td>
                              {/* tang giam so luong */}
                              <td>
                                <div className="mb-1 ml-4">
                                  <form class="max-w-xs mx-auto">
                                    <div class="relative flex items-center">
                                      <button
                                        type="button"
                                        id="decrement-button"
                                        data-input-counter-decrement="counter-input"
                                        class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                      >
                                        <svg
                                          class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 2"
                                          onClick={(e) =>
                                            handleDec({
                                              productId: item.productId,
                                              sizeId: item.sizeId,
                                              quantity: item.quantity,
                                            })
                                          }
                                        >
                                          <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 1h16"
                                          />
                                        </svg>
                                      </button>
                                      <input
                                        type="number"
                                        id="counter-input"
                                        data-input-counter
                                        class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                        value={item.quantity}
                                      />
                                      <button
                                        type="button"
                                        id="increment-button"
                                        data-input-counter-increment="counter-input"
                                        class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                      >
                                        <svg
                                          class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 18"
                                          onClick={(e) =>
                                            handleInc({
                                              productId: item.productId,
                                              sizeId: item.sizeId,
                                              quantity: item.quantity,
                                            })
                                          }
                                        >
                                          <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </td>
                              {/* tong gia tri */}
                              <td className="flex-col items-center mr-4">
                                <Typography variant="h6" color="blue-gray" className="mb-1 ml-5">
                                  {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                  }).format(item.subtotal)}
                                </Typography>
                              </td>
                              <div className="flex items-center mt-10 cursor-pointer">
                                <TrashIcon
                                  onClick={(e) =>
                                    deleteCartItem({
                                      productId: item.productId,
                                      sizeId: item.sizeId,
                                    })
                                  }
                                  className=""
                                  color="red"
                                  {...icon}
                                />
                              </div>
                              {/* Add other columns as needed */}
                            </tr>
                          );
                        })
                      : cartItems?.map(({ imgUrl, quantity, productsName, members, price, id, size }, key) => {
                          const className = `py-3 px-5 ${
                            key === cartItems.length - 1 ? '' : 'border-b border-blue-gray-50'
                          }`;
                          return (
                            <tr key={key} className={className}>
                              {/* teen */}
                              <td className={className}>
                                <div className="flex items-center gap-4">
                                  <img src={imgUrl} alt={className} className="h-20 w-20 object-cover rounded-lg" />
                                  <div className="flex flex-col justify-between ml-4 flex-grow gap-[2px]">
                                    <span className="font-bold text-sm text-black text-[25px] ">{productsName}</span>
                                    <Typography
                                      variant="small"
                                      className="flex items-center gap-1 font-normal text-blue-gray-600"
                                    >
                                      Size: <strong>{size}</strong>
                                    </Typography>
                                    <Typography
                                      variant="small"
                                      className="flex items-center gap-1 font-normal text-blue-gray-600"
                                    >
                                      Quantity: <strong>{quantity}</strong>
                                    </Typography>
                                    {/* <span className="text-red-500 text-xs capitalize text-[15px]">{cart?.category}</span> */}
                                    <div
                                      className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                                      onClick={() => deleteProduct(id, size)}
                                    >
                                      Remove
                                    </div>
                                  </div>
                                </div>
                              </td>
                              {/* gia */}
                              <td>
                                <Typography variant="h6" color="blue-gray" className="mb-1 ml-5">
                                  {price}
                                </Typography>
                              </td>
                              {/* tang giam so luong */}
                              <td>
                                <div className="mb-1 ml-4">
                                  <form class="max-w-xs mx-auto">
                                    <div class="relative flex items-center">
                                      <button
                                        type="button"
                                        id="decrement-button"
                                        data-input-counter-decrement="counter-input"
                                        class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                      >
                                        <svg
                                          class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 2"
                                          onClick={() => handleDec(id, size)}
                                        >
                                          <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 1h16"
                                          />
                                        </svg>
                                      </button>
                                      <input
                                        type="text"
                                        id="counter-input"
                                        data-input-counter
                                        class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                        placeholder=""
                                        value={quantity}
                                        required
                                      />
                                      <button
                                        type="button"
                                        id="increment-button"
                                        data-input-counter-increment="counter-input"
                                        class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                      >
                                        <svg
                                          class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 18"
                                          onClick={() => handleInc(id, size)}
                                        >
                                          <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 1v16M1 9h16"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </td>
                              {/* tong gia tri */}
                              <td className="flex-col items-center mr-4">
                                <Typography variant="h6" color="blue-gray" className="mb-1 ml-5">
                                  {price * quantity}
                                </Typography>
                              </td>
                              {/* Add other columns as needed */}
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
              </CardBody>
              <div>
                <div className="float-right flex items-center mr-20">
                  <p className="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400">TOTAL: </p>
                  <p className="ml-8 text-base font-semibold leading-4 text-gray-700 dark:text-gray-400">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    }).format(cartItemList.total)}
                  </p>
                </div>
              </div>
              <CardFooter className="pt-1 px-0">
                <div className="flex mr-4 mt-4 float-right">
                  <Link to={`/user/product`}>
                    <Button className="items-center flex mr-4 bg-orange-500 border-blue-gray-100 py-4 px-10 border text-center text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                      <ShoppingCartIcon {...icon} />
                      <p className="ml-2">Go on Buying</p>
                    </Button>
                  </Link>
                  <Button
                    ripple={false}
                    fullWidth={false}
                    onClick={checkLoggedIn}
                    className="py-4 px-10 text-center bg-blue-900 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Check out
                  </Button>
                </div>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
