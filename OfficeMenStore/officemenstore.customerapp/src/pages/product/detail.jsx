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

import React, { useState, useRef, useEffect } from 'react';
import { HomeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, PencilIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ProfileInfoCard, MessageCard } from '@/widgets/cards';
import { platformSettingsData, conversationsData, projectsData } from '@/data';
import { ProductDetailsTab } from './productdetailstab.jsx';
import { ReviewsTab } from './reviews.jsx';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slicse/cartSlice';
import { toast } from 'react-toastify';
import productApi from '@/api/productApi';

export function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = projectsData.find((product) => product.id === id);
  const { img, title, tag, description, price } = product;

  const [selectedSize, setSelectedSizes] = useState(null);
  const [Quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(null);
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const [tab, setTab] = useState('desc');

  // const { id } = useParams();
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const getProductDetails = async () => {
  //     try {
  //       const data = await productApi.GetProductById(id);
  //       setProduct(data);
  //     } catch (error) {
  //       console.error('Error fetching product details:', error);
  //     }
  //   };

  //   getProductDetails();
  // }, [id]);
  console.log('sanpham', product);

  const addTocart = (product) => {
    if (!selectedSize) {
      // Hiển thị thông báo hoặc xử lý khi không có size được chọn
      toast.error('Vui lòng chọn size!');
      return;
    }
    if (product) {
      dispatch(
        cartActions.addItem({
          id: id,
          productsName: title,
          category: tag,
          price: price,
          imgUrl: img,
          quantity: Quantity,
          size: selectedSize,
        }),
      );
      toast.success('Thêm sản phẩm thành công!');
    } else {
      toast.error('Product not found');
    }
  };
  console.log(product);
  // hàm tăng giảm số lượng
  const handleDec = (id) => {
    // Dispatch action giảm số lượng sản phẩm
    dispatch(cartActions.decreaseQuantity(id));
  };

  const handleInc = (id) => {
    // Dispatch action tăng số lượng sản phẩm
    dispatch(cartActions.increaseQuantity(id));
  };
  //hàm chọn size
  const toggleSize = (size) => {
    // Toggle the size
    setSelectedSizes((prevSize) => (prevSize === size ? null : size));
  };

  const [activeTab, setActiveTab] = useState('details');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>

      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          {/* thẻ Platform Settings */}
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <div className="flex flex-col gap-12">
                <img className=" mt-5 h-96 w-full rounded-lg object-cover object-center" src={img} alt="nature image" />
              </div>
            </div>
            <div>
              <div class="w-full px-4 ">
                <div>
                  {/* tên giá giới thiệu */}
                  <div class="mb-3 mt-5">
                    <span class="text-lg font-medium text-rose-500">{tag}</span>
                    <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-4xl">{title}</h2>
                    <div class="flex items-center mb-6">
                      <ul class="flex mr-2">
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="w-4 mr-1 text-red-500 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="w-4 mr-1 text-red-500 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="w-4 mr-1 text-red-500 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="w-4 mr-1 text-red-500 bi bi-star "
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <p class="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                    </div>
                    <p class="max-w-md mb-8 text-gray-700">{description}</p>
                    <p class="inline-block mb-3 text-4xl font-bold text-gray-700 gap-3">
                      <span className="text-black ">{price} $</span>
                      <span class="text-base font-normal text-gray-500 line-through ml-5">$1500</span>
                    </p>
                  </div>
                  {/*  */}

                  <div class="flex items-center mb-6">
                    {/* <h2 class="w-16 text-[15px] font-bold text-gray-500">Size</h2> */}
                    {/* Product Size Options */}
                    <div className="flex items-center">
                      <h2 className="w-16 text-[15px] font-bold text-gray-500">Size</h2>
                      <div className="flex flex-wrap -mx-2 -mb-2">
                        {['S', 'M', 'L', 'XL'].map((size) => (
                          <button
                            key={size}
                            onClick={() => toggleSize(size)}
                            className={`py-1 mb-2 mr-1 border w-11 focus:outline-none ${
                              selectedSize === size ? 'bg-black text-white' : 'hover:border-sky-400 hover:text-sky-600'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div class="w-full mb-8 flex items-center gap-5">
                    <h3 className="w-16 text-[] font-bold text-gray-500">Quantity</h3>
                    <div className="w-full flex items-center flex-row gap-3 mt-0">
                      <div class="relative flex flex-row w-[150px] h-10 bg-transparent rounded-lg">
                        <button
                          onclick="decreaseQuantity()"
                          class="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400"
                          onClick={() => handleDec(id)}
                        >
                          <span class="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input
                          id="quantityInput"
                          type="number"
                          class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-white"
                          placeholder="1"
                          value={Quantity}
                          onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
                        />
                        <button
                          class="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400"
                          onClick={() => handleInc(id)}
                        >
                          <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                      <div class="text-green-600 "> 15 sản phẩm sẵn có</div>
                    </div>
                  </div>

                  <div class="flex flex-wrap items-center -mx-4 ">
                    <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                      <Button
                        ripple={false}
                        fullWidth={true}
                        onClick={() => addTocart(product)}
                        className="h-[50px] bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="mx-3 mt-5 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody>
          <div className="flex items-center mb-4 ">
            <button
              className={`py-2 px-4 mr-0 focus:outline-none ${
                activeTab === 'details' ? 'border-b-2 border-gray-900' : ''
              }`}
              onClick={() => handleTabChange('details')}
            >
              <strong>Despcription</strong>
            </button>
            <button
              className={`py-2 px-4 ml-5 focus:outline-none ${
                activeTab === 'reviews' ? 'border-b-2 border-gray-900' : ''
              }`}
              onClick={() => handleTabChange('reviews')}
            >
              <strong>Reviews</strong>
            </button>
          </div>

          {activeTab === 'details' ? <ProductDetailsTab /> : <ReviewsTab />}
        </CardBody>
      </Card>
    </>
  );
}

export default ProductDetails;
