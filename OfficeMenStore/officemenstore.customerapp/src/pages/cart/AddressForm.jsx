import React, { useState, useEffect } from 'react';
import { Typography, Card, CardHeader, CardBody, Input, Button, Select, Option, Form } from '@material-tailwind/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slicse/cartSlice';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import paypal from './images/Onine.png';
import userApi from '@/api/userApi';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import cartItemApi from '@/api/cartItemApi';
import orderApi from '@/api/orderApi';
function AddressForm({ formData, onSubmit, handlePrev, isFirstStep }) {
  const [paymentMethod, setPaymentMethod] = useState('Onine');
  const [user, setUser] = useState();
  const [selectedAddressId, setselectedAddressId] = useState(1);
  const [cartItemList, setCartItemList] = useState([]);
  const userLogin = jwtDecode(window.localStorage.getItem('token'));
  const [orderValuedb, setOrderValue] = useState();
  const [trigger, setTrigger] = useState();

  //promotion
  const [promotionList, setPromotionList] = useState([]);
  const [promoId, setPromoId] = useState('');
  const [valuePromo, setValuePromo] = useState(0);
  const [promoDiscount, setPromoDiscount] = useState(0);
  const handleChangePromo = async (e) => {
    setTrigger(Math.random() + 1)
      ?.toString(36)
      .substring(7);
    setPromoId(e);
    console.log(promoId);
    setPromoDiscount(valuePromo?.discount);
    handleUpdateGrandTotal();
  };

  const handleChangeShip = async (e) => {
    setTrigger(Math.random() + 1)
      ?.toString(36)
      .substring(7);
    setShipId(e);
    setShipDiscount(valueShip?.discount);
    handleUpdateGrandTotal();
  };

  //ship
  const [shipList, setShipList] = useState([]);
  const [shipId, setShipId] = useState('');
  const [valueShip, setValueShip] = useState(0);
  const [shipDiscount, setShipDiscount] = useState(0);

  //grand total: tổng đơn hàng cuối
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const GetCartItem = async () => {
      const data = await cartItemApi.GetCartItemByUser(userLogin.id);
      setCartItemList(data?.data);
    };
    GetCartItem();
    setOrderValue(cartItemList?.total);
  }, []);
  useEffect(() => {
    setPromoDiscount(valuePromo?.discount);
    setShipDiscount(valueShip?.discount);
  }, [trigger]);
  useEffect(() => {
    const getUser = async () => {
      const data = await userApi.GetUserInformation(userLogin.id);
      setUser(data);
    };
    getUser();
    getPromotionByCondition();
    getShipByCondition();
    setOrderValue(cartItemList?.total);
    handleUpdateGrandTotal();
  }, [cartItemList, trigger]);

  useEffect(() => {
    const getDetailPromotion = async () => {
      const data = await orderApi.GetDetailPromotion(promoId);
      setValuePromo(data.data);
    };
    getDetailPromotion();
    const getDetailShip = async () => {
      const data = await orderApi.GetDetailPromotion(shipId);
      setValueShip(data.data);
    };
    getDetailShip();

    setShipDiscount(valueShip?.discount);
    setPromoDiscount(valuePromo?.discount);
  }, [shipId, promoId, trigger]);

  async function getPromotionByCondition() {
    var orderValue = orderValuedb;
    var promotionTypeId = '6052d868-af98-4327-91e2-080bf9b1c192';
    await orderApi.GetPromotionByCondition(promotionTypeId, orderValue).then(async (res) => {
      if (res.statusCode === 200) {
        setPromotionList(res?.data);
      }
    });
  }

  async function getShipByCondition() {
    var orderValue = orderValuedb;
    var promotionTypeId = 'c5f71742-8892-40ac-a81f-f7c413bdc6e2';
    await orderApi.GetPromotionByCondition(promotionTypeId, orderValue).then(async (res) => {
      if (res.statusCode === 200) {
        setShipList(res?.data);
      }
    });
    console.log(shipList);
  }

  const handleUpdateGrandTotal = () => {
    var grandTotal = cartItemList.total + 35000;
    if (promoDiscount > 0) grandTotal = grandTotal - promoDiscount;
    if (shipDiscount > 0) grandTotal = grandTotal - shipDiscount;
    setGrandTotal(grandTotal);
  };

  const handlePaymentMethodChange = (event) => {
    const selectedPaymentMethod = event.target.value;
    setPaymentMethod(event.target.value);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone: '',
      email: '',
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Required').min(4, 'Must be 4 characters or more'),
      address: Yup.string().required('Required'),
      phone: Yup.string()
        .required('Required')
        .matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Must be a valid phone number'),
      email: Yup.string().required('Required').email('Invalid email address'),
    }),

    onSubmit: (values) => {
      buyNow();
    },
  });

  useEffect(() => {
    if (user) {
      formik.setValues({
        name: user?.name || '',
        address: user?.addresses[selectedAddressId]?.addressDetail || '',
        phone: user?.phoneNumber || '',
        email: user?.email || '',
      });
    }
  }, [user]);

  const handleAddressChange = (event) => {
    const selectedId = parseInt(event.target.value);
    setselectedAddressId(selectedId);
    if (user && user.addresses.length > 0) {
      const selectedAddress = user.addresses.find((address) => address.id === selectedId);
      if (selectedAddress) {
        formik.setValues({
          ...formik.values,
          address: selectedAddress.addressDetail,
        });
      }
    }
  };

  async function checkOut(payMethod) {
    console.log(payMethod);
    var userId = userLogin.id;
    var cartId = user?.cartId;
    var addressId = selectedAddressId;
    var pay = payMethod;
    const dto = { cartId, userId, addressId, pay };
    dto.shippingFee = 35000;
    if (promoDiscount > 0) {
      dto.voucherDiscount = promoDiscount;
      dto.shopVoucherPromotionId = promoId;
    }
    if (shipDiscount > 0) {
      dto.shippingDiscount = shipDiscount;
      dto.shippingPromotionId = shipId;
    }
    dto.total = grandTotal;
    if (valuePromo > 0) {
      dto.voucherDiscount = dto.shopVoucherPromotionId;
    }
    await orderApi
      .Order(dto)
      .then((res) => {
        if (res.statusCode === 200) {
          toast.success('Order Successfully!');
        }
      })
      .catch(() => {
        toast.error('Something went wrong!');
      });
  }

  const buyNow = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to create an order?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I want it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (paymentMethod === 'Onine') {
          const addressInfo = {
            date: new Date().toLocaleString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            }),
          };
          var options = {
            key: 'rzp_test_nW41YserAsUiCq',
            key_secret: 'HhmQn4VZyicKSaBNMStFRhhD',
            amount: grandTotal,
            currency: 'INR',
            order_receipt: 'order_rcptid_',
            name: 'Thanh toán online',
            description: 'for testing purpose',

            handler: function (response) {
              checkOut(3);
              toast.success('Payment Successful');
              dispatch(cartActions.clearCart());
              navigate('/user/cart/success');
            },
            theme: {
              color: '#3399cc',
            },
          };

          var pay = new window.Razorpay(options);
          pay.open();
        }
        // thanh toan off line
        else if (paymentMethod === 'Shipcod') {
          checkOut(4);
          dispatch(cartActions.clearCart());
          navigate('/user/cart/success');
        }
      }
    });
  };

  return (
    <div className="mx-0 grid mb-4 gap-3 grid-cols-1 xl:grid-cols-5 ">
      {/* thẻ thanh toán */}
      <div className="xl:col-span-3">
        <Card className="mb-3 mx-0 h-100 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm mr-5 ">
          <CardBody className="pt-0 pb-2 mt-5 mr-5 ml-5">
            <div className="w-full flex flex-col ">
              <form className="mt-2 mb-2 mx-auto max-w-screen-lg xl:w-full" onSubmit={formik.handleSubmit}>
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
                    placeholder="Enter your name"
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
                      defaultValue={formik.values.phone}
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

                {/* diachi */}
                <div className="mb-4">
                  <Typography variant="small" color="blue-gray" className="font-medium">
                    Address
                  </Typography>
                  <select
                    onChange={handleAddressChange}
                    className="rounded-[5px]  mt-1 py-3 px-2 border border-1 border-blue-gray-200 w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal"
                  >
                    {user?.addresses.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.addressDetail}
                      </option>
                    ))}
                  </select>{' '}
                </div>
                <div className="mb-5">
                  <Typography variant="h5" color="blue-gray" className="font-medium mb-5">
                    Payment method
                  </Typography>
                  <div className="flex items-center justify-center ">
                    <RadioGroup
                      value={paymentMethod}
                      onChange={handlePaymentMethodChange}
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
                  <Button onClick={buyNow} type="submit">
                    {' '}
                    Continue{' '}
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="xl:col-span-2">
        {/* the chi tiet don hang*/}
        <Card className=" xl:col-span-1 border border-blue-gray-100 shadow-sm">
          <CardHeader floated={false} shadow={false} color="transparent" className="">
            <Typography variant="h4" color="blue-gray" className="mb-2 mt-2 ml-3">
              {' '}
              Order Summary
            </Typography>
            <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600 ml-3">
              {/* <ArrowUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-green-500" /> */}
              <strong>{cartItemList.cartItemList?.length}</strong> Items
            </Typography>
          </CardHeader>
          <CardBody className="!p-2 pt-0 ml-5 mr-5">
            {/* items */}
            <div className="mt-2 mb-5">
              <tbody className="mb-5">
                {cartItemList.cartItemList?.map((item, key) => {
                  const className = `py-3 border-t-w-{15px} ${key === cartItemList.length - 1 ? '' : ''}`;
                  return (
                    <tr key={key} className={className}>
                      {/* teen */}
                      <td className={className}>
                        <div className="flex gap-4">
                          <img
                            src={item.productImage}
                            alt=""
                            className="h-auto w-[50px] aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                          />
                          <div>
                            <Typography
                              variant="h1"
                              color=""
                              className="mt-0 text-[14px] font-semibold text-blue-gray-900"
                            >
                              {item.productName}
                            </Typography>
                            {/* <div class="font-medium text-gray-400">{category}</div> */}
                            <div class="font-medium text-gray-400">
                              <span>Size: </span>
                              {item.sizeName}
                            </div>
                            <div class="font-medium text-gray-400">
                              <span>Quantity: </span>
                              {item.quantity}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="ml-4">
                        <div className="ml-4 flex items-end ">
                          <Typography variant="h6" color="blue-gray" className=" font-blod mb-auto">
                            {new Intl.NumberFormat('vi-VN', {
                              style: 'currency',
                              currency: 'VND',
                            }).format(item.subtotal)}
                          </Typography>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </div>
            <div className="flex-col gap-5 border-b border-t broder-blue-gray-500">
              <div className="mb-4">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Shipping
                </Typography>
                <Select
                  className="!h-10"
                  onChange={(e) => handleChangeShip(e)}
                  //className="rounded-[5px]  mt-1 py-3 px-2 border border-1 border-blue-gray-200 w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal"
                >
                  {shipList?.map((item) => (
                    <Option key={item.id} value={item?.id}>
                      {item.description}
                    </Option>
                  ))}
                </Select>{' '}
              </div>
              <div className="mb-4">
                <Typography variant="small" color="blue-gray" className="font-medium">
                  Voucher
                </Typography>
                <Select className="!h-10" onChange={(e) => handleChangePromo(e)}>
                  {promotionList?.map((item) => (
                    <Option key={item.id} value={item?.id}>
                      {item.description}
                    </Option>
                  ))}
                </Select>{' '}
              </div>
              <Typography
                as="span"
                variant="small"
                className="mb-2 text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
              >
                <p class="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Total:</p>
                <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">
                  {' '}
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(cartItemList.total)}
                </p>
              </Typography>
              <Typography
                as="span"
                variant="small"
                className="mb-2 text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
              >
                <p class="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Shipping:</p>
                <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">
                  {' '}
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(35000)}
                </p>
              </Typography>
              <Typography
                as="span"
                variant="small"
                className="mb-2 text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
              >
                <p class="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Discount shipping:</p>
                <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">
                  {' - '}
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(shipDiscount ? shipDiscount : 0)}
                </p>
              </Typography>
              <Typography
                as="span"
                variant="small"
                className="mb-2 text-xs font-medium text-blue-gray-500 flex items-center justify-between mt-3"
              >
                <p class="text-base leading-4 text-blue-gray-800 dark:text-gray-400">Voucher:</p>
                <p class="text-base leading-4 text-blue-gray-900 dark:text-gray-400">
                  {' - '}
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(promoDiscount ? promoDiscount : 0)}
                </p>
              </Typography>
            </div>

            <div class="flex items-center justify-between w-full mt-5">
              <Typography variant="h5" color="blue-gray" className="mb-1">
                Grand total
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(grandTotal)}
              </Typography>
            </div>
            {/* <div className="mt-4 mb-2 border-2 border-red-100">
              <p className="p-4 font-semibold text-[14px]">
                From March 14, 2024, Office Men Store applies free shipping nationwide for all orders from 0 VND. We
                confirm orders via Email. Please CHECK your email after successfully placing your order and WAIT TO
                RECEIVE ITEMS.
              </p>
            </div> */}
            {/* san pham */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
export default AddressForm;
