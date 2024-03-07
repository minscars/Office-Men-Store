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
import { PencilIcon, TrashIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ProductData } from '@/data';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import DeleteModal from './delete/delete';

export function AllProducts() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState([]); // Initialize with an empty array

  const [searchTerm, setSearchTerm] = useState('');
  const [productsData, setProductData] = useState([]); // Initialize with an empty array
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      // If no search term, set productsData to the original products
      setProductData(ProductData);
    }
  }, [searchTerm, ProductData]);

  // hàm lọc sản phẩm
  const handleFilter = (e) => {
    const selectedCategory = e;

    console.log('e', e);

    if (selectedCategory === ' ') {
      setProductData(ProductData);
    } else {
      const filteredProducts = ProductData.filter((item) => item.category === selectedCategory);
      setProductData(filteredProducts);
    }

    // loc lay san pham la so,o
    if (selectedCategory === 'Somi') {
      const filteredProducts = ProductData.filter((product) =>
        selectedCategory ? product.category === selectedCategory : true,
      );

      setProductData(filteredProducts);
    }

    if (selectedCategory === 'Giaytay') {
      const filteredProducts = ProductData.filter((item) => item.category === 'Giaytay');
      setProductData(filteredProducts);
    }

    if (selectedCategory === 'Quantay') {
      const filteredProducts = ProductData.filter((item) => item.category === 'Quantay');
      setProductData(filteredProducts);
    }
  };

  // ham tim kiem san pham
  const handleSearch = (e) => {
    const searchTerm = e.target.value || '';
    console.log(searchTerm);

    if (ProductData) {
      const productsData = ProductData.filter((product) =>
        (product.name || '').toLowerCase().includes(searchTerm.toLowerCase()),
      );

      if (searchTerm === '' || searchTerm === null) {
        setProductData(ProductData);
      } else {
        setProductData(productsData);
      }
    }
  };

  const navigateeditproduct = () => {
    navigate('updateproduct');
  };

  // Hàm mở hộp thoại xác nhận xóa sản phẩm

  function onDelete() {
    setOpen(true);
    // setUserId(userId);
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card className=" xl:col-span-1 mt-0 border border-blue-gray-100 shadow-sm ml-5 mr-5 ">
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            All Products
          </Typography>
        </CardHeader>

        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <div className="flex items-center">
            <div className="w-full md:w-72 px-4">
              <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} onChange={handleSearch} />
            </div>
            <div className=" flex items-center gap-5 ml-auto px-4">
              <div className="w-30 ">
                <Select label="category" value={value} onChange={handleFilter} className="bg-blue-gray-50">
                  <Option value=" ">All</Option>
                  <Option value="Somi">So mi</Option>
                  <Option value="Giaytay">Giay tay</Option>
                  <Option value="Quantay">Quan au</Option>
                </Select>
              </div>
              <div className=" ml-auto">
                <Link to={'addproducts/'}>
                  <Button className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                    </svg>
                    Add products
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <table className="mt-5 w-full  min-w-max  table-auto text-left ">
            <thead>
              <tr>
                {['Product name', 'Category', 'price', 'Status', 'Created'].map((el) => (
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
              {productsData.map(({ id, name, category, imageUrl, price, status, createdAt }, key) => {
                const className = `p-4 py-3 px-10 ${
                  key === productsData.length - 1 ? '' : 'p-4 border-b border-blue-gray-50 '
                } `;

                return (
                  <tr key={id} className="hover:bg-gray-100 transition-colors group">
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <img
                          src={imageUrl}
                          alt=""
                          className="w-[100px] aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                        />
                        <div>
                          <Typography variant="small" color="blue-gray" className="font-bold">
                            {name}
                          </Typography>
                          <div class="font-light text-sm not-italic	 text-gray-400">{category}</div>
                        </div>
                      </div>
                    </td>
                    {/* customername*/}
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {category}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    {/*method*/}
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {price}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className={className}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={status ? 'con hang' : 'het hang'}
                          color={status ? 'green' : 'blue-gray'}
                        />
                      </div>
                    </td>

                    <td className={className}>
                      <span class="inline-block w-20 group-hover:hidden">{createdAt}</span>
                      <div class="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                        <button class="select-none p-2 ">
                          <Tooltip content="Edit Product">
                            <IconButton variant="text">
                              <PencilIcon className="h-5 w-5  hover:text-blue-300" onClick={navigateeditproduct} />
                            </IconButton>
                          </Tooltip>
                        </button>
                        <button class="p-2 ">
                          <Tooltip content="Delete Product">
                            <IconButton variant="text">
                              <TrashIcon className="h-5 w-5  hover:text-red-500" onClick={onDelete} />
                            </IconButton>
                          </Tooltip>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {
              <DeleteModal
                open={open}
                // userId={userId}
                // onDeleteSubmit={onDeleteSubmit}
                onClose={() => setOpen(false)}
                className="text-black"
              />
            }
          </table>
        </CardBody>
      </Card>

      {/* <Modal open={open} onClose={() => setOpen(false)}>
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
      </Modal> */}
    </div>
  );
}
export default AllProducts;
