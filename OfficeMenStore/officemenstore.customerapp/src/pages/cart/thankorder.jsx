import React from 'react';
import {Typography, Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button } from '@material-tailwind/react';
import { ArrowLongLeftIcon  } from '@heroicons/react/24/outline';

function Thankorder({ formData, onSubmit, handlePrev, isFirstStep }) {
  return (
    <div className="xl:col-span-3">
    <Card className="mt-5 mb-3 mx-0 h-100 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm mr-5 ">
      <CardBody className=" px-0 pt-0 pb-2 mt-5">
      <Typography variant="h1" color="blue-gray" className="ml-5">
          {' '}
         Thank you for placing your order!
        </Typography>

        <Typography variant="h5" color="blue-gray" className="mt-10 ml-5 ">
          {' '}
        Order number: 012346
        </Typography>

        <Typography variant="h5" color="blue-gray" className="mt-5 ml-5 ">
          {' '}
          <p class="max-w-md mb-8 text-gray-700">envdsnoijrefvmdomerpfmdzpomrelmzfdbopmvrg</p>
        </Typography>
      <div className="mt-16 flex items-center">
      <Button
      className="ml-5"
      size='md'
      onClick={handlePrev}>
      <ArrowLongLeftIcon/>Prev
      </Button>
        
      </div>
      </CardBody>
    </Card>
  </div>
   
  );
}

export default Thankorder;
