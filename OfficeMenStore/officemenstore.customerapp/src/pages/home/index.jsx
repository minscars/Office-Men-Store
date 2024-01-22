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
import Carousel from '@/components/carousel/index';
import { HomeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, PencilIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ProfileInfoCard, MessageCard } from '@/widgets/cards';
import { platformSettingsData, conversationsData, projectsData, servicesData } from '@/data';
import { StatisticsCard } from '@/widgets/cards';
import productApi from '@/api/productApi';
import { useEffect, useState } from 'react';
export function Home() {
  const [productList, setProducts] = useState([]);
  useEffect(() => {
    const getall = async () => {
      const data = await productApi.GetAll();
      setProducts(data);
    };
    getall();
  }, []);
  console.log(import.meta.env.VITE_REACT_APP_API_URL);
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-cover	bg-center">
        <Carousel />
      </div>
      {/* <Card className="mt-6 mb-6 h-52 border border-blue-gray-100" /> */}
      <Card className="mt-6 mb-6  border border-blue-gray-100">
        <CardBody className="p-4">
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
          {/* <div className="mt-6 mb-6 h-52 border border-blue-gray-100 rounded-lg"></div> */}
          {/* the product */}
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              PRODUCT
            </Typography>
            <Typography variant="small" className="font-normal text-blue-gray-500">
              SAN PHAM BAN CHAY
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {productList?.map((row, key) => (
                <Card color="transparent" shadow={false}>
                  <img src={row.image} alt="" className="rounded-[10px] border-2 h-[220px] w-auto object-cover" />

                  <CardBody className="py-0 px-1">
                    <Typography variant="small" className="font-normal text-blue-gray-500">
                      test
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mt-1 mb-2">
                      {row.name}
                    </Typography>
                    <div className="flex items-center gap-4">
                      <Typography variant="h5" color="blue-gray" className="mt-1 mb-2">
                        {row.price}$
                      </Typography>

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mt-1 mb-2 left-0 text-blue-gray-500 line-through"
                      >
                        {row.price * 2}$
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
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Home;
