import React, { useEffect, useState, useRef } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Select,
  Option,
  Button,
  Input,
  Textarea,
  img,
} from '@material-tailwind/react';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DateTimeRangePicker } from '@mui/x-date-pickers-pro/DateTimeRangePicker';
import Swal from 'sweetalert2';
import Alert from '@/components/alert';
import orderApi from '@/api/orderApi';
import promotionApi from '@/api/promotionApi';

export function AddPromotion() {
  const [valuePromoType, setvaluePromoType] = useState('6052d868-af98-4327-91e2-080bf9b1c192');
  const [valueCode, setvalueCode] = useState('');
  const [valueDescription, setvalueDescription] = useState('');
  const [valueDiscount, setValueDiscount] = useState();
  const [leastValueConditionValue, setleastValueCondition] = useState();
  const [imageUploadFile, setImageUploadFile] = useState(null);
  const [valueDate, setValueDate] = useState([dayjs(), dayjs()]);

  const promoType = [
    { name: 'Voucher', id: '6052d868-af98-4327-91e2-080bf9b1c192' },
    { name: 'Shipping fee', id: 'c5f71742-8892-40ac-a81f-f7c413bdc6e2' },
  ];

  async function handleUpdateProduct() {
    var code = valueCode;
    var promotionTypeId = valuePromoType;
    var description = valueDescription;
    var startDate = valueDate[0];
    var endDate = valueDate[1];
    var leastValueCondition = leastValueConditionValue;
    var discount = valueDiscount;
    var dto = { code, promotionTypeId, description, startDate, endDate, leastValueCondition, discount };
    console.log(dto);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to create this promotion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I want it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await promotionApi.AddPromotion(dto).then((res) => {
          if (res.statusCode === 200) {
            Alert.showSuccessAlert(res.message);
          } else {
            Alert.showErrorAlert(res.message);
          }
        });
      }
    });
  }

  return (
    <div className="mt-5 gap-10 flex justify-center">
      {/* avtaar */}
      <Card className="w-full bg-white xl:grid-cols-2 -mt-5 border  border-blue-gray-100 shadow-sm mb-5">
        <div className="grid  grid-cols-1 xl:grid-cols-2 h-full mr-5 mt-3 gap-20">
          {/* them hinh anh */}
          <div className=" flex-1 xl:col-span-1 mt-0">
            <div className=" flex flex-col mt-0">
              <form className="mt-0 mb-2 mx-auto max-w-screen-lg xl:w-full ml-10">
                <div className=""></div>
                {/* name */}
                <div className="mb-1 flex flex-col gap-2 ">
                  <Typography variant="h6" color="blue-gray" className="mt-2">
                    Code
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter code..."
                    name="name"
                    value={valueCode}
                    onChange={(event) => setvalueCode(event.target.value)}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>

                {/* Category*/}
                <div className="mb-1 flex flex-col gap-2 mt-5">
                  <Typography variant="h6 " color="blue-gray" className="font-medium">
                    Promotion type
                  </Typography>

                  <select
                    label="Category"
                    className="p-3 border-2 rounded-[5px] !border-t-blue-gray-200 focus:!border-t-gray-900"
                    value={valuePromoType}
                    onChange={(event) => setvaluePromoType(event.target.value)}
                  >
                    {promoType?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Price */}
                <div className="mb-1 flex flex-col gap-6 mt-5">
                  <Typography variant="h6" color="blue-gray" className="-mb-4 font-medium">
                    Description
                  </Typography>
                  <Textarea
                    size="lg"
                    placeholder="Enter description"
                    name="price"
                    value={valueDescription}
                    onChange={(event) => setvalueDescription(event.target.value)}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-6 mt-5">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimeRangePicker', 'DateTimeRangePicker']}>
                      <Typography variant="h6" color="blue-gray" className="-mb-4 font-medium">
                        Set the effective date
                      </Typography>
                      <DemoItem component="DateTimeRangePicker">
                        <DateTimeRangePicker value={valueDate} onChange={(newValue) => setValueDate(newValue)} />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div className="mb-1 flex flex-col gap-6 mt-5">
                  <Typography variant="h6" color="blue-gray" className="-mb-4 font-medium">
                    Least Value Condition
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter Least Value Condition"
                    name="price"
                    value={leastValueConditionValue}
                    onChange={(event) => setleastValueCondition(event.target.value)}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
                {/* <div className="mb-1 flex flex-col gap-6 mt-5">
                    <Typography variant="h6" color="blue-gray" className="-mb-4 font-medium">
                      Max discount
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter Least Value Condition"
                      name="price"
                      value={valueDescription}
                      onChange={(event) => setvalueDescription(event.target.value)}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                  </div> */}
                <div className="mb-1 flex flex-col gap-6 mt-5">
                  <Typography variant="h6" color="blue-gray" className="-mb-4 font-medium">
                    Discount
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter Least Value Condition"
                    name="price"
                    value={valueDiscount}
                    onChange={(event) => setValueDiscount(event.target.value)}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex justify-center mb-5">
          <Button className="flex bg-black items-center gap-3" onClick={handleUpdateProduct}>
            Add
          </Button>
        </div>
      </Card>

      {/* mật khẩu */}

      {/*  */}
    </div>
  );
}
export default AddPromotion;
