import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Chip,
} from '@material-tailwind/react';
import { EllipsisVerticalIcon, ArrowUpIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { StatisticsCard } from '@/widgets/cards';
import { StatisticsChart } from '@/widgets/charts';
import { statisticsCardsData, statisticsChartsData, projectsTableData, ordersOverviewData } from '@/data';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import { ProductData } from '@/data';
import DeleteModal from '../product/delete/delete';

export function Dashboard() {
  const [open, setOpen] = useState(false);

  const navigateeditproduct = () => {
    navigate('updateproduct');
  };

  function onDelete() {
    setOpen(true);
    // setUserId(userId);
  }
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: 'w-6 h-6 text-white',
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography variant="small" className="flex items-center font-normal text-blue-gray-600">
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Product list
              </Typography>
              <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600">
                <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                <strong>30 done</strong> this month
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
            <table className="mt-5 w-full  min-w-max  table-auto text-left ">
              <thead>
                <tr>
                  {['Product name', 'Category', 'price', 'Status', 'Created'].map((el) => (
                    <th
                      key={el}
                      className="border-y border-blue-gray-100 py-3 px-10 text-left bg-blue-gray-50/50 p-4 ml-4"
                    >
                      <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ProductData.map(({ id, name, category, imageUrl, price, status, createdAt }, key) => {
                  const className = `p-3 py-3 px-5 ${
                    key === ProductData.length - 1 ? '' : 'p-3 border-b border-blue-gray-50 '
                  } `;

                  return (
                    <tr key={id} className="hover:bg-gray-100 transition-colors group">
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <img
                            src={imageUrl}
                            alt=""
                            className="w-[100px] aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                          />
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-bold">
                              {name}
                            </Typography>
                            <div class="font-light text-sm not-italic	 text-gray-400">{category}</div>
                          </div>
                        </div>
                      </td>
                      {/* customername*/}
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {category}
                            </Typography>
                          </div>
                        </div>
                      </td>

                      {/*method*/}
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {price}
                            </Typography>
                          </div>
                        </div>
                      </td>

                      <td className={className}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={status ? 'con hang' : 'het hang'}
                            color={status ? 'green' : 'blue-gray'}
                          />
                        </div>
                      </td>

                      <td className={className}>
                        <span class="inline-block w-20 ">{createdAt}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>

        <Card className="border border-blue-gray-100 shadow-sm">
          <CardHeader floated={false} shadow={false} color="transparent" className="m-0 p-6">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Top Selling Products
            </Typography>
            <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600">
              <ArrowUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-green-500" />
              <strong>24%</strong> this month
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {ordersOverviewData.map(({ icon, color, title, description }, key) => (
              <div key={title} className="flex items-start gap-4 py-3">
                <div
                  className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                    key === ordersOverviewData.length - 1 ? 'after:h-0' : 'after:h-4/6'
                  }`}
                >
                  {React.createElement(icon, {
                    className: `!w-5 !h-5 ${color}`,
                  })}
                </div>
                <div>
                  <Typography variant="small" color="blue-gray" className="block font-medium">
                    {title}
                  </Typography>
                  <Typography as="span" variant="small" className="text-xs font-medium text-blue-gray-500">
                    {description}
                  </Typography>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
