import React, { useEffect } from 'react';
import { Stepper, Step, Button, Typography } from '@material-tailwind/react';
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
  CheckIcon,
  CheckCircleIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
import orderApi from '@/api/orderApi';
import Swal from 'sweetalert2';
import Alert from '../alert';
import moment from 'moment';

export function StepStatus(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  //async function
  const handleChangeStatus = async (value) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        var orderStatus = value;
        var orderId = props?.data?.orderId;
        var dto = { orderId, orderStatus };
        await orderApi.UpdateOrderStatus(dto).then((res) => {
          if (res.statusCode === 200) {
            if (!isLastStep) {
              setActiveStep((cur) => cur + 1);
            }
            props
              .setTrigger(Math.random() + 1)
              .toString(36)
              .substring(7);
            Alert.showSuccessAlert('Update status sucessfully!');
          } else {
            Alert.showErrorAlert('Something went worong!');
          }
        });
      }
    });
  };
  useEffect(() => {
    if (props?.data?.orderStatus === 'Pending') {
      setActiveStep(0);
    } else if (props?.data?.orderStatus === 'Approve') {
      setActiveStep(1);
    } else if (props?.data?.orderStatus === 'Delivering') {
      setActiveStep(2);
    } else if (props?.data?.orderStatus === 'Delivered') {
      setActiveStep(3);
    }
  }, [props?.data?.orderStatus]);
  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step>
          <CheckCircleIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography variant="h6" color={activeStep === 0 ? 'blue-gray' : 'gray'}>
              Pending
            </Typography>
            {props?.data?.orderStatus === 'Pending' ||
            props?.data?.orderStatus === 'Approve' ||
            props?.data?.orderStatus === 'Delivering' ||
            props?.data?.orderStatus === 'Delivered' ? (
              <Typography color={'blue-gray'} className="font-normal">
                {props?.data?.orderTime != null
                  ? moment(props?.data?.orderTime).format('DD/MM/YYYY HH:mm A')
                  : '......'}
              </Typography>
            ) : (
              <></>
            )}
          </div>
        </Step>
        <Step>
          <CogIcon className="h-5 w-5" />
          <div className={`absolute w-max text-center top-[3.5rem]`}>
            <Typography variant="h6" color={activeStep === 1 ? 'blue-gray' : 'gray'}>
              Approved
            </Typography>
            {props?.data?.orderStatus === 'Approve' ||
            props?.data?.orderStatus === 'Delivering' ||
            props?.data?.orderStatus === 'Delivered' ? (
              <Typography color={'blue-gray'} className="font-normal">
                {props?.data?.approveTime != null
                  ? moment(props?.data?.approveTime).format('DD/MM/YYYY HH:mm A')
                  : '......'}
              </Typography>
            ) : (
              <></>
            )}
            {activeStep === 0 && <Button onClick={() => handleChangeStatus(2)}>Confirm</Button>}
          </div>
        </Step>
        <Step>
          <BuildingLibraryIcon className="h-5 w-5" />
          <div className={`absolute w-max text-center top-[3.5rem]`}>
            <Typography variant="h6" color={activeStep === 2 ? 'blue-gray' : 'gray'}>
              Delivering
            </Typography>
            {props?.data?.orderStatus === 'Delivering' || props?.data?.orderStatus === 'Delivered' ? (
              <Typography color={'blue-gray'} className="font-normal">
                {props?.data?.startDeliveryTime != null
                  ? moment(props?.data?.startDeliveryTime).format('DD/MM/YYYY HH:mm A')
                  : '......'}
              </Typography>
            ) : (
              <></>
            )}
            {activeStep === 1 && <Button onClick={() => handleChangeStatus(5)}>Confirm</Button>}
          </div>
        </Step>
        <Step>
          <BuildingLibraryIcon className="h-5 w-5" />
          <div className={`absolute w-max text-center top-[3.5rem]`}>
            <Typography variant="h6" color={activeStep === 3 ? 'blue-gray' : 'gray'}>
              Delivered
            </Typography>
            {props?.data?.orderStatus === 'Delivered' ? (
              <Typography color={'blue-gray'} className="font-normal">
                {props?.data?.orderTime != null
                  ? moment(props?.data?.orderTime).format('DD/MM/YYYY HH:mm A')
                  : '......'}
              </Typography>
            ) : (
              <></>
            )}
            {activeStep === 2 && <Button onClick={() => handleChangeStatus(6)}>Confirm</Button>}
          </div>
        </Step>
      </Stepper>
    </div>
  );
}
