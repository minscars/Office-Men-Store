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
} from '@material-tailwind/react';
import { Rating } from '@mui/material';
import { useState } from 'react';
import { HomeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, PencilIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ProfileInfoCard, MessageCard } from '@/widgets/cards';
import { platformSettingsData, conversationsData, projectsData } from '@/data';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slicse/cartSlice';
import { toast } from 'react-toastify';
import Image from '@/components/image/userLMK.jpg';
export function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = projectsData.find((product) => product.id === id);
  const { img, title, tag, description, price } = product;
  const [selectedSize, setSelectedSizes] = useState(null);
  const [Quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(null); //star rating
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
                      <Rating className="items-center" name="half-rating" value={4} defaultValue={0} precision={0.5} />
                      <p class="text-xs dark:text-gray-400 "> (2 customer reviews)</p>
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
          <div class="mb-4 h-px bg-gray-300 dark:bg-white/30" />
          <div className="flex flex-col items-center justify-center">
            <span className="align-center mb-3 text-[20px] font-bold text-customcolor-500">Feedback & Vote</span>
            <div>
              <div className="flex items-center justify-center rounded-[10px] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
                <img src={Image} className="ml-3 mr-3 h-[35px] w-[35px] rounded-full" alt="" />
                <input
                  className="autofocus placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 focus:border-1 linear mb-2 mr-3 mt-2 w-[500px] resize-none rounded-[10px] rounded-[7px] bg-lightPrimary px-3 px-4 py-3 py-2.5 font-sans text-sm font-medium font-normal outline-0 transition transition-all duration-200 hover:bg-gray-100 focus:outline-0 active:bg-gray-200 disabled:resize-none disabled:border-0 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
                  type="text"
                  placeholder="Let's share about this product!"
                />
              </div>
              <div className="row ml-[65px] mt-2 flex items-center">
                <span className="mr-4 text-base text-gray-600">How would you rate this book?</span>
                <Rating
                  className="items-center"
                  name="half-rating"
                  value={value}
                  defaultValue={0}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <input
                  type="submit"
                  value="Send"
                  className="linear ml-20 cursor-pointer rounded-[10px] bg-cyan-700 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-cyan-800 active:bg-cyan-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                />
              </div>
              <div className="mb-4 ml-4 mt-6 text-[18px] font-bold  text-navy-700">
                <span>All feadbacks (1) 5/5 </span>
              </div>
              <div>
                <div
                  className={`mb-2 mt-2 flex w-full items-center justify-between rounded-2xl border-2 bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
                >
                  <div className="row flex items-center">
                    <div className="ml-4">
                      <p className={`text-m font-bold text-navy-700 dark:text-white`}>Content feedback is here</p>
                      <div className="mt-1 flex items-center gap-2">
                        <img src={img} className={` h-[35px] w-[35px] rounded-full`} />

                        <div className="ml-2">
                          <p className={`text-m font-medium text-navy-700 dark:text-white`}>Username</p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-[200px]">
                      <span className="mr-4 text-base text-gray-600">12/12/2023 11:11</span>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* the product */}
          {/* <div className="px-4 pb-4">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                PRODUCT
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
               SAN PHAM BAN CHAY
              </Typography>

              <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                {projectsData.map(
                  ({ img, title,price, description, tag, route, members }) => (
                    <Card key={title} color="transparent" shadow={false}>
                      <CardHeader
                        floated={false}
                        color="gray"
                        className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                      >
                        <img
                          src={img}
                          alt={title}
                          className="h-full w-full object-cover"
                        />
                      </CardHeader>
                      <CardBody className="py-0 px-1">
                        <Typography
                          variant="small"
                          className="font-normal text-blue-gray-500"
                        >
                          {tag}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mt-1 mb-2"
                        >
                          {title}
                        </Typography>
                        <div className="flex items-center gap-4">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mt-1 mb-2"
                        >
                          {price}$
                        </Typography>

                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mt-1 mb-2 left-0 text-blue-gray-500 line-through"
                        >
                          {price*2}$
                        </Typography>

                        </div>

                        {/* <Typography
                          variant="small"
                          className="font-normal text-blue-gray-500"
                        >
                          {description}
                        </Typography>
                        <Rating
                         size="xs"
                         value={4} readonly className="my-2 w-[20px]" />
                      </CardBody>
                      {/* <CardFooter className=" mt-6 flex items-center justify-between py-0 px-1 ">
                        <Link to={route}>
                        <Button
                        className="w-full xl:w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 "
                        >
                        Add to Cart
                        </Button>
                        </Link>
                        {/* <div>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </div>
                      </CardFooter>

                      <CardFooter className="pt-1 px-0">
                      <Button
                       ripple={false}
                       fullWidth={true}
                       className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                         Add to Cart
                      </Button>
                      </CardFooter>
                    </Card>
                  )
                )}
              </div>
            </div> */}
        </CardBody>
      </Card>
    </>
  );
}

export default ProductDetails;
