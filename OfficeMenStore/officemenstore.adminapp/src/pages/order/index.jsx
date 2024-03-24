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
import { ordersTableData } from '@/data';
import { Link, useNavigate } from 'react-router-dom';
import '../admin/order.css';
import orderApi from '@/api/orderApi';
import Pagination from '@/components/pagination/index.jsx';
import moment from 'moment';

export function Oders() {
  const navigate = useNavigate();
  const navigatemyoderdetail = () => {
    navigate('ordersdetail');
  };
  const [selectedOption, setSelectedOption] = useState('danggiao'); // Trạng thái mặc định

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    updateSelectBackground(event.target.value);
  };

  const updateSelectBackground = (selectedValue) => {
    const selectElement = document.getElementById('mySelect');
    if (selectedValue === 'dangchuanbi') {
      selectElement.classList.remove('danggiao-background', 'hoanthanh-background');
      selectElement.classList.add('dangchuanbi-background');
    } else if (selectedValue === 'danggiao') {
      selectElement.classList.remove('dangchuanbi-background', 'hoanthanh-background');
      selectElement.classList.add('danggiao-background');
    } else if (selectedValue === 'hoanthanh') {
      selectElement.classList.remove('dangchuanbi-background', 'danggiao-background');
      selectElement.classList.add('hoanthanh-background');
    }
  };

  const TABLE_HEAD = ['Order ID', 'Crate', 'Customer', 'Total price', 'Status', 'Action'];

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isloaded, setIsLoaded] = useState(false);
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    getAllOrdersFromReact();
  }, [perPage, offset]);

  const getAllOrdersFromReact = async () => {
    const formData = new FormData();
    formData.append('Page', offset);
    formData.append('Limit', perPage);
    setIsLoaded(false);
    console.log(formData);
    const response = await orderApi.GetAll(formData);
    setPageCount(Math.ceil(response.totalRecord / perPage));
    setOrderList(response.data);
    setIsLoaded(true);
  };
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
                Order Management
              </Typography>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
              <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
            </div>
          </div>
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
              {orderList.map((item) => {
                const classes = 'p-4 border-b border-blue-gray-50 ';

                return (
                  <tr key={item.id} className="hover:bg-gray-100 transition-colors">
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {item.id}
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
                          {item.total}
                        </Typography>
                      </div>
                    </td>

                    <td>
                      <div class="relative h-10 w-40 min-w-[100px]">
                        <select
                          id="mySelect"
                          defaultValue={['danggiao']}
                          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          onChange={handleSelectChange}
                        >
                          <option value="dangchuanbi">Đang chuẩn bị</option>
                          <option value="danggiao">Đang giao</option>
                          <option value="hoanthanh">Hoàn thành</option>
                        </select>
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Status
                        </label>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Tooltip content="View">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" onClick={navigatemyoderdetail} />
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
export default Oders;
