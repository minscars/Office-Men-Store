import React, { useState, useEffect } from 'react';
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
} from '@material-tailwind/react';
import { EllipsisVerticalIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { StatisticsCard } from '@/widgets/cards';
import { StatisticsChart } from '@/widgets/charts';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import { BanknotesIcon, UserPlusIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import { chartsConfig } from '@/configs';
import statisticApi from '@/api/statisticApi.jsx';

export function Statistic() {
  const [statistic, setStatistic] = useState(null);

  useEffect(() => {
    const GetStatisticDetail = async () => {
      const data = await statisticApi.GetStatisticDetail();
      setStatistic(data);
    };
    GetStatisticDetail();
  }, []);

  var chartData = [];
  var chartLabel = [];

  statistic?.data?.revenueResponse?.map((e) => {
    chartData.push(e.revenue);
    chartLabel.push(e.monthYear);
  });

  //console.log(chartData);
  //console.log(chartLabel);

  var revenueChart = {
    type: 'line',
    height: 220,
    series: [
      {
        name: 'Revenue',
        data: [],
      },
    ],
    options: {
      ...chartsConfig,
      colors: ['#0288d1'],
      stroke: {
        lineCap: 'round',
      },
      markers: {
        size: 5,
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: [],
      },
    },
  };

  revenueChart.series[0].data = chartData;
  revenueChart.options.xaxis.categories = chartLabel;

  return (
    <div className="mt-10">
      <div className="mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <StatisticsCard
          key={'ABC'}
          title={'Total orders'}
          value={statistic?.data?.totalOrder}
          color="gray"
          icon={React.createElement(BanknotesIcon, {
            className: 'w-6 h-6 text-white',
          })}
          footer={
            <Typography className="font-normal text-blue-gray-600">
              &nbsp;{'Until '}
              <strong className="text-blue-900">{new Date().toDateString()}</strong>
            </Typography>
          }
        />

        <StatisticsCard
          key={'ABC'}
          title={'Customer Accounts'}
          value={statistic?.data?.customerAccount}
          color="gray"
          icon={React.createElement(ArrowUpIcon, {
            className: 'w-6 h-6 text-white',
          })}
          footer={
            <Typography className="font-normal text-blue-gray-600">
              &nbsp;{'Until '}
              <strong className="text-blue-900">{new Date().toDateString()}</strong>
            </Typography>
          }
        />

        <StatisticsCard
          key={'ABC'}
          title={'Total Items'}
          value={statistic?.data?.totalItem}
          color="gray"
          icon={React.createElement(EllipsisVerticalIcon, {
            className: 'w-6 h-6 text-white',
          })}
          footer={
            <Typography className="font-normal text-blue-gray-600">
              &nbsp;{'On '}
              <strong className="text-blue-900">{new Date().toDateString()}</strong>
            </Typography>
          }
        />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-1 xl:grid-cols-1">
        <StatisticsChart
          key={'ABC'}
          color="white"
          title="Revenue chart"
          description="For six months ago"
          chart={revenueChart}
          footer={
            <Typography variant="small" className="flex items-center font-normal text-blue-gray-600">
              <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
              &nbsp;{'Until '}
              <strong className="ms-1 text-blue-900">{new Date().toDateString()}</strong>
            </Typography>
          }
        />
      </div>

      {/* <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-3 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Recent Orders
              </Typography>
              <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600">
                <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                &nbsp;{'Until '}
                <strong className="ms-1 text-blue-900">{new Date().toDateString()}</strong>
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {['ID', 'Customer Name', 'Total', 'Status'].map((el) => (
                    <th key={el} className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <Typography variant="small" className="text-[11px] font-medium uppercase text-blue-gray-400">
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr key={'id'}>
                  <td className="py-3 px-6 text-left text-xs font-medium">#123</td>
                  <td className="py-3 px-6 text-left text-xs font-medium">Nguyen Van A</td>
                  <td className="py-3 px-6 text-left text-xs font-medium">123$</td>
                  <td className="py-3 px-6 text-left text-xs font-medium">Waiting</td>
                </tr>
                <tr key={'id'}>
                  <td className="py-3 px-6 text-left text-xs font-medium">#123</td>
                  <td className="py-3 px-6 text-left text-xs font-medium">Nguyen Van A</td>
                  <td className="py-3 px-6 text-left text-xs font-medium">123$</td>
                  <td className="py-3 px-6 text-left text-xs font-medium">Waiting</td>
                </tr>
                <tr key={'id'}>
                  <td className="py-3 px-6 text-left text-xs font-medium">#123</td>
                  <td className="py-3 px-6 text-left text-xs font-medium">Nguyen Van A</td>
                  <td className="py-3 px-6 text-left text-xs font-medium">123$</td>
                  <td className="py-3 px-6 text-left text-xs font-medium">Waiting</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
}
