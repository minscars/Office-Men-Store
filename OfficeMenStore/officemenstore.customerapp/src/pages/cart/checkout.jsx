import React, { useState } from 'react';
import { Typography, Card, CardHeader, CardBody, CardFooter, Input, Checkbox, Stepper, Step, Button } from '@material-tailwind/react';
import { EllipsisVerticalIcon, ArrowUpIcon,HomeIcon,UserIcon,DocumentIcon,CogIcon  } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { Stepper } from '@/widgets/checkout';
import { cartActions } from '../../redux/slicse/cartSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Thankorder from './thankorder';



export function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);

  const handleNext = () => {
    setActiveStep((cur) => cur + 1);
    setIsFirstStep(false);
  };

  const handlePrev = () => {
    setActiveStep((cur) => cur - 1);
    setIsLastStep(false);
  };

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
    setIsFirstStep(stepNumber === 0);
    setIsLastStep(stepNumber === 1); // Assuming there are only two steps
  };

  const [formData, setFormData] = useState({
    address: { name: '', email: '', phone: '', address: '' },
    payment: { cardNumber: '', expirationDate: '', cvv: '' }
  });
  
  const handleAddressSubmit = (addressData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      address: addressData,
    }));
    handleNext(); // Chuyển sang bước tiếp theo
  };
  
  const handlePaymentSubmit = (paymentData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      payment: paymentData,
    }));
    handleNext(); // Chuyển sang bước tiếp theo
  };
  return (
    <div className="mt-12 gap-10">
      <div className="relative -mt-5 h-40 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cove bg-center">
      <div className="w-full py-4 px-8">
        {/* septeper */}
        {/* <Stepper
        activeStep={activeStep}
        isLastStep={setIsLastStep}
        isFirstStep={setIsFirstStep}
      >
        <Step onClick={() => handleStepClick(0)}>Address</Step>
        <Step onClick={() => handleStepClick(1)}>Payment</Step>
      </Stepper> */}
       <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <HomeIcon className="h-5 w-5" />
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <UserIcon className="h-5 w-5" />
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <CogIcon className="h-5 w-5" />
        </Step>
        {/* Thêm một Step mới cho trang Document
        <Step onClick={() => setActiveStep(3)}>
          <DocumentIcon className="h-5 w-5" />
        </Step> */}
      </Stepper>
      </div>
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      {activeStep === 0 && <AddressForm formData={formData.address} onSubmit={handleAddressSubmit} handlePrev={handlePrev} isFirstStep={isFirstStep} />


}
      {activeStep === 1 && <PaymentForm formData={formData.payment} onSubmit={handlePaymentSubmit} handlePrev={handlePrev}/>
}
{activeStep === 2 && <Thankorder  handlePrev={handlePrev}/>
}
    </div>
  );
}

export default Checkout;
