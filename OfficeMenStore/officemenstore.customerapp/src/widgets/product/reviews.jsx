import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { cartActions } from '../../redux/slicse/cartSlice';
import { projectsData } from '@/data';
import { ProfileInfoCard, MessageCard } from '@/widgets/cards';
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
  Rating,
} from '@material-tailwind/react';
import { HomeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, PencilIcon } from '@heroicons/react/24/solid';

export function ReviewsTab() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = projectsData.find((product) => product.id === id);
  const { img, title, tag, description, price } = product;

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(null);
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const [tab, setTab] = useState('desc');

  const [reviews, setReviews] = useState([
    {
      id: 1,
      message: 'Quality is good than the product',
      user: 'Rinkya Tansen',
      date: '12, SEP 2022',
      likes: 12,
      comments: 8,
    },
    {
      id: 2,
      message: 'I like the quality of the product.',
      user: 'Rinkya Tansen',
      date: '12, SEP 2022',
      likes: 12,
      comments: 8,
    },
    {
      id: 3,
      message: 'This is one of the best product.',
      user: 'Rinkya Tansen',
      date: '12, SEP 2022',
      likes: 12,
      comments: 8,
    },
  ]);

  const addToCart = () => {
    // Existing logic for adding to cart
  };

  const handleDec = (id) => {
    // Existing logic for decreasing quantity in cart
  };

  const handleInc = (id) => {
    // Existing logic for increasing quantity in cart
  };

  const toggleSize = (size) => {
    // Existing logic for toggling size
  };

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

    setReviews([...reviews, newReview]);
    toast.success('Review added successfully!');
  };

  return (
    <section className="py-10 bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="px-4 py-2 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div className="grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="flex gap-5">
            {/* Customer Reviews */}
            <div className="-mt-8 space-y-6 xl:w-2/3">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="    bg-white border border-gray-200 rounded-md lg:p-6 dark:border-gray-900 dark:bg-gray-900"
                >
                  <h2 className="mb-2 text-xl font-bold dark:text-gray-300">{review.message}</h2>
                  <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{/* Nội dung đánh giá */}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap items-center">
                      <img
                        className="object-cover w-10 h-10 mb-1 mr-2 rounded-full shadow lg:mb-0"
                        src="https://i.postimg.cc/rF6G0Dh9/pexels-emmy-e-2381069.jpg"
                        alt="User Avatar"
                      />
                      <h2 className="mr-2 text-lg font-semibold text-gray-700 dark:text-gray-400">{review.user}</h2>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{review.date}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
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
              ))}
            </div>
            {/* tong rv */}
            <div className="xl:w-1/3 mr-0 -mt-8">
              <div className="p-1 bg-white border border-gray-200 rounded-md dark:bg-gray-900 ml-0">
                <h2 className="mb-6 text-3xl font-black text-center dark:text-gray-400">Customer Reviews</h2>
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
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Based on {reviews.length} reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* thêm bình luận  */}
          <div className=" mt-10 p-6 bg-white border border-gray-200 rounded-md dark:bg-gray-900">
            <h2 className="mb-6 text-3xl font-black text-center dark:text-gray-400">Add a Review</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="review-user"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="review-user"
                  ref={reviewUser}
                  required
                  className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="review-msg" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                  Your Review
                </label>
                <textarea
                  id="review-msg"
                  ref={reviewMsg}
                  required
                  rows="4"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label htmlFor="rating" className="mr-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    Rating
                  </label>
                  <Rating
                    id="rating"
                    value={rating}
                    onChange={(value) => setRating(value)}
                    className="text-blue-500 dark:text-blue-400"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSubmitReview}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
