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
import categoryApi from '@/api/categoryApi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productApi from '@/api/productApi';
import Pagination from '@/components/pagination/index.jsx';
export function Product() {
  const [productList, setProducts] = useState([]);
  const [cateList, setCateList] = useState([]);

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const GetAllCate = async () => {
      const data = await categoryApi.GetAll();
      setCateList(data);
    };
    GetAllCate();
    getAllProductsFromReact();
  }, [perPage, offset]);

  const getAllProductsFromReact = async () => {
    setIsLoaded(false);
    const response = await productApi.GetAll(offset, perPage);
    console.log('offset: ', offset);
    console.log('per: ', perPage);
    setPageCount(Math.ceil(response.totalRecord / perPage));
    setProducts(response.data);
    setIsLoaded(true);
  };

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
    setOffset(e.selected);
  };

  async function handleFilter(e) {
    e.preventDefault();
    if (e.target.value != 0) {
      const response = await productApi.GetProductByCate(offset, perPage, e.target.value);
      setPageCount(Math.ceil(response.totalRecord / perPage));
      setProducts(response.data);
    } else {
      const response = await productApi.GetAll(offset, perPage);
      setPageCount(Math.ceil(response.totalRecord / perPage));
      setProducts(response.data);
    }
  }

  return (
    <>
      <Card className="mt-4 mb-6 border border-blue-gray-100">
        <CardBody className="!p-4">
          <div className="">
            <div className="flex items-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                PRODUCT
              </Typography>
              {/* <Typography variant="small" className="font-normal text-blue-gray-500">
                SAN PHAM BAN CHAY
              </Typography> */}
              {/* Sắp xếp */}
              <div className="w-50 ml-auto mr-10">
                <select
                  onChange={(e) => handleFilter(e)}
                  class="ml-4 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none"
                >
                  <option value={0}>All category</option>
                  {cateList?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="p-2 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-5 !w-[1200px] h-[790px]">
              {productList?.map((row) => (
                <Link to={`/user/product/details/${row.id}`}>
                  <Card className="p-3 !h-auto !w-[220px]" key={row.id} color="transparent" shadow={false}>
                    <img
                      src={row.image}
                      alt="{row.name}"
                      className="rounded-[2px] border-2 h-auto w-[300px] object-cover"
                    />
                    <CardBody className="py-0 px-1 ">
                      <div className="flex justify-center mt-2">
                        <p className="mr-10 text-[12px] font-bold">{row.categoryName}</p>
                        <div className="flex justify-center ml-6 ">
                          {row.sizeProducts?.map((item) => (
                            <p key={item.key} className="mr-1 text-[12px] font-bold">
                              {item.name}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="justify-center flex flex-col items-center">
                        <p
                          color="blue-gray"
                          className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-2 mb-2 !text-[17px]"
                        >
                          {row.name}
                        </p>
                      </div>
                      <Typography variant="h5" color="blue-gray" className="mt-1 mb-2 !text-[20px]">
                        {row.price}.000 VNĐ
                      </Typography>

                      {/* <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mt-1 mb-2 left-0 text-blue-gray-500 line-through"
                      >
                        {row.price * 2}$
                      </Typography> */}
                    </CardBody>
                    {/* <CardFooter className="pt-1 px-0 !p-0">
                      <Link >
                        <Button
                          ripple={false}
                          fullWidth={true}
                          // onClick={() => addTocart(id)}
                          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                          Add to Cart
                        </Button>
                      </Link>
                    </CardFooter> */}
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
      <Pagination handlePageClick={handlePageClick} currentPage={currentPage} pageCount={pageCount} />
    </>
  );
}

export default Product;
