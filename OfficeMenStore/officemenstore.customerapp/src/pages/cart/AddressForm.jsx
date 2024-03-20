import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Avatar,
  Select,
  Form,
} from '@material-tailwind/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
// import getStripe from '../../lib/getStripe';
import Success from './success';
const { Option } = Select;

// const stripePromise = loadStripe(
//   'pk_test_51Ovc3HK59UUfgaiCt9snihZ1Z2rznv9aUA7qQc4nUGa8E7lW1aT0z9bVlmN8QCv6Hkgnynzf0xvB3tXomCGLn90B00PcqCphnx',
// );

function AddressForm({ formData, onSubmit, handlePrev, isFirstStep }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState(null);

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [position, setPosition] = useState();
  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone: '',
      email: '',
      cities: cities,
      districts: districts,
      // wards: wards,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required').min(4, 'Must be 4 characters or more'),
      address: Yup.string().required('Required'),
      phone: Yup.string()
        .required('Required')
        .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Must be a valid phone number'),
      email: Yup.string().required('Required').email('Invalid email address'),

      // cities: Yup.string().required('Required'),
      // districts: Yup.string().required('Required'),
      // wards: Yup.string().required('Required'),
    }),

    onSubmit: (values) => {
      window.alert('Form submitted');
      console.log('Form submitted:', values);
      // Hoặc bạn có thể gọi hàm buyNow() tại đây nếu muốn
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
        );
        setCities(response.data);
        // Dữ liệu đã được tải thành công
      } catch (error) {
        setLoading(false); // Có lỗi xảy ra trong quá trình tải dữ liệu
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://ip-api.com/json');
        setPosition(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderCity = () => {
    return cities.map((city) => (
      <Option key={city.Id} value={city.Id}>
        {city.Name}
      </Option>
    ));
  };

  const renderDistrict = () => {
    return districts.map((district) => (
      <Option key={district.Id} value={district.Id}>
        {district.Name}
      </Option>
    ));
  };

  const renderWard = () => {
    return wards.map((ward) => (
      <Option key={ward.Id} value={ward.Id}>
        {ward.Name}
      </Option>
    ));
  };

  const handleCityChange = (cityId) => {
    const selectedCity = cities.find((city) => city.Id === cityId);

    formik.handleChange({ target: { name: 'cities', value: selectedCity.Name } });

    setDistricts(selectedCity?.Districts || []);
    setWards([]);
    console.log('city', selectedCity);
  };

  const handleDistrictChange = (districtId) => {
    const selectedDistrict = districts.find((district) => district.Id === districtId);
    console.log('districts', selectedDistrict);
    formik.handleChange({ target: { name: 'districts', value: selectedDistrict.Name } });
    setDistricts((prevDistricts) => {
      const updatedDistricts = prevDistricts.map((district) => {
        if (district.Id === districtId) {
          return {
            ...district,
            selected: true,
          };
        } else {
          return {
            ...district,
            selected: false,
          };
        }
      });
      return updatedDistricts;
    });

    setWards(selectedDistrict?.Wards || []);
  };

  // const handlePaySubmit = (values) => {
  //   const selectedCity = cities.find((city: any) => city.Id === values.city);
  //   const selectedDistrict = districts.find(
  //     (district) => district.Id === values.district
  //   );
  //   const selectedWard = wards.find((ward) => ward.Id === values.ward);

  //   values.city = selectedCity?.Name;
  //   values.district = selectedDistrict?.Name;
  //   values.ward = selectedWard?.Name;
  //   values.address = `${values.address}, ${values.ward}, ${values.district}, ${values.city}`;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('/create-payment-intent', { method: 'POST' });
  //     const data = await response.json();
  //     setClientSecret(data.clientSecret);
  //   };

  //   fetchData();
  // }, []);

  // const handleClick = async () => {
  //   const stripe = await stripePromise;
  //   const { error } = await stripe.confirmCardPayment(clientSecret, {
  //     payment_method: {
  //       card: elements.getElement(CardElement),
  //       billing_details: {
  //         name: 'Jenny Rosen',
  //       },
  //     },
  //   });

  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log('Payment succeeded');
  //   }
  // };

  // const handlePaySubmit = (values) => {

  //   const selectedCity = cities.find((city) => city.Id === values.city);
  //   const selectedDistrict = districts.find(
  //     (district) => district.Id === values.district
  //   );
  //   const selectedWard = wards.find((ward) => ward.Id === values.ward);

  //   values.city = selectedCity?.Name;
  //   values.district = selectedDistrict?.Name;
  //   values.ward = selectedWard?.Name;
  //   values.address = `${values.address}, ${values.ward}, ${values.district}, ${values.city}`;

  //   // const orderData= {};
  //   // orderData.createdDate = new Date().toISOString();
  //   // orderData.shippedDate = new Date().toISOString();
  //   // orderData.description = values.description;
  //   // orderData.shippingAddress = values.address;
  //   // orderData.status = "WAITING";
  //   // orderData.orderDetails = itemsCheckout.map((item) => ({
  //   //   productId: item.product._id,
  //   //   quantity: item.quantity,
  //   // }));
  //   // orderData.contactInformation = {
  //   //   address: orderData.shippingAddress,
  //   //   firstName: values.firstName,
  //   //   lastName: values.lastName,
  //   //   phoneNumber: values.phoneNumber,
  //   // };
  //   // orderData.customerId = `${auth.payload._id}`;
  //   // orderData.position = {
  //   //   name: position.regionName,
  //   //   lat: position.lat,
  //   //   lng: position.lon,
  //   // };

  //   if (payMethod === "shipCod") {
  //     orderData.paymentType = "CASH";

  //     const payPost = async () => {
  //       const found = await axios.post(`${URL_ENV}/orders`, orderData);

  //       saveOrderId(found?.data?.result?._id);
  //       if (found) {
  //         //Change stock of product :
  //         const handleChangeStock = await axios
  //           .post(`${URL_ENV}/products/orderp/${found?.data?.result._id}/stock`)
  //           .then((response) => {
  //             console.log(response.data.message);
  //           })
  //           .catch((error) => {
  //             console.error(error);
  //           });
  //         router.push("/success-payment");
  //       }
  //     };
  //     payPost();
  //   }
  //   if (payMethod === "momo") {
  //     orderData.paymentType = "MOMO";

  //     const amount = itemsCheckout
  //       .map((item) => item.product.price * item.quantity)
  //       .reduce((accumulator, subtotal) => accumulator + subtotal, 0);

  //     const payPost = async () => {
  //       try {
  //         const postOder = await axios.post(
  //           `${URL_ENV}/orders`,
  //           orderData
  //         );

  //         if (postOder) {
  //           //Change stock of product :
  //           const handleChangeStock = await axios
  //             .post(
  //               `${URL_ENV}/products/orderp/${postOder?.data?.result?._id}/stock`
  //             )
  //             .then((response) => {
  //               console.log(response.data.message);
  //             })
  //             .catch((error) => {
  //               console.error(error);
  //             });

  //           const found = await axios.post(
  //             `${URL_ENV}/orders/pay/create_momo_url`,
  //             { amount: amount }
  //           );

  //           window.location.href = found.data.urlPay;
  //         }
  //       } catch (error) {
  //         console.log("««««« error »»»»»", error);
  //       }
  //     };
  //     payPost();
  //   }
  //   if (payMethod === "vnpay") {
  //     orderData.paymentType = "VNPAY";

  //     const amount = itemsCheckout
  //       .map((item) => item.product.price * item.quantity)
  //       .reduce((accumulator, subtotal) => accumulator + subtotal, 0);

  //     const payPost = async () => {
  //       try {
  //         const postOder = await axios.post(`${URL_ENV}/orders`, orderData);
  //         if (postOder) {
  //           const handleChangeStock = await axios
  //             .post(`${URL_ENV}/products/orderp/${postOder?.data?._id}/stock`)
  //             .then((response) => {
  //               console.log(response.data.message);
  //             })
  //             .catch((error) => {
  //               console.error(error);
  //             });

  //           const found = await axios.post(
  //             `${URL_ENV}/orders/pay/create_vnpay_url`,
  //             { amount: amount }
  //           );

  //           window.location.href = found.data.urlPay;
  //         }
  //       } catch (error) {
  //         console.log("««««« error »»»»»", error);
  //       }
  //     };
  //     payPost();
  //   }
  // };

  const buyNow = async () => {
    const addressInfo = {
      // Username,
      // Email,
      // Address,
      // PhoneNumber,
      date: new Date().toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }),
    };

    var options = {
      key: 'rzp_test_nW41YserAsUiCq',
      key_secret: 'HhmQn4VZyicKSaBNMStFRhhD',
      amount: (totalAmount * 0.1).toFixed(4),
      currency: 'USD',
      order_receipt: 'order_rcptid_',
      name: 'Thanh toán online',
      description: 'for testing purpose',
      handler: function (response) {
        console.log(response);
        toast.success('Payment Successful');

        // const paymentId = response.razorpay_payment_id;
        // const orderInfo = {
        //     cartItems,
        //     addressInfo,
        //     date: new Date().toLocaleString(
        //         "en-US",
        //         {
        //             month: "short",
        //             day: "2-digit",
        //             year: "numeric",
        //         }
        //     ),
        //     email: currentUser?.email,
        //     userid: currentUser?.uid,
        //     paymentId,
        //     totalAmount,
        //     Status:"Đã thanh toán"
        // }

        // try {
        //     const orderRef = collection(db, 'order')
        //     addDoc(orderRef, orderInfo);

        //     const updateProductQuantities = async () => {
        //       for (const item of cartItems) {
        //         console.log("item", item.quantity)
        //         // Replace 'products' with the actual collection name in your Firebase
        //         const productRef = doc(db, 'products', item.id);

        //         try {
        //           // Get the product document
        //           const productSnapshot = await getDoc(productRef);

        //           if (productSnapshot.exists()) {
        //             const productData = productSnapshot.data();
        //             console.log("productData", productData)

        //             if (productData.quantity >= item.quantity) {
        //               // Calculate the new available quantity after purchase
        //               const newQuantity = productData.quantity - item.quantity;

        //               // Update the product's availableQuantity in Firebase
        //               await updateDoc(productRef, { quantity: newQuantity });
        //             } else {
        //               // Handle the case where the quantity goes negative (out of stock)
        //               // You may want to display an error message or take appropriate action
        //               toast.error('Product is out of stock');
        //             }
        //           }
        //         } catch (error) {
        //           console.error("Error updating product quantity:", error);
        //         }
        //       }
        //     };
        //     updateProductQuantities();

        // } catch (error) {
        //     console.log(error)
        // }

        // Loop through the cart items and update the quantity for each product
      },
      theme: {
        color: '#3399cc',
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
    navigate('/success');
  };

  const [valuepayment, setvaluepayment] = useState();
  const dispatch = useDispatch();

  return (
    <div className=" mx-0 grid mb-4 gap-3 grid-cols-1 xl:grid-cols-5 ">
      {/* thẻ thanh toán */}
      <div className="xl:col-span-3">
        <Card className=" mt-5 mb-3 mx-0 h-100 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm mr-5 ">
          <CardBody className=" pt-0 pb-2 mt-5 mr-5 ml-5">
            <div className="w-full flex flex-col ">
              <form className="mt-2 mb-2 mx-auto max-w-screen-lg xl:w-full" onSubmit={formik.handleSubmit}>
                {/* <div>
                  <from
                    label="Quận/ Huyện"
                    name="district"
                    rules={[{ required: true, message: 'Please select your district!' }]}
                  >
                    <Select placeholder="Chọn quận huyện" onChange={handleDistrictChange}>
                      {renderDistrict()}
                    </Select>
                  </from>
                  <from
                    label="Phường/ Xã"
                    name="ward"
                    rules={[{ required: true, message: 'Please select your ward!' }]}
                  >
                    <Select placeholder="Chọn phường xã">{renderWard()}</Select>
                  </from>
                </div> */}

                <div>
                  <Typography variant="h5" color="blue-gray" className="mb-5">
                    Customer information
                  </Typography>
                </div>

                <div className="mb-4">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Your name
                  </Typography>
                  <Input
                    type="text"
                    // label="Username"
                    size="lg"
                    // placeholder="Enter your name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && <p className="errorMsg text-red-500"> {formik.errors.name} </p>}
                </div>

                <div className="flex gap-6">
                  <div className="w-full mb-4">
                    <Typography variant="small" color="blue-gray" className="font-medium">
                      Phone number
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.phone && <p className="text-red-500 text-sm">{formik.errors.phone}</p>}
                  </div>

                  {/* email */}
                  <div className="w-full mb-4">
                    <Typography variant="small" color="blue-gray" className="font-medium">
                      Your email
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="Enter your email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-full mb-4">
                    <Typography variant="small" color="blue-gray" className="font-medium">
                      City
                    </Typography>
                    {/* <from
                    label="Tỉnh Thành"
                    name="city"
                    rules={[{ required: true, message: 'Please select your city!' }]}
                  >
                    <Select placeholder="Chọn tỉnh thành" onChange={(cityId) => handleCityChange(cityId)}>
                     
                  
                  </from> */}

                    <Select
                      size="lg"
                      placeholder="Enter your phone number"
                      name="cities"
                      // value={formik.values.cities}
                      onChange={(cityId) => handleCityChange(cityId)}
                      // onChange={formik.handleChange}
                    >
                      {renderCity()}
                    </Select>
                    {formik.errors.cities && <p className="text-red-500 text-sm">{formik.errors.cities}</p>}
                  </div>

                  {/* email */}
                  <div className="w-full mb-4">
                    <Typography variant="small" color="blue-gray" className="font-medium">
                      District
                    </Typography>
                    <Select
                      size="lg"
                      placeholder="Chọn quận huyện"
                      name="quan"
                      // value={formik.values.districts}
                      // onChange={formik.handleChange}
                      onChange={(DistrictId) => handleDistrictChange(DistrictId)}
                    >
                      {renderDistrict()}
                    </Select>
                    {formik.errors.districts && <p className="text-red-500 text-sm">{formik.errors.districts}</p>}
                  </div>
                </div>

                {/* xa */}

                {/* <div className="w-full mb-4">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Wards
                  </Typography>
                  <Select
                    size="lg"
                    placeholder="select wards"
                    // value={formik.values.wards}
                    name="xa"
                    // value={formik.values.wards}
                    // onChange={formik.handleChange}
                    // onChange={(value) => setWards(value)}
                  >
                    {renderWard()}
                  </Select>
                  {formik.errors.wards && <p className="text-red-500 text-sm">{formik.errors.wards}</p>}
                </div> */}

                {/* diachi */}
                <div className="mb-4">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Address
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter your address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.address && <p className="text-red-500 text-sm">{formik.errors.address}</p>}
                </div>
              </form>
            </div>

            <div className="mb-5">
              <Typography variant="h5" color="blue-gray" className="font-medium mb-5">
                Payment method
              </Typography>

              <div className="flex items-center justify-center ">
                <RadioGroup
                  className="items-center"
                  aria-labelledby="storage-label"
                  defaultValue="512GB"
                  size="lg"
                  sx={{
                    flexDirection: 'row',
                    gap: 3,
                    width: '300',
                  }}
                >
                  {['Onine', 'Shipcod'].map((value) => (
                    <Sheet
                      key={value}
                      sx={{
                        p: 1,
                        borderRadius: 'md',
                        boxShadow: 'sm',
                        width: '280px',
                        height: '100px',
                      }}
                    >
                      <Radio
                        className=""
                        // label={`${value} checkout`}
                        overlay
                        disableIcon
                        value={value}
                        slotProps={{
                          label: ({ checked }) => ({
                            sx: {
                              fontWeight: 'lg',
                              fontSize: 'md',
                              color: checked ? 'text.primary' : 'text.secondary',
                              width: '300',
                            },
                          }),
                          action: ({ checked }) => ({
                            sx: (theme) => ({
                              ...(checked && {
                                '--variant-borderWidth': '2px',
                                '&&': {
                                  // && to increase the specificity to win the base :hover styles
                                  borderColor: theme.vars.palette.primary[500],
                                },
                              }),
                            }),
                          }),
                        }}
                      />
                      <div className="items-center  ">
                        <img
                          className="flex items-center justify-center mb-2 ml-[100px]"
                          style={{ height: '50px', width: '50px' }}
                          src={`http://localhost:5173/src/pages/cart/images/${value}.png`}
                        />
                      </div>
                    </Sheet>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <div className=" mx-5 mb-5 flex justify-center items-center">
              {/* onClick={formik.handleSubmit} */}
              {/* onClick={buyNow} */}
              {/* <Button type="submit"> Make payment</Button> */}
              <Button type="submit"> Continue </Button>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="xl:col-span-2">
        {/* the chi tiet don hang*/}
        <Card className=" xl:col-span-1 mt-5 border border-blue-gray-100 shadow-sm">
          <CardHeader floated={false} shadow={false} color="transparent" className="">
            <Typography variant="h4" color="blue-gray" className="mb-2 mt-2 ml-3">
              {' '}
              Order Summary
            </Typography>
            <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600 ml-3">
              {/* <ArrowUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-green-500" /> */}
              <strong>{cartItems.length}</strong> Items
            </Typography>
          </CardHeader>
          <CardBody className="pt-0 ml-5 mr-5">
            {/* items */}
            <div className="mt-2 mb-5 ">
              <tbody className="mb-5">
                {cartItems?.map(
                  ({ imgUrl, quantity, productsName, members, price, id, size, category, totalPrice }, key) => {
                    const className = `py-3 border-t-w-{15px} ${key === cartItems.length - 1 ? '' : ''}`;
                    return (
                      <tr key={key} className={className}>
                        {/* teen */}
                        <td className={className}>
                          <div className="flex gap-4">
                            <img
                              src={imgUrl}
                              alt=""
                              className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                            />
                            <div>
                              <Typography
                                variant="h1"
                                color=""
                                className="mt-0 text-lg font-semibold text-blue-gray-900"
                              >
                                {productsName}
                              </Typography>
                              <div class="font-medium text-gray-400">{category}</div>
                              <div class="font-medium text-gray-400">
                                <strong>Size: </strong>
                                {size}
                              </div>
                              <div class="font-medium text-gray-400">
                                <strong>Quantity: </strong>
                                {quantity}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-end ">
                            <Typography variant="h6" color="blue-gray" className=" font-blod mb-auto">
                              $ {price * quantity}
                            </Typography>
                          </div>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </div>
            <div className="flex-col gap-5 border-b border-t broder-blue-gray-500">
              <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mt-5">
                <p class="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Subtotal:</p>
                <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">{totalAmount?.toFixed(2)}$</p>
              </Typography>

              <Typography
                as="span"
                variant="small"
                className="text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
              >
                <p class="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Shipping:</p>
                <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">Free</p>
              </Typography>
              <Typography variant="small" color="blue-gray" className=" font-medium flex justify-between mt-3 mb-5">
                <p class="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Discount:</p>
                <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">10%</p>
              </Typography>
            </div>

            <div class="flex items-center justify-between w-full mt-5">
              <Typography variant="h5" color="blue-gray" className="mb-1">
                Total
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                {(totalAmount - totalAmount * 0.1).toFixed(2)}$
              </Typography>
            </div>
            {/* san pham */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default AddressForm;
