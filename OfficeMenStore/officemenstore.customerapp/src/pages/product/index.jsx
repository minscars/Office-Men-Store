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
  Select,
  Option,
  img,
} from '@material-tailwind/react';

import { HomeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, PencilIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ProfileInfoCard, MessageCard } from '@/widgets/cards';
import { platformSettingsData, conversationsData, projectsData, servicesData } from '@/data';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/material';

// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { cartActions } from '../../redux/slicse/cartSlice';

export function Product() {
  // // chi tiết sản phẩm
  // const naviate = useNavigate();
  // const navigateOderdetail = () => {
  //   naviate(`/shop/${product.id}`);
  // };
  // // thêm sản phẩm vào giỏ hàng
  // const dispatch = useDispatch();
  // const addTocart = (product) => {
  //   if (product) {
  //     dispatch(
  //       cartActions.addItem({
  //         id: product.id,
  //         productsName: product.productsName,
  //         category: product.category,
  //         price: product.price,
  //         imgUrl: product.imgUrl,
  //       }),
  //     );
  //     toast.success('Thêm sản phẩm thành công!');
  //   } else {
  //     toast.error('Product not found');
  //   }
  //   console.log(dispatch);
  // };

  return (
    <>
      {/* <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div> */}

      <Card className="mx-3 mt-10 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            {/* <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              {/* <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Richard Davis
                </Typography>
                <Typography variant="small" className="font-normal text-blue-gray-600">
                  CEO / Co-Founder
                </Typography>
              </div> 
            </div> */}
          </div>
          <div className="mb-12 grid h-20 gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            {servicesData.map(({ img, title }) => (
              <Card className=" flex text-cent bg-gray-200 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                <span className="flex items-center">
                  <div className="rounded-full bg-white w-[60px] h-[60px] flex items-center mt-3 ml-2 ">
                    <img src={img} className=" flex items-center h-10 w-10 mt-0  ml-[10px]" />
                  </div>
                </span>
              </Card>
            ))}
          </div>
          {/* the product */}
          <div className="px-4 pb-4">
            <div className="flex items-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                PRODUCT
              </Typography>
              {/* <Typography variant="small" className="font-normal text-blue-gray-500">
                SAN PHAM BAN CHAY
              </Typography> */}

              <div className="w-50 ml-auto">
                <Select label="Short by">
                  <Option>Low to High</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {projectsData.map(({ img, title, price, description, tag, route, members, id }) => (
                <Card key={title} color="transparent" shadow={false}>
                  <CardHeader floated={false} color="gray" className="mx-0 mt-0 mb-4 h-64 xl:h-40">
                    <img src={img} alt={title} className="h-full w-full object-cover" />
                  </CardHeader>
                  <CardBody className="py-0 px-1">
                    <Typography variant="small" className="font-normal text-blue-gray-500">
                      {tag}
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mt-1 mb-2">
                      {title}
                    </Typography>
                    <div className="flex items-center gap-4">
                      <Typography variant="h5" color="blue-gray" className="mt-1 mb-2">
                        {price}$
                      </Typography>

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mt-1 mb-2 left-0 text-blue-gray-500 line-through"
                      >
                        {price * 2}$
                      </Typography>
                    </div>

                    {/* <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {description}
                      </Typography> */}
                    <span>
                      <img src="" alt="" />
                    </span>
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
                     */}
                  <CardFooter className="pt-1 px-0">
                    <Link to={`/dashboard/product/${id}`}>
                      <Button
                        ripple={false}
                        fullWidth={true}
                        // onClick={() => addTocart(id)}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                      >
                        Add to Cart
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Product;
