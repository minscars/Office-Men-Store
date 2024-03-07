import React from 'react';
import { Typography, Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Button } from '@material-tailwind/react';
import { ArrowLongLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { FaCircleCheck } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import thankyou from '../../components/image/thankyou.png';
function Thankorder({ formData, onSubmit, handlePrev, isFirstStep }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className=" grid grid-cols-1 xl:grid-cols-3 ">
      <Card className=" gird mt-5 mb-3 mx-0 h-100 overflow-hidden xl:col-span-3 border border-blue-gray-100 shadow-sm">
        <div></div>
        <img src={thankyou} alt="" />
        <div className="grid-cols-1 xl:col-span-1 items-center">
          <div className="mx-10 mt-5 ml-5 items-start justify-center flex ">
            <FaCircleCheck color="green" size={60} className="items-center" />
          </div>
          <div className="items-start justify-center flex">
            <Typography variant="h4" color="blue-gray" className="mt-3 mb-1 justify-center">
              Thank for your other!
            </Typography>
          </div>

          <Card className=" grid-cols-1 px-10 mt-5 mb-3 mx-40 h-100 overflow-hidden xl:col-span-1 border border-blue-gray-100 shadow-none ">
            <Typography variant="small" color="blue-gray" className="font-bold items-start">
              your order
            </Typography>

            <div className="w-full flex items-start justify-center">
              <tbody className=" mx-10 mb-5 w-full ">
                {cartItems?.map(
                  ({ imgUrl, quantity, productsName, members, price, id, size, category, totalPrice }, key) => {
                    const className = `py-3  border-b broder-blue-gray-500 p-7 ${
                      key === cartItems.length - 1 ? '' : ''
                    }`;
                    return (
                      <tr key={id} className="hover:bg-gray-100 transition-colors group">
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <img
                              src={imgUrl}
                              alt=""
                              className="w-[100px] aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                            />
                            <div>
                              <Typography variant="small" color="blue-gray" className="font-bold items-start">
                                {productsName}
                              </Typography>
                              <div class="mt-1 font-light text-sm not-italic	 text-gray-400">Size: {size}</div>
                              <div>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  x{quantity}
                                </Typography>
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* customername*/}
                        <td className={className}>
                          <div className="flex items-center gap-4"></div>
                        </td>

                        {/*method*/}
                        <td className={className}>
                          <div className="flex items-center gap-4"></div>
                        </td>

                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <div>
                              <Typography variant="h6" color="blue-gray" className="font-bold ml-auto">
                                {quantity * price} $
                              </Typography>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </div>
          </Card>

          <Card className=" grid-cols-1 px-10 mt-5 mb-3 mx-40 h-100 overflow-hidden xl:col-span-1 border border-blue-gray-100 shadow-none ">
            <Typography variant="small" color="blue-gray" className="font-bold items-start">
              your order
            </Typography>

            <div className="w-full flex items-start justify-center">
              <tbody className=" mx-10 mb-5 w-full ">
                {cartItems?.map(
                  ({ imgUrl, quantity, productsName, members, price, id, size, category, totalPrice }, key) => {
                    const className = `py-3  border-b broder-blue-gray-500 p-7 ${
                      key === cartItems.length - 1 ? '' : ''
                    }`;
                    return (
                      <tr key={id} className="hover:bg-gray-100 transition-colors group">
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <img
                              src={imgUrl}
                              alt=""
                              className="w-[100px] aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                            />
                            <div>
                              <Typography variant="small" color="blue-gray" className="font-bold items-start">
                                {productsName}
                              </Typography>
                              <div class="mt-1 font-light text-sm not-italic	 text-gray-400">Size: {size}</div>
                              <div>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  x{quantity}
                                </Typography>
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* customername*/}
                        <td className={className}>
                          <div className="flex items-center gap-4"></div>
                        </td>

                        {/*method*/}
                        <td className={className}>
                          <div className="flex items-center gap-4"></div>
                        </td>

                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <div>
                              <Typography variant="h6" color="blue-gray" className="font-bold ml-auto">
                                {quantity * price} $
                              </Typography>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default Thankorder;
