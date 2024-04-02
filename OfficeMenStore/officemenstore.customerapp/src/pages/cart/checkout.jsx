import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Stepper,
  Step,
  Button,
} from '@material-tailwind/react';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
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
    payment: { cardNumber: '', expirationDate: '', cvv: '' },
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
    <div className="mt-6 gap-10 mr-5">
      {activeStep === 0 && (
        <AddressForm
          formData={formData.address}
          onSubmit={handleAddressSubmit}
          handlePrev={handlePrev}
          isFirstStep={isFirstStep}
        />
      )}
      {activeStep === 1 && (
        <PaymentForm formData={formData.payment} onSubmit={handlePaymentSubmit} handlePrev={handlePrev} />
      )}
      {activeStep === 2 && <Thankorder handlePrev={handlePrev} />}
    </div>
  );
}

export default Checkout;
