import React from 'react';
import {
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

function Payment({ formData, onSubmit, handlePrev }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(cartItems);
  
  // from ddien thong tin
  const formik = useFormik({
    initialValues: {
      cardNumber: formData.cardNumber || '',
      expirationDate: formData.expirationDate || '',
      cvv: formData.cvv || '',
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string().required('Required'),
      expirationDate: Yup.string().required('Required'),
      cvv: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      onSubmit(values); // Cập nhật thông tin vào state formData của component Checkout
    },
  });

  document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          checkboxes.forEach(function (otherCheckbox) {
            if (otherCheckbox !== checkbox) {
              otherCheckbox.checked = false;
            }
          });
        }
      });
    });
  });

  return (
    <div className="mx-0 grid mb-4 gap-3 grid-cols-1 xl:grid-cols-5 ">
      <div className="xl:col-span-3">
        <Card className=" mt-5 mb-3 mx-0 h-100 overflow-hidden xl:col-span-3 border border-blue-gray-100 shadow-sm mr-5">
          <div className="mt-5 ml-5 ">
            <Typography variant="h4" color="blue-gray" className="mb-1 ml-5">
              Payment
            </Typography>
          </div>
          {/* loai thanh toan */}
          <div className="ml-10 mr-10 border-b broder-blue-gray-500 grap-10">
            <List className="flex-row">
              <ListItem className="p-0">
                <label htmlFor="horizontal-list-react" className="flex w-full cursor-pointer items-center  py-2">
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="horizontal-list-react"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: 'p-0',
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    React.js
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label htmlFor="horizontal-list-vue" className="flex w-full cursor-pointer items-center px-3 py-2">
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="horizontal-list-vue"
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: 'p-0',
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Vue.js
                  </Typography>
                </label>
              </ListItem>
            </List>
          </div>

          <CardBody className="pt-0 pb-2 mt-5 mr-5 ml-5 ">
            <div className="w-full flex flex-col ">
              <form className="mt-2 mb-2 mx-auto max-w-screen-lg xl:w-full" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Card Number
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter card number"
                    name="cardNumber"
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.cardNumber && formik.errors.cardNumber}
                  />
                  {formik.touched.cardNumber && formik.errors.cardNumber && (
                    <p className="text-red-500 text-sm">{formik.errors.cardNumber}</p>
                  )}
                </div>
                <div className="flex gap-6">
                  <div className="w-full mb-4">
                    <Typography variant="small" color="blue-gray" className="font-medium">
                      Expiration Date
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="MM/YY"
                      name="expirationDate"
                      value={formik.values.expirationDate}
                      onChange={formik.handleChange}
                      error={formik.touched.expirationDate && formik.errors.expirationDate}
                    />
                    {formik.touched.expirationDate && formik.errors.expirationDate && (
                      <p className="text-red-500 text-sm">{formik.errors.expirationDate}</p>
                    )}
                  </div>
                  <div className="w-full mb-4">
                    <Typography variant="small" color="blue-gray" className="font-medium">
                      CVV
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter CVV"
                      name="cvv"
                      value={formik.values.cvv}
                      onChange={formik.handleChange}
                      error={formik.touched.cvv && formik.errors.cvv}
                    />
                    {formik.touched.cvv && formik.errors.cvv && (
                      <p className="text-red-500 text-sm">{formik.errors.cvv}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Name On Card
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter card number"
                    name="cardNumber"
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.cardNumber && formik.errors.cardNumber}
                  />
                  {formik.touched.cardNumber && formik.errors.cardNumber && (
                    <p className="text-red-500 text-sm">{formik.errors.cardNumber}</p>
                  )}
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="xl:col-span-2">
        {/* the chi tiet don hang*/}
        <Card className=" xl:col-span-1 mt-5 border border-blue-gray-100 shadow-sm">
          <CardHeader floated={false} shadow={false} color="transparent" className="">
            <Typography variant="h4" color="blue-gray" className="mb-2 mt-2 ml-3">
              {' '}
              Order Summary
            </Typography>
            <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600 ml-3">
              {/* <ArrowUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-green-500" /> */}
              <strong>{cartItems.length}</strong> Items
            </Typography>
          </CardHeader>
          <CardBody className="pt-0 ">
            {/* items */}
            <div className="mt-2 mb-5 ">
              <tbody className="mb-5 w-full">
                {cartItems?.map(
                  ({ imgUrl, quantity, productsName, members, price, id, size, category, totalPrice }, key) => {
                    const className = `py-3  border-b broder-blue-gray-500 p-5 ${
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
                              <div class="mt-1 font-light text-sm not-italic	 text-gray-400">Size: {size}</div>
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
                          <div className="flex items-center gap-4"></div>
                        </td>

                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <div>
                              <Typography variant="small" color="blue-gray" className="font-bold items-start">
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
            </div>
            <div className="flex-col gap-5 border-b broder-blue-gray-500">
              <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mt-5 mx-5">
                <p class="text-base leading-4 text-blue-gray-400 dark:text-gray-400 ">Subtotal</p>
                <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">{totalAmount?.toFixed(2)}$</p>
              </Typography>

              <Typography
                as="span"
                variant="small"
                className="text-xs font-medium text-blue-gray-400 flex items-center justify-between mt-3 mx-5"
              >
                <p class="text-base leading-4 text-blue-gray-400 dark:text-gray-400">Shipping</p>
                <p class="text-base leading-4 text-blue-gray-400 dark:text-gray-400">Free</p>
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className=" font-medium flex justify-between mt-3 mb-5 mx-5"
              >
                <p class="text-base leading-4 text-blue-gray-400 dark:text-gray-400">Discount</p>
                <p class="text-base leading-4 text-blue-gray-400 dark:text-gray-400">10%</p>
              </Typography>
            </div>

            <div class="flex items-center justify-between w-full mt-3">
              <Typography variant="h5" color="blue-gray" className="mb-1 mx-3">
                Grand total
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                {(totalAmount - totalAmount * 0.1).toFixed(2)}$
              </Typography>
            </div>

            <div className="mt-5 flex justify-center items-center">
              {/* <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                  </Button> */}
              <Button onClick={formik.handleSubmit} disabled={!formik.isValid}>
                Coutinute to payment
              </Button>
            </div>
            {/* san pham */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Payment;
