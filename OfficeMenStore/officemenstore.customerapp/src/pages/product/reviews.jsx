import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { cartActions } from '../../redux/slicse/cartSlice';
import { projectsData } from '@/data';
import Rating from '@mui/material/Rating';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  Input,
  Textarea,
} from '@material-tailwind/react';
import { HomeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, PencilIcon } from '@heroicons/react/24/solid';

export function ReviewsTab() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = projectsData.find((product) => product.id === id);
  const { img, title, tag, description, price } = product;
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const [tab, setTab] = useState('desc');

  const [reviews, setReviews] = useState([
    {
      id: 1,
      message: 'Quality is good than the product',
      rating: 4,
      user: 'Rinkya Tansen',
      date: '12, SEP 2022',
      likes: 12,
      comments: 8,
    },
    {
      id: 2,
      message: 'I like the quality of the product.',
      rating: 5,
      user: 'Rinkya Tansen',
      date: '12, SEP 2022',
      likes: 12,
      comments: 8,
    },
    {
      id: 3,
      message: 'This is one of the best product.',
      rating: 4.5,
      user: 'Rinkya Tansen',
      date: '12, SEP 2022',
      likes: 12,
      comments: 8,
    },
  ]);

  const formik = useFormik({
    initialValues: {
      rating: '',
      review: '',
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Vui lòng nhập tên').min(4, 'Must be 4 characters or more'),

      email: Yup.string()
        .required('Vui lòng nhập một địa chỉ email')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Địa chỉ email không hợp lệ'),

      rating: Yup.string().required('vui lòng điền đánh giá sản phẩm'),

      review: Yup.string().required('vui lòng điền review sản phẩm'), // Validation for address field
    }),
    onSubmit: (values) => {
      console.log(values);

      const newReview = {
        id: reviews.length + 1,
        user: values.name,
        message: values.review,
        rating: values.rating,
        date: new Date().toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      };
      setReviews([...reviews, newReview]);
      toast.success('Review added successfully!');
    },
  });

  const handleTabChange = (tab) => {
    setTab(tab);
  };

  const handleSubmitReview = () => {
    const user = reviewUser.current.value;
    const message = reviewMsg.current.value;

    if (!user || !message || !rating) {
      toast.error('Please fill in all fields and provide a rating.');
      return;
    }

    const newReview = {
      id: reviews.length + 1,
      user,
      message,
      rating,
    };
    console.log('rating', newReview);

    setReviews([...reviews, newReview]);
    toast.success('Review added successfully!');
  };

  return (
    <section className="py-10 bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="px-4 py-2 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div className="grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="flex gap-5 grid-cols-1 xl:grid-cols-2">
            {/* Customer Reviews */}
            <Card className=" shadow-none -mt-8 space-y-6 xl:w-1/2 border border-blue-gray-100 rounded-md">
              {reviews.map((review) => (
                <div key={review.id} className="ml-5 mt-3 bg-white broder broder-blue-gray-900 lg:p-1">
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{/* Nội dung đánh giá */}</p>
                  <div className=" flex justify-between ">
                    <div className="flex items-start mr-5">
                      <img
                        className="object-cover w-10 h-10  rounded-full shadow lg:mb-0 "
                        src="https://i.postimg.cc/rF6G0Dh9/pexels-emmy-e-2381069.jpg"
                        alt="User Avatar"
                      />
                    </div>

                    <div className="mr-auto">
                      <div className="flex items-center">
                        <h2 className=" mb-3 mr-2 text-lg font-semibold text-gray-900 dark:text-gray-400">
                          {review.user}
                        </h2>

                        <p className=" ml-5 mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{review.date}</p>
                      </div>

                      <div className="-mt-1">
                        <Rating
                          size="small"
                          name="half-rating-read"
                          defaultValue={review.rating}
                          precision={0.5}
                          readOnly
                          className="-mt-4"
                        />
                        <h2 className=" mb-2 text-sm font-medium dark:text-gray-300">{review.message}</h2>
                      </div>

                      <div className="flex items-center">
                        <div className=" flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-4 h-4 mr-1 text-blue-400 bi bi-hand-thumbs-up-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"></path>
                            </svg>
                          </a>
                          <span>{review.likes}</span>
                        </div>
                        <div className="flex text-sm text-gray-700 dark:text-gray-400">
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="w-4 h-4 mr-1 text-blue-400 bi bi-chat"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                            </svg>
                          </a>
                          <span>{review.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Card>

            {/* tong rv */}
            <div className="xl:w-1/2 w-full">
              <Card className=" shadow-none mr-0 -mt-8 border border-blue-gray-100 rounded-md ">
                <div className="p-1 bg-white border border-gray-200 rounded-md dark:bg-gray-900 ml-0">
                  <Typography variant="h4" font="medium" className="mt-3 ml-3 mb-5 dark:text-gray-400">
                    Customer Reviews
                  </Typography>
                  <div className="mb-4 text-center">
                    <span className="inline-block text-5xl font-bold text-blue-500 dark:text-gray-300">4.5</span>
                    <span className="inline-block text-xl font-medium text-gray-700 dark:text-gray-400">/5</span>
                  </div>
                  <ul className="flex items-center justify-center mb-6">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <li key={index}>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-blue-500 dark:text-blue-400 bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 p-3">
                    Based on {reviews.length} reviews
                  </p>
                </div>
              </Card>

              {/* thêm bình luận  */}

              <Card className="shadow-none  mt-5 p-6 bg-white border border-blue-gray-100 rounded-md dark:bg-gray-900">
                <div className="flex gap-5">
                  <div className=" w-[110px]  h-[100px] bg-gray-300 border border-gray-200 rounded-md ml-0">
                    <div className="flex flex-col gap-12">
                      <img
                        className=" p-3  w-[110px]  h-[100px] rounded-lg object-cover object-center"
                        src={img}
                        alt="nature image"
                      />
                    </div>
                  </div>
                  <div>
                    <Typography variant="h4" class="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-4xl">
                      {title}
                    </Typography>
                  </div>
                </div>
              </Card>

              <Card className="shadow-none  mt-5 p-6 bg-white border border-blue-gray-100 rounded-md dark:bg-gray-900">
                <Typography variant="h4" className=" dark:text-gray-400">
                  Add a Review
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                  <div className="flex items-center justify-center ">
                    <Rating
                      type="number"
                      name="rating"
                      size="large"
                      value={formik.values.rating}
                      onChange={formik.handleChange}
                      // onChange={(event, value) => setRating(value)}
                    />
                  </div>
                  <div className="flex mt-5 justify-center">
                    {formik.errors.rating && (
                      <p className="errorMsg text-red-500 text-sm -mt-4"> {formik.errors.rating} </p>
                    )}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <div className="mb-4 w-full">
                      <Typography variant="small" color="blue-gray" className=" font-medium">
                        Your name <strong className="text-red-500 ">*</strong>
                      </Typography>
                      <Input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:border-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                      />
                      {formik.errors.name && (
                        <p className="errorMsg text-red-500 text-sm mt-2"> {formik.errors.name} </p>
                      )}
                    </div>

                    <div className="w-full mb-4">
                      <Typography variant="small" color="blue-gray" className=" font-medium">
                        Your email <strong className="text-red-500 ">*</strong>
                      </Typography>
                      <Input
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:border-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                      />
                      {formik.errors.email && (
                        <p className="errorMsg text-red-500 text-sm mt-2"> {formik.errors.email} </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="small" color="blue-gray" className="-mb-4 font-medium">
                      Your review <strong className="text-red-500 ">*</strong>
                    </Typography>
                    <Textarea
                      type="text"
                      rows={8}
                      id="review"
                      name="review"
                      placeholder="enter your name"
                      value={formik.values.review}
                      onChange={formik.handleChange}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                    {formik.errors.name && (
                      <p className="errorMsg text-red-500 text-sm -mt-4"> {formik.errors.review} </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button
                      type="submit"
                      onSubmit={formik.handleSubmit}
                      // className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
