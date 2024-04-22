import React, { useEffect, useState, useRef } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Select,
  Option,
  Button,
  Input,
  Textarea,
} from '@material-tailwind/react';

import productApi from '@/api/productApi';
import categoryApi from '@/api/categoryApi.jsx';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Alert from '@/components/alert';
import { date } from 'yup';
export function UpdateCategory() {
  const { id } = useParams();
  const [cate, setCate] = useState();
  const [cateName, setCateName] = useState(cate?.categoryName);
  useEffect(() => {
    const getDetail = async () => {
      const data = await categoryApi.GetDetail(id);
      setCate(data);
    };
    getDetail();
    setCateName(cate?.categoryName);
  }, [id]);
  console.log(cateName);

  useEffect(() => {
    setCateName(cate?.categoryName);
  }, [cate]);

  const [imageUploadFile, setImageUploadFile] = useState(null);

  async function handleAddCategory() {
    var name = cateName;
    var image = imageUploadFile;
    var dto = { id, name, image };
    console.log(dto);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to update this category?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I want it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await categoryApi.UpdateCategory(dto).then((res) => {
          if (res.statusCode === 200) {
            Alert.showSuccessAlert(res.message);
          } else {
            Alert.showErrorAlert(res.message);
          }
        });
      }
    });
  }

  const onFileChange = (event) => {
    setImageUploadFile(event.target.files[0]);
    const fileInput = event.target;

    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const url = URL.createObjectURL(selectedFile);
      setFileURL(url);
    }
  };

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="mt-12 gap-10">
      {/* avtaar */}
      <Card className="w-full bg-white xl:grid-cols-2 -mt-5 border  border-blue-gray-100 shadow-sm mb-5">
        <div className="grid  grid-cols-1 xl:grid-cols-2 h-full mr-5 mt-3 gap-20">
          {/* them hinh anh */}
          <div className=" flex-1 xl:col-span-1 mb-5 mt-0">
            <div className=" flex flex-col mt-0">
              <form className="mt-0 mb-2 mx-auto max-w-screen-lg xl:w-full ml-10">
                <div className=""></div>
                {/* name */}
                <div className="mb-1 flex flex-col gap-6 ">
                  <Typography variant="h6" color="blue-gray" className="mb-4  mt-5">
                    Category name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter your category name"
                    name="name"
                    value={cateName}
                    onChange={(event) => setCateName(event.target.value)}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                </div>
              </form>
            </div>
          </div>

          {/* theem hinh anh */}
          <div className=" xl:col-span-1 mb-5">
            {/* add image */}
            <Typography variant="h6" color="blue-gray" className="mt-5">
              Add image
            </Typography>
            <div className="mt-6 mb-6">
              <section class="container w-[200px] h-[100px] items-center">
                <div class="max-w-sm bg-white rounded-lg overflow-hidden items-center">
                  <div class="">
                    <div
                      id="image-preview"
                      class="p-2 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg text-center cursor-pointer"
                      onClick={handleClick}
                      style={{ cursor: 'pointer' }}
                    >
                      <input
                        id="image-upload-input"
                        type="file"
                        class="hidden"
                        onChange={onFileChange}
                        ref={hiddenFileInput}
                        style={{ display: 'none' }}
                      />
                      <label for="upload" class="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 text-gray-700 mx-auto mb-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>
                        <h5 class="mb-2 text-[14px] font-bold tracking-tight text-gray-700">Change picture</h5>
                        <span id="filename" class="text-gray-500 bg-gray-200 z-50"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className=" container items-center mt-9 xl:col-span-1 mb-5 ">
              <div className="flex items-center">
                {imageUploadFile ? (
                  <div className="flex items-center justify-center">
                    <img src={URL.createObjectURL(imageUploadFile)} alt="upload image" className="w-[300px] h-auto" />
                  </div>
                ) : (
                  <div>
                    <img src={cate?.image} alt="upload image" className="w-[200px] h-auto" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-5">
          <Button className="flex bg-black items-center gap-3" onClick={handleAddCategory}>
            Update
          </Button>
        </div>
      </Card>

      {/* mật khẩu */}

      {/*  */}
    </div>
  );
}
export default UpdateCategory;
