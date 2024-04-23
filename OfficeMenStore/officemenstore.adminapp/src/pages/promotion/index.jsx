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

export function Promotions() {
  const TABLE_HEAD = ['Code', 'StartDate', 'EndDate', 'Description', 'Discount', 'Type', 'Action'];

  const [promotionList, setPromotionList] = useState([]);
  useEffect(() => {
    //getAllOrders();
    const getAllPromotion = async () => {
      const result = await orderApi.GetAllPromotions();
      setPromotionList(result?.data);
    };
    getAllPromotion();
  }, []);
  console.log(promotionList);
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
            <div className="mt-2 flex flex-col items-center justify-between gap-4 md:flex-row">
              <Link to={'addpromotion/'}>
                <Button className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                  </svg>
                  Add new Promotion
                </Button>
              </Link>
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
              {promotionList?.map((item) => {
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
                          {item.startDate != null ? moment(item.startDate).format('DD/MM/YYYY') : '......'}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {item.endDate != null ? moment(item.endDate).format('DD/MM/YYYY') : '......'}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        {/* <Avatar src={item.customerAvatar} alt={item.customerName} size="sm" /> */}
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {item.description}
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
                          }).format(item.discount)}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {item.promotionType}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Tooltip content="Update">
                          <IconButton variant="text">
                            <Link to={`./detail/${item.id}`}>
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
    </div>
  );
}
export default Promotions;
