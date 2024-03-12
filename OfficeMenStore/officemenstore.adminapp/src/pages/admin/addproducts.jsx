import React, { useEffect } from 'react';
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
} from '@material-tailwind/react';
import { EllipsisVerticalIcon, EyeIcon } from '@heroicons/react/24/outline';
import { ordersTableData } from '@/data';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function AddProducts() {
  const navigate = useNavigate();
  const navigatemyoderdetail = () => {
    navigate('ordersdetail');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      confirmedPassword: '',
      disciption: '',
      quantily: '',
      price: '',
      size: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required').min(4, 'Must be 4 characters or more'),
      email: Yup.string()
        .required('Required')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address'),
      password: Yup.string()
        .required('Required')
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          'Password must be 7-19 characters and contain at least one letter, one number and a special character',
        ),
      confirmedPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Password must match'),
      phone: Yup.string()
        .required('Required')
        .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Must be a valid phone number'),

      quantily: Yup.string()
        .required('Required')
        .matches(/^[0-9]+$/, 'Must be a number'),

      disciption: Yup.string().required('Required'), // Validation for address field
      price: Yup.string()
        .required('Required')
        .matches(/^[0-9]+$/, 'Must be a number'),
      // Validation for address field
      size: Yup.string().required('Required'), // Validation for address field
    }),
    onSubmit: (values) => {
      toast.success('Form submitted');
      console.log(values);
    },
  });

  useEffect(() => {
    const handleChange = (event) => {
      const uploadInput = document.getElementById('upload');
      const filenameLabel = document.getElementById('filename');
      const imagePreview = document.getElementById('image-preview');

      const file = event.target.files[0];

      if (file) {
        filenameLabel.textContent = file.name;

        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreview.innerHTML = `<img src="${e.target.result}" class="max-h-48 rounded-lg mx-auto" alt="Image preview" />`;
          imagePreview.classList.remove('border-dashed', 'border-2', 'border-gray-400');
        };
        reader.readAsDataURL(file);
      } else {
        filenameLabel.textContent = '';
        imagePreview.innerHTML = `<div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">No image preview</div>`;
        imagePreview.classList.add('border-dashed', 'border-2', 'border-gray-400');
      }
    };

    const uploadInput = document.getElementById('upload');
    if (uploadInput) {
      uploadInput.addEventListener('change', handleChange);
    }

    return () => {
      if (uploadInput) {
        uploadInput.removeEventListener('change', handleChange);
      }
    };
  }, []);

  return (
    <div className="mt-12 gap-10">
      {/* avtaar */}
      <Card className="w-full bg-white xl:grid-cols-2 -mt-5 border  border-blue-gray-100 shadow-sm mb-5">
        <div className="grid  grid-cols-1 xl:grid-cols-2 h-full mr-5 mt-3 gap-20">
          {/* them hinh anh */}
          <div className=" flex-1 xl:col-span-1 mb-5 mt-0">
            <div className=" flex flex-col mt-0">
              <form className="mt-0 mb-2 mx-auto max-w-screen-lg xl:w-full ml-10" onSubmit={formik.handleSubmit}>
                <div className=""></div>
                {/* name */}
                <div className="mb-1 flex flex-col gap-6 ">
                  <Typography variant="h6" color="blue-gray" className="-mb-4  mt-5">
                    Product name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter your name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                  {formik.errors.name && (
                    <p className="font-[0.75rem] w-full text-red-500 -mt-4"> {formik.errors.name} </p>
                  )}
                </div>
                {/* Disciption */}
                <div className="mb-1 flex flex-col gap-6 mt-5">
                  <Typography variant="h6" color="blue-gray" className="-mb-4 font-medium">
                    Disciption
                  </Typography>

                  {/* <Textarea
                    size="lg"
                    // placeholder="name@mail.com"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  /> */}
                  <div class="">
                    <form>
                      <div class="mb-4 w-full bg-gray-50 rounded-lg border border-blue-gray-200 dark:bg-gray-700 dark:border-gray-600">
                        <div class="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                          <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                            <div class="flex items-center space-x-1 sm:pr-4">
                              <button
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                              <button
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                              <button
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                              <button
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                              <button
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                            <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                              <button
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                              <button
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                              <button
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                              <button
                                type="button"
                                class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                              >
                                <svg
                                  class="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <div
                            id="tooltip-fullscreen"
                            role="tooltip"
                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                          >
                            Show full screen
                            <div class="tooltip-arrow" data-popper-arrow></div>
                          </div>
                        </div>
                        <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                          <label for="editor" class="sr-only">
                            Publish post
                          </label>
                          <Textarea
                            name="disciption"
                            rows={8}
                            value={formik.values.disciption}
                            onChange={formik.handleChange}
                            class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="disciption"
                            required
                          ></Textarea>
                        </div>
                      </div>
                    </form>

                    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                  </div>

                  {formik.errors.disciption && (
                    <p className="font-[0.75rem] w-full text-red-500 -mt-4"> {formik.errors.disciption} </p>
                  )}
                </div>
                {/* Category*/}
                <div className="mb-1 flex flex-col gap-6 mt-5">
                  <Typography variant="h6 " color="blue-gray" className="-mb-4 font-medium">
                    Category
                  </Typography>
                  {/* <Input
                    size="lg"
                    placeholder="Enter your address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  /> */}
                  <Select
                    label="Category"
                    className=""
                    placeholder="Enter your address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                  >
                    <Option>So mi</Option>
                    <Option>Quan au</Option>
                    <Option>Giay tay</Option>
                  </Select>
                  {formik.errors.address && (
                    <p className="font-[0.75rem] w-full text-red-500 -mt-4"> {formik.errors.address} </p>
                  )}
                </div>
                {/*  Quantily */}
                <div className="mb-1 flex gap-6 mt-5 ">
                  <div className="w-full mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-4 font-medium">
                      Quantily
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter your phone number"
                      name="quantily"
                      value={formik.values.quantily}
                      onChange={formik.handleChange}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                    {formik.errors.quantily && (
                      <p className="font-[0.75rem] w-full text-red-500 -mt-4"> {formik.errors.quantily} </p>
                    )}
                  </div>

                  <div className="w-full mb-1 flex flex-col gap-6  ">
                    <Typography variant="h6" color="blue-gray" className="-mb-4 font-medium">
                      Option
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter your phone number"
                      name="option"
                      value={formik.values.option}
                      onChange={formik.handleChange}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                    {formik.errors.option && (
                      <p className="font-[0.75rem] w-full text-red-500 -mt-4"> {formik.errors.option} </p>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-1 flex flex-col gap-6 mt-5">
                  <Typography variant="h6" color="blue-gray" className="-mb-4 font-medium">
                    Price
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter your phone number"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                  {formik.errors.price && (
                    <p className="font-[0.75rem] w-full text-red-500 -mt-4"> {formik.errors.price} </p>
                  )}
                </div>

                <div className="mt-7"></div>
              </form>
            </div>
          </div>

          {/* theem hinh anh */}
          <div className=" flex-1 xl:col-span-1 mb-5">
            {/* add image */}
            <Typography variant="h6" color="blue-gray" className="mb-1 ml-5 mt-5">
              Add image
            </Typography>
            <section class="container w-full mx-auto items-center">
              <div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden items-center">
                <div class="px-4 py-6">
                  <div
                    id="image-preview"
                    class="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
                  >
                    <input id="upload" type="file" class="hidden" accept="image/*" />
                    <label for="upload" class="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-8 h-8 text-gray-700 mx-auto mb-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
                      <p class="font-normal text-sm text-gray-400 md:px-6">
                        Choose photo size should be less than <b class="text-gray-600">2mb</b>
                      </p>
                      <p class="font-normal text-sm text-gray-400 md:px-6">
                        and should be in <b class="text-gray-600">JPG, PNG, or GIF</b> format.
                      </p>
                      <span id="filename" class="text-gray-500 bg-gray-200 z-50"></span>
                    </label>
                  </div>
                </div>
              </div>
            </section>
            <div class="mb-5">
              {/* <div class="mb-8">
                <input type="file" name="file" id="file" class="sr-only" />
                <label
                  for="file"
                  class=" mx-5  flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span class="mb-2 block text-xl font-semibold text-[#07074D]">Drop files here</span>
                    <span class="mb-2 block text-base font-medium text-[#6B7280]">Or</span>
                    <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div> */}
            </div>
            <div>
              <Button className="flex items-center gap-3">Add products</Button>
            </div>
          </div>
          {/*  */}
        </div>
      </Card>

      {/* mật khẩu */}

      {/*  */}
    </div>
  );
}
export default AddProducts;
