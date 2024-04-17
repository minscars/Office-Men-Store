import { Card, CardBody, Typography } from '@material-tailwind/react';
import categoryApi from '@/api/categoryApi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productApi from '@/api/productApi';
import Pagination from '@/components/pagination/index.jsx';
import ShopProductCard from '@/components/card/product-card';
import Grid from '@mui/material/Unstable_Grid2';
export function Product() {
  const [productList, setProducts] = useState([]);
  const [cateList, setCateList] = useState([]);

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(16);
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
            <div className="flex items-center mb-10">
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
