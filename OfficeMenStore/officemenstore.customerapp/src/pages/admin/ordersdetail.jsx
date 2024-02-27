import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Select,
  Option,
  Button,
  Tooltip,
  IconButton,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from '@material-tailwind/react';
import {
  CalendarDaysIcon,
  EnvelopeIcon,
  PhoneIcon,
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import { ordersTableData } from '@/data';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export function OdersDetails() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const navigate = useNavigate();
  const navigatemyoderdetail = () => {
    navigate('/orderdetails');
  };
  const TABLE_HEAD = ['Items', 'Quanlity', 'Price', 'Toltal'];

  const now = new Date().toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="mx-0 grid mb-4 gap-3 grid-cols-1 xl:grid-cols-4">
      <div className="xl:col-span-3">
        <Card className=" mt-5 mb-3 mx-0 h-100 overflow-hidden xl:col-span-3 border border-blue-gray-100 shadow-sm mr-5">
          <CardHeader floated={false} shadow={false} color="transparent" className="">
            <div className="flex items-center border-b broder-blue-gray-500">
              <Typography variant="h4" color="blue-gray" className="mb-2 mt-2 ml-3">
                {' '}
                Order #1234656{' '}
              </Typography>
              <Chip variant="ghost" size="sm" value={'Dang giao'} color={'green'} className="ml-5" />
              <CalendarDaysIcon className="ml-5 h-5 w-5" />
              <Typography variant="small" className=" font-normal text-blue-gray-600 ml-3">
                {now}{' '}
              </Typography>
            </div>

            <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600 ml-3 ">
              {/* <ArrowUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-green-500" /> */}
              <strong className="ml-3 mt-3">Order items</strong>
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2  ">
            {/* items */}
            <div className="relative overflow-x-auto broder sm:rounded-lg">
              <table className="mt-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="hover:bg-gray-100 transition-colors ">
                    {TABLE_HEAD.map((head) => (
                      <th scope="col" key={head} className=" pl-10 py-3 0  text-left bg-blue-gray-50/50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className=" leading-none text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="mb-5 ml-5">
                  {cartItems?.map(
                    ({ imgUrl, quantity, productsName, members, price, id, size, category, totalPrice }, key) => {
                      const className = `py-3 px-10 border-b broder-blue-gray-500 p-4 ${
                        key === cartItems.length - 1 ? '' : ''
                      }`;
                      return (
                        <tr key={id} className="hover:bg-gray-100 transition-colors group">
                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <img
                                src={imgUrl}
                                alt=""
                                className="w-[100px] aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                              />
                              <div>
                                <Typography variant="small" color="blue-gray" className="font-bold items-start">
                                  {productsName}
                                </Typography>
                                <div class="font-light text-sm not-italic	 text-gray-400">Size: {size}</div>
                              </div>
                            </div>
                          </td>
                          {/* customername*/}
                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <div>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  x{quantity}
                                </Typography>
                              </div>
                            </div>
                          </td>

                          {/*method*/}
                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <div>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {price} $
                                </Typography>
                              </div>
                            </div>
                          </td>

                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <div>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {quantity * price} $
                                </Typography>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </div>

            <div className=" mr-10 mt-5 grid grid-cols-1 xl:grid-cols-2 ">
              <div className="xl:col-span-2 ml-auto items-end mr-5">
                <div className="flex-col gap-5 border-b  broder-blue-gray-500">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className=" font-medium flex justify-between gap-[100px]"
                  >
                    <p class="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Subtotal:</p>
                    <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">{totalAmount?.toFixed(2)}$</p>
                  </Typography>

                  <Typography
                    as="span"
                    variant="small"
                    className="text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
                  >
                    <p class="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Shipping:</p>
                    <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">Free</p>
                  </Typography>
                  <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mt-3 mb-5">
                    <p class="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Discount:</p>
                    <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">10%</p>
                  </Typography>
                </div>

                <div class="flex items-center justify-between w-full mt-5">
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    Total
                  </Typography>
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    {(totalAmount - totalAmount * 0.1).toFixed(2)}$
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="xl:col-span-1">
        {/* the chi tiet don hang*/}
        <Card className=" xl:col-span-1 mt-5 border border-blue-gray-100 shadow-sm">
          <Typography variant="h6" color="blue-gray" className="mb-1 mt-5 ml-5">
            Customer detail
          </Typography>
          <div className="flex">
            <Avatar className="mt-3 ml-5" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"></Avatar>
            <Typography variant="h6" color="blue-gray" className="mb-1 mt-5 ml-5">
              Nguyen Trung Nhan
            </Typography>
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1 mt-3  ml-5">
              Contact infor
            </Typography>

            <Typography variant="small" color="blue-gray" className="flex mb-1 mt-3  ml-5">
              <EnvelopeIcon className="h-5 w-5 text-blue-gray-900" />{' '}
              <strong className="ml-3">Nhan6845@gmail.com</strong>
            </Typography>
            <Typography variant="small" color="blue-gray" className="flex mb-1 mt-3  ml-5">
              <PhoneIcon className="h-5 w-5 text-blue-gray-900" />{' '}
              <strong className="ml-3 text-blue-gray-900">0123456789</strong>
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1 mt-3  ml-5">
              Shipping address
            </Typography>

            <Typography variant="small" color="blue-gray" className="flex mt-2  ml-5 mr-10 ">
              Hẻm 51, Đường 3/2, phường Hưng Lợi, quận Ninh Kiều, thành phố Cần Thơ
            </Typography>
          </div>

          <div className="ml-5">
            <Typography variant="h6" color="blue-gray" className=" mt-5 mb-5">
              Activity
            </Typography>
            <Timeline className="mb-5">
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-2">
                    <HomeIcon className="h-4 w-4" />
                  </TimelineIcon>
                  <Typography variant="h6" color="blue-gray">
                    Đơn hàng đã đặt
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography color="gary" className="font-normal text-gray-600"></Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-2">
                    <BellIcon className="h-4 w-4" />
                  </TimelineIcon>
                  <Typography variant="h6" color="blue-gray">
                    Đã giao cho ĐVVC
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography color="gary" className="font-normal text-gray-600"></Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon className="p-2">
                    <CurrencyDollarIcon className="h-4 w-4" />
                  </TimelineIcon>
                  <Typography variant="h6" color="blue-gray">
                    Đã nhận được hàng
                  </Typography>
                </TimelineHeader>
                <TimelineBody>
                  <Typography color="gary" className="font-normal text-gray-600"></Typography>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default OdersDetails;
