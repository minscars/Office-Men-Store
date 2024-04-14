import React, { useState, useEffect } from 'react';
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
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import orderApi from '@/api/orderApi';
import { StepStatus } from '@/components/StepStatus';
import moment from 'moment';
export function OdersDetails() {
  const { id } = useParams();
  const [orderDetail, setOrderDetail] = useState([]);
  const [trigger, setTrigger] = useState();

  useEffect(() => {
    const orderDetail = async () => {
      const data = await orderApi.GetOrderDetail(id);
      setOrderDetail(data.data);
    };
    orderDetail();
  }, [trigger]);

  const TABLE_HEAD = ['Items', 'Price', 'Subtotal'];
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
        <Card className=" mb-3 mx-0 h-100 overflow-hidden xl:col-span-3 border border-blue-gray-100 shadow-sm mr-5">
          <CardHeader floated={false} shadow={false} color="transparent" className="">
            <div className="flex items-center border-b broder-blue-gray-500">
              <Typography variant="h4" color="blue-gray" className="mb-2 mt-2">
                {' '}
                Order # {orderDetail?.code}{' '}
              </Typography>
              {orderDetail?.orderStatus === 'Pending' && (
                <div className="flex">
                  <Chip
                    variant="ghost"
                    size="sm"
                    value={orderDetail?.orderStatus}
                    color={'yellow'}
                    className="ml-5 !w-fit"
                  />
                  <CalendarDaysIcon className="ml-5 h-5 w-5" />
                  <Typography variant="small" className=" font-normal text-blue-gray-600 ml-3">
                    {orderDetail?.orderTime != null
                      ? moment(orderDetail?.orderTime).format('DD/MM/YYYY HH:mm A')
                      : '......'}
                  </Typography>
                </div>
              )}
              {orderDetail?.orderStatus === 'Approve' && (
                <div className="flex">
                  <Chip
                    variant="ghost"
                    size="sm"
                    value={orderDetail?.orderStatus}
                    color={'red'}
                    className="ml-5 !w-fit"
                  />
                  <CalendarDaysIcon className="ml-5 h-5 w-5" />
                  <Typography variant="small" className=" font-normal text-blue-gray-600 ml-3">
                    {orderDetail?.approveTime != null
                      ? moment(orderDetail?.approveTime).format('DD/MM/YYYY HH:mm A')
                      : '......'}
                  </Typography>
                </div>
              )}
              {orderDetail?.orderStatus === 'Delivering' && (
                <div className="flex">
                  <Chip
                    variant="ghost"
                    size="sm"
                    value={orderDetail?.orderStatus}
                    color={'blue'}
                    className="ml-5 !w-fit"
                  />
                  <CalendarDaysIcon className="ml-5 h-5 w-5" />
                  <Typography variant="small" className=" font-normal text-blue-gray-600 ml-3">
                    {orderDetail?.startDeliveryTime != null
                      ? moment(orderDetail?.startDeliveryTime).format('DD/MM/YYYY HH:mm A')
                      : '......'}
                  </Typography>
                </div>
              )}
              {orderDetail?.orderStatus === 'Delivered' && (
                <div className="flex">
                  <Chip
                    variant="ghost"
                    size="sm"
                    value={orderDetail?.orderStatus}
                    color={'green'}
                    className="ml-5 !w-fit"
                  />
                  <CalendarDaysIcon className="ml-5 h-5 w-5" />
                  <Typography variant="small" className=" font-normal text-blue-gray-600 ml-3">
                    {orderDetail?.endDeliveryTime != null
                      ? moment(orderDetail?.endDeliveryTime).format('DD/MM/YYYY HH:mm A')
                      : '......'}
                  </Typography>
                </div>
              )}
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2  ">
            {/* items */}
            <div className="relative overflow-x-auto broder sm:rounded-lg">
              <table className="mt-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="hover:bg-gray-100 transition-colors ">
                    {TABLE_HEAD.map((head) => (
                      <th scope="col" key={head} className="pl-4 py-3 0  text-left bg-blue-gray-50/50">
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
                  {orderDetail?.listItemOrderDetails?.map((item) => {
                    return (
                      <tr key={item.id} className="hover:bg-gray-100 transition-colors group">
                        <td>
                          <div className="flex gap-4">
                            <img src={item.productImage} alt="" className="w-[100px] p-2 rounded-lg" />
                            <div>
                              <Typography variant="small" color="blue-gray" className="mt-4 font-bold items-start">
                                {item.productName}
                              </Typography>
                              <div className="font-normal text-sm not-italic text-gray-600">
                                {item.sizeName} x {item.quantity}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="flex items-center gap-4">
                            <div>
                              <Typography variant="small" color="blue-gray" className="pl-4 font-normal">
                                {new Intl.NumberFormat('vi-VN', {
                                  style: 'currency',
                                  currency: 'VND',
                                }).format(item.price)}
                              </Typography>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="flex items-center gap-4">
                            <div>
                              <Typography variant="small" color="blue-gray" className="pl-4 font-normal">
                                {new Intl.NumberFormat('vi-VN', {
                                  style: 'currency',
                                  currency: 'VND',
                                }).format(item.subtotal)}
                              </Typography>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className=" mr-10 grid grid-cols-1 xl:grid-cols-2 ">
              <div className="xl:col-span-2 ml-auto items-end mr-5">
                <div className="flex-col gap-5 border-b-2 broder-blue-gray-500">
                  <Typography
                    as="span"
                    variant="small"
                    className="text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
                  >
                    <p className="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Shipping:</p>
                    <p className="text-base leading-4 text-blue-gray-900 dark:text-gray-400">---</p>
                  </Typography>
                  <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mt-3 mb-5">
                    <p className="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Discount:</p>
                    <p className="text-base leading-4 text-blue-gray-900 dark:text-gray-400">---</p>
                  </Typography>
                  <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mb-3">
                    <p className="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Payment:</p>
                    <p className="text-base font-bold leading-4 text-blue-gray-900 dark:text-gray-400">
                      {orderDetail.payStatus}
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
                    }).format(orderDetail.total)}
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="mb-3 h-[250px] mx-0 xl:col-span-3 border border-blue-gray-100 shadow-sm mr-5">
          <CardHeader floated={false} shadow={false} color="transparent" className="">
            <div className="flex items-center border-b broder-blue-gray-500">
              <Typography variant="h6" color="blue-gray" className="mb-1 mt-5 ml-5">
                Order Status
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="px-0 pt-0 pb-2">
            <StepStatus data={orderDetail} setTrigger={setTrigger} />
          </CardBody>
        </Card>
      </div>
      <div className="xl:col-span-1">
        {/* the chi tiet don hang*/}
        <Card className=" xl:col-span-1 border border-blue-gray-100 shadow-sm">
          <Typography variant="h6" color="blue-gray" className="mb-1 mt-5 ml-5">
            Customer detail
          </Typography>
          <div className="flex">
            <Avatar className="mt-3 ml-5" src={orderDetail.customerAvatar} alt="avatar"></Avatar>
            <Typography variant="h6" color="blue-gray" className="mb-1 mt-5 ml-5">
              {orderDetail.customerName}
            </Typography>
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1 mt-3  ml-5">
              Contact infor
            </Typography>

            <Typography variant="small" color="blue-gray" className="flex mb-1 mt-3  ml-5">
              <EnvelopeIcon className="h-5 w-5 text-blue-gray-900" />{' '}
              <strong className="ml-3">{orderDetail.customerEmail}</strong>
            </Typography>
            <Typography variant="small" color="blue-gray" className="flex mb-1 mt-3  ml-5">
              <PhoneIcon className="h-5 w-5 text-blue-gray-900" />{' '}
              <strong className="ml-3 text-blue-gray-900">{orderDetail.customerPhone}</strong>
            </Typography>
          </div>
          <div className="mb-4">
            <Typography variant="h6" color="blue-gray" className="mb-1 mt-3  ml-5">
              Shipping address
            </Typography>
            <Typography
              as="span"
              variant="small"
              className="flex mt-2  ml-5 mr-10 text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
            >
              <p className="text-base leading-4 text-blue-gray-800 dark:text-gray-400">{orderDetail.addressDelivery}</p>
            </Typography>
          </div>

          <div className="ml-5">
            {/* <Typography variant="h6" color="blue-gray" className=" mt-5 mb-5">
              Order status
            </Typography> */}
            {/* <Timeline className="mb-5">
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
            </Timeline> */}
          </div>
        </Card>
      </div>
    </div>
  );
}
export default OdersDetails;
