import React from 'react';
import {Typography, Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button } from '@material-tailwind/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

function Payment({ formData, onSubmit,handlePrev  }) {

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

  return (
    <div className="xl:col-span-2">
    <Card className=" mt-5 mb-3 mx-0 h-100 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm mr-5 ">
      <CardBody className=" px-0 pt-0 pb-2 mt-5">
        <div className="w-full flex flex-col">
        <form className="mt-2 mb-2 mx-auto max-w-screen-lg xl:w-3/4 ml-10" onSubmit={formik.handleSubmit}>
      <div>
        <Typography variant="h4" color="blue-gray" className="mb-1">
          Payment
        </Typography>
      </div>
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
      <div className="mb-4">
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
      <div className="mb-4">
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
        {formik.touched.cvv && formik.errors.cvv && <p className="text-red-500 text-sm">{formik.errors.cvv}</p>}
      </div>
      <div className="mt-16 flex justify-between">
      <Button onClick={handlePrev}>
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
    
  );
}

export default Payment;
