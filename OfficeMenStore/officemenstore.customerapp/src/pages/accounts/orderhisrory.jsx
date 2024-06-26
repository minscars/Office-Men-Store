import { Card, CardHeader, CardBody, Typography, Avatar, Chip, Tooltip, Progress } from '@material-tailwind/react';
import { EllipsisVerticalIcon, EyeIcon } from '@heroicons/react/24/outline';
import { authorsTableData, projectsTableData } from '@/data';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import orderApi from '@/api/orderApi';
import { jwtDecode } from 'jwt-decode';
export function MyOrder() {
  const navigate = useNavigate();
  const navigatemyoderdetail = () => {
    navigate('orderdetails/');
  };

  const [orderList, setOrderList] = useState([]);
  const token = window.localStorage.getItem('token');
  var userLogin = null;
  useEffect(() => {
    if (token != null) {
      userLogin = jwtDecode(token);
    }
    const GetOrder = async () => {
      const data = await orderApi.GetOrderByUserAccount(userLogin.id);
      setOrderList(data.data);
    };
    GetOrder();
  }, []);

  console.log(orderList);
  return (
    <div className=" mb-8 flex flex-col gap-12">
      <Card className=" xl:col-span-1 mt-0  shadow-sm ml-5 mr-5 ">
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          {orderList.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <p className="mt-20 text-xl text-gray-700">Order is empty!</p>
            </div>
          ) : (
            <table className="w-full min-w-[640px] table-auto">
              <tbody>
                {orderList.map((item) => {
                  return (
                    <div key={item.id} className="p-4 mb-4 border rounded-[5px] border-blue-gray-100 mb-4">
                      <div className="ml-4 mr-4 flex justify-between">
                        <div>
                          <Typography
                            variant="small"
                            className="flex items-center gap-1 font-normal text-blue-gray-600"
                          >
                            Order Code: <strong>{item.code}</strong>
                          </Typography>
                        </div>
                        <div className="flex">
                          <Typography
                            variant="small"
                            className="flex p-1 items-center gap-1 font-normal border-r border-blue-gray-100  text-blue-gray-600"
                          >
                            Order Status: <strong>{item.orderStatus}</strong>
                          </Typography>
                          <Typography
                            variant="small"
                            className="flex p-1 items-center gap-1 font-normal text-blue-gray-600"
                          >
                            Payment: <strong>{item.payStatus}</strong>
                          </Typography>
                        </div>
                      </div>
                      {item.listItemOrderDetails.map((row, index) => {
                        return (
                          <div key={index} className="ml-4 flex gap-4 items-center">
                            <img
                              src={row.productImage}
                              alt={row.productName}
                              className="mb-2 h-auto w-[70px]  object-cover object-top border border-gray-200"
                            />
                            <div>
                              <Typography
                                variant="h1"
                                color=""
                                className="mt-0 text-[14px] font-semibold text-blue-gray-900"
                              >
                                {row.productName}
                              </Typography>
                              {/* <div class="font-medium text-gray-400">{category}</div> */}
                              <Typography
                                variant="small"
                                className="flex items-center gap-1 font-normal text-blue-gray-600"
                              >
                                <strong>
                                  {row.sizeName} x {row.quantity}{' '}
                                </strong>
                              </Typography>
                            </div>
                          </div>
                        );
                      })}
                      <div className="items-center flex justify-between mr-4">
                        <div className="xl:col-span-2 ml-auto items-end mr-5">
                          <div className="flex-col gap-5 border-b-2 broder-blue-gray-500">
                            <Typography
                              as="span"
                              variant="small"
                              className="text-xs font-medium gap-5 text-blue-gray-500 flex items-center justify-between mt-3"
                            >
                              <p className="text-base leading-4 text-blue-gray-800 dark:text-gray-400 mr-10">Total:</p>
                              <p className="ml-10 text-base leading-4 text-blue-gray-900 dark:text-gray-400">
                                {new Intl.NumberFormat('vi-VN', {
                                  style: 'currency',
                                  currency: 'VND',
                                }).format(item.grandTotal)}
                              </p>
                            </Typography>
                            <Typography
                              as="span"
                              variant="small"
                              className="text-xs font-medium gap-5 text-blue-gray-500 flex items-center justify-between mt-3"
                            >
                              <p className="text-base leading-4 text-blue-gray-800 dark:text-gray-400 mr-4">
                                Shipping:
                              </p>
                              <p className="text-base leading-4 text-blue-gray-900 dark:text-gray-400 ml-4">
                                {' '}
                                {new Intl.NumberFormat('vi-VN', {
                                  style: 'currency',
                                  currency: 'VND',
                                }).format(item.shippingFee)}
                              </p>
                            </Typography>
                            <Typography
                              as="span"
                              variant="small"
                              className="text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
                            >
                              <p className="text-base leading-4 text-blue-gray-800 dark:text-gray-400">
                                Discount shipping:
                              </p>
                              <p className="text-base leading-4 text-blue-gray-900 dark:text-gray-400">
                                {' '}
                                {new Intl.NumberFormat('vi-VN', {
                                  style: 'currency',
                                  currency: 'VND',
                                }).format(-item.shippingDiscount)}
                              </p>
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className=" font-medium flex justify-between mt-3 mb-5"
                            >
                              <p className="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Discount:</p>
                              <p className="text-base leading-4 text-blue-gray-900 dark:text-gray-400">
                                {new Intl.NumberFormat('vi-VN', {
                                  style: 'currency',
                                  currency: 'VND',
                                }).format(-item.voucherDiscount)}
                              </p>
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className=" font-medium flex justify-between mb-3"
                            >
                              <p className="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Payment:</p>
                              <p className="text-base font-bold leading-4 text-blue-gray-900 dark:text-gray-400">
                                {item.payStatus}
                              </p>
                            </Typography>
                          </div>

                          <div className="flex items-center justify-between w-full">
                            <Typography variant="h5" color="blue-gray" className="mr-2">
                              Total:
                            </Typography>
                            <Typography variant="h5" color="blue-gray" className="p-2">
                              {new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                              }).format(item.total)}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </tbody>
            </table>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
