import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Select,
  Option,
  Button,
  Input,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import { EllipsisVerticalIcon, EyeIcon, PencilIcon, TrashIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ProductData } from '@/data';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../widgets/Modal.jsx';
import { toast } from 'react-toastify';
import productApi from '@/api/productApi.jsx';
import categoryApi from '@/api/categoryApi.jsx';
import Pagination from '@/components/pagination/index.jsx';
import moment from 'moment';
import { jwtDecode } from 'jwt-decode';
import { SignIn } from '../auth/index.js';
import Swal from 'sweetalert2';
import Alert from '@/components/alert';
import { data } from 'autoprefixer';
export function Products() {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState([]); // Initialize with an empty array

  const [searchText, setSearchText] = useState('');

  const [productList, setProductList] = useState([]);
  const [page, setOffset] = useState(0);
  const [limit] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isloaded, setIsLoaded] = useState(false);
  const [trigger, setTrigger] = useState();
  const token = window.localStorage.getItem('token');
  const userLogin = jwtDecode(token);

  const [cateList, setCateList] = useState([]);
  useEffect(() => {
    const GetAllCate = async () => {
      const data = await categoryApi.GetAll();
      setCateList(data);
    };
    GetAllCate();
    getAllProductsFromReact();
  }, [limit, page, trigger, searchText]);

  const getAllProductsFromReact = async () => {
    setIsLoaded(false);
    var dto = { page, limit };
    if (searchText) {
      dto.search = searchText;
    }
    const response = await productApi.GetAll(dto);

    setPageCount(Math.ceil(response.totalRecord / limit));
    setProductList(response.data);
    setIsLoaded(true);
  };

  async function handleFilter(e) {
    e.preventDefault();
    var dto = { page, limit };
    if (e.target.value != 0) {
      dto.cateId = e.target.value;
      const response = await productApi.GetAll(dto);
      setPageCount(Math.ceil(response.totalRecord / limit));
      setProductList(response.data);
    } else {
      const response = await productApi.GetAll(dto);
      setPageCount(Math.ceil(response.totalRecord / limit));
      setProductList(response.data);
    }
  }

  async function handleDeleteProduct(productId) {
    console.log(productId);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I want it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await productApi.DeleteProduct(productId).then((res) => {
          console.log(res);
          if (res.statusCode === 200) {
            setTrigger(Math.random() + 1)
              ?.toString(36)
              .substring(7);
            Alert.showSuccessAlert(res.message);
          } else {
            Alert.showErrorAlert(res.message);
          }
        });
      }
    });
  }
  // Hàm mở hộp thoại xác nhận xóa sản phẩm
  const openDeleteConfirmation = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const deleteProduct = () => {
    if (selectedProduct) {
      // Loại bỏ sản phẩm khỏi danh sách sản phẩm
      const updatedProductList = ProductData.filter((product) => product.id !== selectedProduct.id);
      // Cập nhật danh sách sản phẩm sau khi xóa
      props.onDeleteProduct(selectedProduct.id); // Đóng hộp thoại xác nhận xóa sản phẩm
      setOpen(false);
      // Hiển thị thông báo xóa sản phẩm thành công
      toast.success('Sản phẩm đã được xóa thành công!');
    } else toast.error('Xoa san pham that bai!');
  };

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
    setOffset(e.selected);
  };

  if (token === '') return <SignIn />;
  if (userLogin.roles === 'Admin')
    return (
      <div className="mb-8 gap-12">
        <Card className="xl:col-span-1 mt-0 border border-blue-gray-100 shadow-sm ">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <Typography variant="h5" color="blue-gray">
              Products list
            </Typography>
            <div className="mt-2 flex items-center">
              <div className="w-full md:w-72 px-4">
                <form onSubmit={(e) => handleSearch(e)}>
                  <Input
                    label="Search"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </form>
              </div>
              <div className="mr-4 flex items-center gap-5 ml-auto px-4">
                <div className="w-30 ">
                  <select
                    label="Category"
                    onChange={(e) => handleFilter(e)}
                    className="mr-4 flex h-12 w-full items-center justify-center rounded-xl border-2 bg-white/0 p-3 text-sm outline-none"
                  >
                    <option value={0}>All</option>
                    {cateList?.map((item) => (
                      <option key={item.value} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="ml-auto">
                  <Link to={'addproducts/'}>
                    <Button className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                      </svg>
                      Add new product
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="h-[570px] px-0 pt-0 pb-2">
            <table className="mt-5 w-full min-w-max table-auto text-left ">
              <thead>
                <tr>
                  {['Product name', 'Quantity', 'Category', 'price', 'Created'].map((el) => (
                    <th
                      key={el}
                      className="border-y border-blue-gray-100 py-3 px-10 text-left bg-blue-gray-50/50 p-4 ml-4"
                    >
                      <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {productList?.map((item) => {
                  return (
                    <tr key={item.id} className="hover:bg-gray-100 transition-colors group">
                      <td className="p-2 py-3 px-10">
                        <div className="flex items-center gap-4">
                          <img src={item.image} alt="" className="w-[70px] border border-gray-200" />
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-bold">
                              {item.name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      {/* customername*/}
                      <td className="p-4 py-3 px-10">
                        <div className="flex ml-4 items-center gap-4">
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {item.totalProduct}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 py-3 px-10">
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {item.categoryName}
                            </Typography>
                          </div>
                        </div>
                      </td>

                      {/*method*/}
                      <td className="p-4 py-3 px-10">
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                              }).format(item.price)}
                            </Typography>
                          </div>
                        </div>
                      </td>

                      <td className="p-4 py-3 px-10">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {item.createdTime != null ? moment(item.createdTime).format('DD/MM/YYYY HH:mm A') : '......'}
                        </Typography>
                        <div class="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                          <button class="select-none p-2 ">
                            <Tooltip content="Update">
                              <IconButton variant="text">
                                <Link to={`./updateproduct/${item.id}`}>
                                  <PencilIcon className="h-5 w-5 hover:text-blue-300" />
                                </Link>
                              </IconButton>
                            </Tooltip>
                          </button>

                          <button class="p-2 ">
                            <Tooltip content="Delete Product">
                              <IconButton variant="text">
                                <TrashIcon
                                  className="h-5 w-5 hover:text-red-500"
                                  onClick={() => handleDeleteProduct(item.id)}
                                />
                              </IconButton>
                            </Tooltip>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Pagination handlePageClick={handlePageClick} currentPage={currentPage} pageCount={pageCount} />
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-60">
            <TrashIcon className="mx-auto text-red-500 w-20 h-20" />
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
              <p className="text-sm text-gray-500">
                Are you sure you want to delete {selectedProduct && selectedProduct.name}?
              </p>
            </div>
            <div className="flex gap-4">
              <Button color="red" className="btn btn-danger w-full" onClick={deleteProduct}>
                Delete
              </Button>
              <Button className="btn btn-light w-full" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  else return <SignIn />;
}
export default Products;
