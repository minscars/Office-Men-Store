import { Card, CardBody, Button } from '@material-tailwind/react';

import React, { useState, useRef, useEffect } from 'react';
import { ReviewsTab } from './reviews.jsx';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slicse/cartSlice';
import { PlayDisabled } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import Rating from '@mui/material/Rating';
import productApi from '@/api/productApi';
import cartItemApi from '@/api/cartItemApi';
import userApi from '@/api/userApi';
import sizeProductApi from '@/api/sizeProductApi';
import feedBackApi from '@/api/feedBackApi.jsx';
import ProductCartWidget from '@/pages/product/product-cart-widget';
import { useSelector } from 'react-redux';
export function ProductDetails() {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSizes] = useState(null);
  const [Quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [selectedSizeid, setSelectedSizesid] = useState(null);
  const [user, setUser] = useState();
  const token = window.localStorage.getItem('token');
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [cartItemList, setCartItemList] = useState([]);
  var userLogin = null;

  if (token != null) {
    userLogin = jwtDecode(token);
  }

  const [feedBack, setFeedBack] = useState();
  const [trigger, setTrigger] = useState();

  useEffect(() => {
    const productDetail = async () => {
      const data = await productApi.GetProductById(id);
      setProduct(data);
    };
    setTotalPro(product?.totalProduct);
    productDetail();

    const getUser = async () => {
      const data = await userApi.GetUserInformation(userLogin.id);
      setUser(data);
    };
    getUser();

    const GetFeedBack = async () => {
      const data = await feedBackApi.GetFeedBacksFollowProduct(id);
      setFeedBack(data.data);
    };
    GetFeedBack();
    const GetCartItem = async () => {
      const data = await cartItemApi.GetCartItemByUser(userLogin.id);
      setCartItemList(data.data);
    };
    GetCartItem();
  }, [cartItemList?.totalItems, trigger]);

  const [totalPro, setTotalPro] = useState(product?.totalProduct);

  const addTocart = async (product) => {
    if (!selectedSize) {
      // Hiển thị thông báo hoặc xử lý khi không có size được chọn
      toast.error('Vui lòng chọn size!');
      return;
    }
    if (product) {
      var token = window.localStorage.getItem('token');
      if (token != null) {
        const data = {
          cartId: user?.cartId,
          productId: id,
          sizeId: selectedSizeid,
          quantity: Quantity,
        };
        await cartItemApi.AddToCart(data);
        setTrigger(Math.random() + 1)
          ?.toString(36)
          .substring(7);
      } else {
        dispatch(
          cartActions.addItem({
            id: id,
            productsName: product.name,
            category: product.category,
            price: product.price,
            imgUrl: product.image,
            quantity: Quantity,
            size: selectedSize,
            sizeid: selectedSizeid,
          }),
        );
      }
      toast.success('Add to cart successfully!');
    } else {
      toast.error('Please choose a size!');
    }
  };

  const handleDec = () => {
    if (Quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      console.log(Quantity);
    }
  };
  const handleInc = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    console.log(Quantity);
  };
  //hàm chọn size
  const toggleSize = async (size, sizeid) => {
    // Toggle the size
    setSelectedSizes((prevSize) => (prevSize === size ? null : size));
    setSelectedSizesid((prevSize) => (prevSize === sizeid ? null : sizeid));
    var dto = { sizeid };
    dto.productId = id;
    await sizeProductApi.GetAmountSizeProduct(dto).then((res) => {
      setTotalPro(res.amount);
    });
  };

  const [activeTab, setActiveTab] = useState('details');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  console.log(cartItemList);
  return (
    <>
      <Card className="mx-3 mt-8 mb-6 lg:mx-4 border border-blue-gray-100">
        <ProductCartWidget totalQuantityDb={cartItemList?.totalItems} totalQuantityLocal={totalQuantity} />
        <CardBody className="p-4">
          {/* thẻ Platform Settings */}
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-2">
            <div className="flex flex-col gap-12">
              <img
                className=" mt-5 h-[400px] w-full rounded-lg object-cover object-center"
                src={product.image}
                alt="nature image"
              />
            </div>
            <div>
              <div class="w-full px-4 ">
                <div>
                  {/* tên giá giới thiệu */}
                  <div class="mb-3 mt-5">
                    <span class="text-lg font-medium text-rose-500">{product.category}</span>
                    <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-4xl">{product.name}</h2>
                    <div class="flex items-center mb-6">
                      <Rating
                        className="items-center"
                        name="half-rating"
                        size="small"
                        precision={0.5}
                        value={feedBack?.rate}
                      />
                    </div>
                    <p class="max-w-md mb-8 text-gray-700"></p>
                    <p class="inline-block mb-3 text-4xl font-bold text-gray-700 gap-3">
                      <span className="text-black ">
                        {new Intl.NumberFormat('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        }).format(product.price)}
                      </span>
                    </p>
                  </div>

                  <div class="flex items-center mb-6">
                    <div className="flex items-center">
                      <h2 className="w-16 text-[15px] font-bold text-gray-500">Size</h2>
                      <div className="flex flex-wrap -mx-2 -mb-2">
                        {product.sizeProducts?.map((row) => (
                          <button
                            key={row.id}
                            {...(row.amount === 0 ? 'disabled = {true}' : 'disabled = {false}')}
                            onClick={() => toggleSize(row.name, row.id)}
                            className={`py-1 mb-2 mr-1 border w-11 focus:outline-none ${
                              selectedSize === row.name
                                ? 'bg-black text-white'
                                : 'hover:border-sky-400 hover:text-sky-600'
                            } `}
                          >
                            {row.name}
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
                          onClick={() => handleDec(id, selectedSize)}
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
                          onClick={() => handleInc(id, selectedSize)}
                        >
                          <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                      <div class="text-green-600 "> {totalPro} sản phẩm sẵn có</div>
                    </div>
                  </div>

                  <div class="flex flex-wrap items-center -mx-4 ">
                    <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                      <Button
                        ripple={false}
                        fullWidth={true}
                        onClick={() => addTocart(product)}
                        className="h-[50px] bg-blue-900 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
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
          <ReviewsTab dataUser={user} productId={id} feedBack={feedBack} />
        </CardBody>
      </Card>
    </>
  );
}

export default ProductDetails;
