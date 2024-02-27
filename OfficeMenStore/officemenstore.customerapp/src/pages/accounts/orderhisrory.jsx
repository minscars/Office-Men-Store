import { Card, CardHeader, CardBody, Typography, Avatar, Chip, Tooltip, Progress } from '@material-tailwind/react';
import { EllipsisVerticalIcon, EyeIcon } from '@heroicons/react/24/outline';
import { authorsTableData, projectsTableData } from '@/data';
import { Link, useNavigate } from 'react-router-dom';

export function MyOrder() {
  const navigate = useNavigate();
  const navigatemyoderdetail = () => {
    navigate('orderdetails/');
  };
  return (
    <div className="mt-5 mb-8 flex flex-col gap-12">
      <Card className=" xl:col-span-1 mt-0 border border-blue-gray-100 shadow-sm ml-5 mr-5 ">
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Order history
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {['Order NO.', 'Date', 'Items', 'Total amount', 'status', 'Action'].map((el) => (
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
              {authorsTableData.map(({ id, date, items, total, online }, key) => {
                const className = `p-4 py-4 px-10 ${
                  key === authorsTableData.length - 1 ? '' : 'border-b border-blue-gray-50'
                }`;

                return (
                  <tr key={id}>
                    <td className={className}>
                      {/* order no. */}
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography variant="small" color="blue-gray" className="font-semibold">
                            {id}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    {/* date*/}
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">{date}</Typography>
                    </td>
                    {/* Items*/}
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">{items}</Typography>
                    </td>
                    {/* total*/}
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">{total}</Typography>
                    </td>
                    {/* status */}
                    <td className={className}>
                      <Chip
                        variant="gradient"
                        color={online ? 'green' : 'blue-gray'}
                        value={online ? 'online' : 'offline'}
                        className="py-0.5 px-2 text-[11px] font-medium w-fit"
                      />
                    </td>

                    <td className={className}>
                      <Typography as="a" href="#" className="text-xs font-semibold text-blue-gray-600">
                        <EyeIcon onClick={navigatemyoderdetail} className="w-5 h-5" />
                      </Typography>
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
