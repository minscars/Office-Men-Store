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
  return (
    <div className=" mb-8 flex flex-col gap-12">
      <Card className=" xl:col-span-1 mt-0  shadow-sm ml-5 mr-5 ">
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <tbody>
              {orderList.map((item) => {
                return (
                  <div key={item.id} className="p-4 mb-4 border rounded-[5px] border-blue-gray-100 mb-4">
                    <div className="ml-4 mr-4 flex justify-between">
                      <div>
                        <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600">
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
                      <div></div>
                      <Typography
                        variant="small"
                        className="ml-2 flex items-center gap-1 font-normal text-blue-gray-600"
                      >
                        <p className="text-base font-semibold leading-4 text-gray-800 dark:text-gray-400">Total: </p>
                        <strong>
                          {new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                          }).format(item.total)}
                        </strong>
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
