import React from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Tooltip,
  Progress,
  input,
} from '@material-tailwind/react';
import { EllipsisVerticalIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { StatisticsCard } from '@/widgets/cards';
import { StatisticsChart } from '@/widgets/charts';
import { statisticsCardsData, statisticsChartsData, projectsTableData, ordersOverviewData } from '@/data';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';

import { cartActions } from '../../redux/slicse/cartSlice';

export function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log('cart', cartItems);

  const handleDec = (id, size) => {
    // Dispatch action giảm số lượng sản phẩm
    dispatch(cartActions.decreaseQuantity({ id, size }));
    console.log(size, id);
  };

  const handleInc = (id, size) => {
    // Dispatch action tăng số lượng sản phẩm
    dispatch(cartActions.increaseQuantity({ id, size }));
    console.log(cartActions.increaseQuantity(id, size));
  };

  const dispatch = useDispatch();
  const deleteProduct = (id) => {
    dispatch(cartActions.deleteItem(id));
  };
  console.log(deleteProduct);

  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className=" xl:col-span-2">
          <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 flex items-center justify-between p-6"
            >
              <div>
                <Typography variant="h4" color="blue-gray" className="mb-1">
                  Cart
                </Typography>
                <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600">
                  <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                  <strong>{cartItems?.length}</strong> items
                </Typography>
              </div>
              <Menu placement="left-start">
                <MenuHandler>
                  <IconButton size="sm" variant="text" color="blue-gray">
                    <EllipsisVerticalIcon strokeWidth={3} fill="currenColor" className="h-6 w-6" />
                  </IconButton>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Action</MenuItem>
                  <MenuItem>Another Action</MenuItem>
                  <MenuItem>Something else here</MenuItem>
                </MenuList>
              </Menu>
            </CardHeader>

            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {['Items', 'Price', 'Quatily', 'Total'].map((el) => (
                      <th key={el} className="border-b border-blue-gray-50 py-3 px-6 text-left">
                        <Typography variant="small" className="text-[11px] font-medium uppercase text-blue-gray-400">
                          {el}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map(({ imgUrl, quantity, productsName, members, price, id, size }, key) => {
                    const className = `py-3 px-5 ${key === cartItems.length - 1 ? '' : 'border-b border-blue-gray-50'}`;
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
                                quantity: <strong>{quantity}</strong>
                              </Typography>
                              {/* <span className="text-red-500 text-xs capitalize text-[15px]">{cart?.category}</span> */}
                              <div
                                className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                                onClick={() => deleteProduct(id)}
                              >
                                Remove
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* gia */}
                        <td>
                          <Typography variant="h6" color="blue-gray" className="mb-1 ml-5">
                            {price}$
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
                            ${price * quantity}
                          </Typography>
                        </td>
                        {/* Add other columns as needed */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
        {/* tong gia */}
        <div className="  xl:col-span-1">
          <Card className="border border-blue-gray-100 shadow-sm w-90 h-85">
            <CardHeader floated={false} shadow={false} color="transparent" className="m-0 p-6">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {' '}
                Order Summary
              </Typography>
              <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600">
                {/* <ArrowUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-green-500" /> */}
                <strong>{cartItems.length}</strong> Items
              </Typography>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="flex-col gap-5">
                <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mt-3">
                  <p class="text-base leading-4 text-gray-800 dark:text-gray-400">Subtotal</p>
                  <p class="text-base leading-4 text-gray-600 dark:text-gray-400">{totalAmount?.toFixed(2)}$</p>
                </Typography>
                <Typography
                  as="span"
                  variant="small"
                  className="text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
                >
                  <p class="text-base leading-4 text-gray-800 dark:text-gray-400">Shipping</p>
                  <p class="text-base leading-4 text-gray-600 dark:text-gray-400">Free</p>
                </Typography>
                <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mt-3">
                  <p class="text-base leading-4 text-gray-800 dark:text-gray-400">Discount</p>
                  <p class="text-base leading-4 text-gray-600 dark:text-gray-400">10%</p>
                </Typography>
              </div>
              <div class="flex items-center justify-between w-full mt-10">
                <p class="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400">Total</p>
                <p class="text-base font-semibold leading-4 text-gray-600 dark:text-gray-400">
                  {(totalAmount - totalAmount * 0.1).toFixed(2)}$
                </p>
              </div>
            </CardBody>
            <CardFooter className="pt-1 px-0">
              <Link to={'checkout/'}>
                <div className="flex items-center ml-[130px]">
                  <Button
                    ripple={false}
                    fullWidth={false}
                    // onClick={() => addTocart(id)}
                    class=" py-3 px-10 text-center bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Checkout
                  </Button>
                </div>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cart;
