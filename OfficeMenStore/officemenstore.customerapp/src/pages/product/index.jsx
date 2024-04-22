import { Card, CardBody, Typography, Input } from '@material-tailwind/react';
import categoryApi from '@/api/categoryApi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productApi from '@/api/productApi';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import cartItemApi from '@/api/cartItemApi';
import Pagination from '@/components/pagination/index.jsx';
import ShopProductCard from '@/components/card/product-card';
import Grid from '@mui/material/Unstable_Grid2';
import ProductCartWidget from '@/pages/product/product-cart-widget';
import userApi from '@/api/userApi';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
export function Product() {
  const [productList, setProducts] = useState([]);
  const [cateList, setCateList] = useState([]);
  const token = window.localStorage.getItem('token');
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [cartItemList, setCartItemList] = useState([]);
  var userLogin = null;
  if (token != null) {
    userLogin = jwtDecode(token);
  }

  const [page, setOffset] = useState(0);
  const [limit] = useState(16);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isloaded, setIsLoaded] = useState(false);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    const GetAllCate = async () => {
      const data = await categoryApi.GetAll();
      setCateList(data);
    };
    GetAllCate();
    getAllProductsFromReact();
    const GetCartItem = async () => {
      const data = await cartItemApi.GetCartItemByUser(userLogin.id);
      setCartItemList(data.data);
    };
    GetCartItem();
  }, [limit, page, cartItemList?.total, searchText]);

  const getAllProductsFromReact = async () => {
    setIsLoaded(false);
    var dto = { page, limit };
    if (searchText) {
      dto.search = searchText;
    }
    const response = await productApi.GetAll(dto);

    setPageCount(Math.ceil(response.totalRecord / limit));
    setProducts(response.data);
    setIsLoaded(true);
  };

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
    setOffset(e.selected);
  };

  async function handleFilter(e) {
    e.preventDefault();
    var dto = { page, limit };
    if (e.target.value != 0) {
      dto.cateId = e.target.value;
      const response = await productApi.GetAll(dto);
      setPageCount(Math.ceil(response.totalRecord / limit));
      setProducts(response.data);
    } else {
      const response = await productApi.GetAll(dto);
      setPageCount(Math.ceil(response.totalRecord / limit));
      setProducts(response.data);
    }
  }

  return (
    <>
      <Card className="mt-4 mb-6 border border-blue-gray-100">
        <ProductCartWidget totalQuantityDb={cartItemList?.totalItems} totalQuantityLocal={totalQuantity} />
        <CardBody className="!p-4">
          <div className="">
            <div className="flex items-center mb-10">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                PRODUCT
              </Typography>
              <div className="w-full md:w-72 px-4">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <div className="w-50 ml-auto mr-14">
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

            <Grid container spacing={3}>
              {productList?.map((row) => (
                <Grid key={row.id} xs={12} sm={6} md={3}>
                  <Link to={`/user/product/details/${row.id}`}>
                    <ShopProductCard product={row} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </CardBody>
      </Card>
      <Pagination handlePageClick={handlePageClick} currentPage={currentPage} pageCount={pageCount} />
    </>
  );
}

export default Product;
