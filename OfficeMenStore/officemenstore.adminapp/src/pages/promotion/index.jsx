import React, { useState, useEffect } from 'react';

import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  Option,
  Select,
  Tooltip,
  IconButton,
} from '@material-tailwind/react';

import {
  EllipsisVerticalIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import '../admin/order.css';
import orderApi from '@/api/orderApi';
import Pagination from '@/components/pagination/index.jsx';
import moment from 'moment';
import { toast } from 'react-toastify';
const dataStatus = [
  { statusValue: 1, statusName: 'Pending' },
  { statusValue: 2, statusName: 'Approve' },
  { statusValue: 5, statusName: 'Delivering' },
  { statusValue: 6, statusName: 'Delivered' },
];

export function Promotions() {
  const TABLE_HEAD = ['Code', 'CreateDate', 'Customer', 'Total price', 'Status', 'Action'];

  const [page, setOffset] = useState(0);
  const [limit] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isloaded, setIsLoaded] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    getAllOrders();
  }, [page, limit, searchText]);

  const getAllOrders = async () => {
    var dto = { page, limit };
    setIsLoaded(false);
    console.log(searchText);
    if (searchText) {
      dto.phoneNumber = searchText;
    }
    const response = await orderApi.GetAll(dto);
    setPageCount(Math.ceil(response?.totalRecord / limit));
    setOrderList(response.data);
    setIsLoaded(true);
  };

  async function handleFilter(e) {
    e.preventDefault();
    var status = e.target.value;
    var dto = { page, limit, status };
    if (e.target.value != 0) {
      const response = await orderApi.GetAll(dto);
      if (response) {
        setPageCount(Math.ceil(response.totalRecord / limit));
        setOrderList(response.data);
      } else {
        toast.error('Order is empty!');
      }
    } else {
      const response = await orderApi.GetAll(dto);
      setPageCount(Math.ceil(response.totalRecord / limit));
      setOrderList(response.data);
    }
  }

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
    setOffset(e.selected);
  };
  return (
    <div className="gap-12">
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Promotions Management
              </Typography>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center justify-between gap-4 md:flex-row"></div>
        </CardHeader>
        <CardBody className="h-[550px] overflow-scroll px-0">
          <table className=" w-full min-w-max table-auto text-left">
            <thead>
              <tr className="hover:bg-gray-100 transition-colors">
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
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
            <tbody>
              {orderList?.map((item) => {
                const classes = 'p-4 border-b border-blue-gray-50 ';

                return (
                  <tr key={item.id} className="hover:bg-gray-100 transition-colors">
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-bold">
                          {item.code}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {item.createdTime != null ? moment(item.createdTime).format('DD/MM/YYYY HH:mm A') : '......'}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={item.customerAvatar} alt={item.customerName} size="sm" />
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {item.customerName}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                          }).format(item.total)}
                        </Typography>
                      </div>
                    </td>

                    <td>
                      <div class="relative  w-40 min-w-[100px] flex">
                        {item.status === 'Pending' && (
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={item.status}
                            color={'yellow'}
                            className="ml-5 !w-auto"
                          />
                        )}
                        {item.status === 'Approve' && (
                          <Chip variant="ghost" size="sm" value={item.status} color={'red'} className="ml-5 !w-auto" />
                        )}
                        {item.status === 'Delivering' && (
                          <Chip variant="ghost" size="sm" value={item.status} color={'blue'} className="ml-5 !w-auto" />
                        )}
                        {item.status === 'Delivered' && (
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={item.status}
                            color={'green'}
                            className="ml-5 !w-auto"
                          />
                        )}
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Tooltip content="View">
                          <IconButton variant="text">
                            <Link to={`./detail/${item.orderId}`}>
                              <PencilIcon className="h-4 w-4" />
                            </Link>
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Pagination handlePageClick={handlePageClick} currentPage={currentPage} pageCount={pageCount} />
    </div>
  );
}
export default Promotions;
