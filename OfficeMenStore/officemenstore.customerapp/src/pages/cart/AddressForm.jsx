import React, { useState } from 'react';
import {Typography, Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button } from '@material-tailwind/react';
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
  <div className=" mx-0 grid mb-4 gap-0 grid-cols-1 xl:grid-cols-3 ">
  {/* thẻ thanh toán */}
 
  <div className="xl:col-span-2">
    <Card className=" mt-5 mb-3 mx-0 h-100 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm mr-5 ">
      <CardBody className=" px-0 pt-0 pb-2 mt-5">
        <div className="w-full flex flex-col">
        <form className="mt-2 mb-2 mx-auto max-w-screen-lg xl:w-3/4 ml-10" onSubmit={formik.handleSubmit}>
      <div>
        <Typography variant="h4" color="blue-gray" className="mb-1">
          Name & Address
        </Typography>
      </div>
      <div className="mb-4">
        <Typography variant="small" color="blue-gray" className="font-medium">
          Your name
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
      <div className="mb-4">
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
      <div className="mt-16 flex justify-between">
      <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={formik.handleSubmit} disabled={!formik.isValid}>
          Next
        </Button>
      </div>
    </form>
        </div>
      </CardBody>
    </Card>
  </div>

  {/* odersumet
   */}
  <div>
    {/* the avatar */}
    <Card className=" xl:col-span-1 mt-5 border border-blue-gray-100 shadow-sm">
      <CardHeader floated={false} shadow={false} color="transparent" className="m-0 p-6">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {' '}
          Order Summary
        </Typography>
        <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600">
          {/* <ArrowUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-green-500" /> */}
          <strong>{cartItems.length}</strong> Items
        </Typography>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="flex-col gap-5">
          <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mt-3">
            <p class="text-base leading-4 text-gray-800 dark:text-gray-400">Subtotal</p>
            <p class="text-base leading-4 text-gray-600 dark:text-gray-400">{totalAmount?.toFixed(2)}$</p>
          </Typography>
          <Typography
            as="span"
            variant="small"
            className="text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
          >
            <p class="text-base leading-4 text-gray-800 dark:text-gray-400">Shipping</p>
            <p class="text-base leading-4 text-gray-600 dark:text-gray-400">Free</p>
          </Typography>
          <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mt-3">
            <p class="text-base leading-4 text-gray-800 dark:text-gray-400">Discount</p>
            <p class="text-base leading-4 text-gray-600 dark:text-gray-400">10%</p>
          </Typography>
        </div>
        <div class="flex items-center justify-between w-full mt-10 ">
          <Typography variant="h5" color="blue-gray" className="mb-1">
            Total
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-1">
            {(totalAmount - totalAmount * 0.1).toFixed(2)}$
          </Typography>
        </div>
        {/* san pham */}
        <div className="mt-2">
          <tbody>
            {cartItems?.map(({ imgUrl, quantity, productsName, members, price, id, size }, key) => {
              const className = ` py-3 border-t-w-{15px} border-b ${
                key === cartItems.length - 1 ? '' : 'border-b-2 border-gray-300 border-t-2 border-gray-300'
              }`;
              return (
                <tr key={key} className={className}>
                  {/* teen */}
                  <td className={className}>
                    <div className="flex items-center w-full">
                      <img src={imgUrl} alt={className} className="h-20 w-20 object-cover rounded-lg" />
                      <div className="flex flex-col justify-between ml-4 flex-grow gap-[2px]">
                        <span className="font-bold text-sm text-black text-[25px] ">{productsName}</span>
                        <Typography
                          variant="small"
                          className="flex items-center gap-1 font-normal text-blue-gray-600"
                        >
                          Size: <strong>{size}</strong>
                        </Typography>
                        <Typography
                          variant="small"
                          className="flex items-center gap-1 font-normal text-blue-gray-600"
                        >
                          quantity: <strong>{quantity}</strong>
                        </Typography>
                        {/* <span className="text-red-500 text-xs capitalize text-[15px]">{cart?.category}</span> */}
                        <div
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                          onClick={() => handleDelete(id, size)}
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </div>
      </CardBody>
      {/* <CardFooter className="pt-1 px-0">
        <Link to={'/dashboard/product'}>
          <div className="flex items-center ml-[130px]">
            <Button
              ripple={false}
              fullWidth={false}
              // onClick={() => addTocart(id)}
              class=" py-3 px-10 text-center bg-black text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Checkout
            </Button>
          </div>
        </Link>
      </CardFooter> */}
    </Card>
  </div>
</div>
  
   
  );
}

export default AddressForm;
