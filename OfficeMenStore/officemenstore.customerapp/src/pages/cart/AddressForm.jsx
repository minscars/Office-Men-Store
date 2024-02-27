import React, { useState } from 'react';
import { Typography, Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button } from '@material-tailwind/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

function AddressForm({ formData, onSubmit, handlePrev, isFirstStep }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: formData.name || '',
      address: formData.address || '',
      phone: formData.phone || '',
      email: formData.email || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required').min(4, 'Must be 4 characters or more'),
      address: Yup.string().required('Required'),
      phone: Yup.string().required('Required'),
      email: Yup.string().required('Required').email('Invalid email address'),
    }),
    onSubmit: (values) => {
      onSubmit(values); // Pass the form values to the parent component
    },
  });

  return (
    <div className=" mx-0 grid mb-4 gap-3 grid-cols-1 xl:grid-cols-5 ">
      {/* thẻ thanh toán */}
      <div className="xl:col-span-3">
        <Card className=" mt-5 mb-3 mx-0 h-100 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm mr-5 ">
          <CardBody className=" pt-0 pb-2 mt-5 mr-5 ml-5">
            <div className="w-full flex flex-col ">
              <form className="mt-2 mb-2 mx-auto max-w-screen-lg xl:w-full" onSubmit={formik.handleSubmit}>
                <div>
                  <Typography variant="h4" color="blue-gray" className="mb-1">
                    Name & Address
                  </Typography>
                </div>
                {/* name */}
                <div className="mb-4">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Full name *
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter your name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && formik.errors.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm">{formik.errors.name}</p>
                  )}
                </div>
                {/*  */}

                {/* Email */}
                <div className="mb-4 flex gap-5">
                  <div className="w-full">
                    <Typography variant="small" color="blue-gray" className="font-medium">
                      Your email
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter your email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && formik.errors.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-sm">{formik.errors.email}</p>
                    )}
                  </div>

                  <div className="w-full ml-auto">
                    <Typography variant="small" color="blue-gray" className="font-medium">
                      Your email
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter your email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && formik.errors.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-sm">{formik.errors.email}</p>
                    )}
                  </div>
                </div>
                {/*  */}

                <div className="mb-4">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Address
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter your address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && formik.errors.address}
                  />
                  {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500 text-sm">{formik.errors.address}</p>
                  )}
                </div>
                <div className="mb-4">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Phone number
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && formik.errors.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm">{formik.errors.phone}</p>
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
            <div className="flex-col gap-5 border-b border-t broder-blue-gray-500">
              <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mt-5">
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

            <div className="mt-16 flex justify-center items-center">
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

export default AddressForm;
