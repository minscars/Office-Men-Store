import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Button, Card } from '@material-tailwind/react';
import { runFireworks } from '../../lib/utils';

export function Success() {
  const navigate = useNavigate();
  const navigatehome = () => {
    navigate('/user/product');
  };

  // const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    // localStorage.clear();
    // setCartItems([]);
    // setTotalPrice(0);
    // setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <Card className=" mt-5 mb-3 mx-0 h-100 overflow-hidden  border border-blue-gray-100 shadow-sm mr-5 ">
        <div class="bg-gray-100 h-screen">
          <div class="bg-white p-6  md:mx-auto">
            <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div class="text-center">
              <p class=" text-base text-gray-600 font-semibold text-center">Thank you </p>
              <h3 class="md:text-2xl text-gray-900 my-2 font-semibold">Your order is confirmed</h3>
              <p> Have a great day! </p>
              <div class="py-10 text-center">
                <Button onClick={navigatehome}>GO BACK</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Success;
