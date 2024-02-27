import React from 'react';
import { Typography, Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button } from '@material-tailwind/react';
import { ArrowLongLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

function Thankorder({ formData, onSubmit, handlePrev, isFirstStep }) {
  return (
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
  );
}

export default Thankorder;
