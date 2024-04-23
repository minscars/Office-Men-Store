import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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
  Input,
} from '@material-tailwind/react';
import Rating from '@mui/material/Rating';
import feedBackApi from '@/api/feedBackApi';
import moment from 'moment';
import Alert from '@/components/alert';
export function ReviewsTab(props) {
  const [value, setValue] = useState(null);
  const formRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [valueRating, setValueRating] = useState(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addFeedBack = async () => {
    var userId = props?.dataUser.userId;
    var productId = props?.productId;
    var content = inputValue;
    var rate = valueRating;
    var dto = { userId, productId, content, rate };
    await feedBackApi.AddFeedBack(dto).then(async (res) => {
      console.log('dto', dto);
      console.log('res:', res);
      if (res.statusCode === 200) {
        props
          .setTrigger(Math.random() + 1)
          ?.toString(36)
          .substring(7);
        Alert.showSuccessAlert(res.message);
        setInputValue('');
        setValueRating(null);
      } else {
        Alert.showErrorAlert(res.message);
      }
      if (formRef.current) {
        formRef.current.reset();
      }
    });
  };

  return (
    <section className="bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="px-4 py-2 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div className="grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="">
            {/* thêm bình luận  */}
            <Card className="p-6 bg-white border border-gray-200 rounded-md dark:bg-gray-900 shadow-none">
              <div className="flex flex-col justify-center">
                <div className="mb-10 flex justify-center">
                  <p className="text-[20px] font-bold text-blue-900">FeedBacks</p>
                </div>
                <div>
                  <form ref={formRef}>
                    <div className="flex flex-col rounded-[10px] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
                      <div className="flex items-center justify-start">
                        <img
                          src={props?.dataUser?.avatar}
                          className="ml-3 mr-3 h-[35px] w-[35px] rounded-full "
                          alt=""
                        />
                        <Input
                          size="lg"
                          placeholder="Let's share about this product"
                          name="name"
                          value={inputValue}
                          onChange={handleInputChange}
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: 'before:content-none after:content-none',
                          }}
                        />
                      </div>
                      <div className="row mb-2 ml-[65px] flex items-center justify-between">
                        <div className="row flex items-center">
                          <span className="mr-4 text-base text-blue-900">How would you rate this product?</span>

                          <Rating
                            className="items-center"
                            name="half-rating"
                            value={valueRating}
                            defaultValue={0}
                            precision={0.5}
                            onChange={(e, newValue) => {
                              setValueRating(newValue);
                            }}
                          />
                        </div>
                        <Button
                          onClick={addFeedBack}
                          className="mt-2 bg-blue-900 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </form>
                  {props?.feedBack === null && (
                    <div className="flex flex-col items-center justify-center">
                      <p className="mt-20 text-xl text-gray-700">Feedbacks is empty!</p>
                    </div>
                  )}
                  {props?.feedBack !== null && (
                    <div className="mb-2 ml-4 mt-4 text-[18px]">
                      <span className="font-bold text-blue-900">
                        All feadbacks ({props?.feedBack?.total}) {props?.feedBack?.rate}/5{' '}
                      </span>
                    </div>
                  )}
                  <div className="h-[400px] overflow-x-scroll">
                    {props?.feedBack?.feedBackItems?.map((item) => (
                      <div
                        key={item.feedBackId}
                        className={`mb-2 mt-1 items-center justify-between border-2 bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none`}
                      >
                        <div className="float-right mb-6">
                          {/* {userLogin.id === item.userAccountId && <CardMenu feedBackId={item.id} />} */}
                        </div>
                        <div className="w-full items-center">
                          <div className="ml-2 mr-4 w-auto">
                            <p className={`text-m text-between text-navy-700 dark:text-white`}>{item.content}</p>
                          </div>
                          <div className="ml-4 mt-2">
                            <div className="mt-1 flex items-center justify-between gap-2">
                              <div className="flex items-center">
                                <img src={item?.userAvatar} className={` h-[35px] w-[35px] rounded-full`} />
                                <div className="ml-2">
                                  <p className={`text-m font-bold text-navy-800 dark:text-white`}>{item?.userName}</p>
                                </div>
                              </div>
                              <div className="right-0 float-right">
                                <div className="w-[200px]">
                                  <span className="text-[14px] text-gray-600">
                                    {moment(item.createdDate).format('DD/MM/YYYY HH:mm A')}
                                  </span>
                                  <div>
                                    <Rating
                                      className="items-center"
                                      name="half-rating"
                                      size="small"
                                      precision={0.5}
                                      value={item?.rate}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
