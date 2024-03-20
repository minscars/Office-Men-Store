import React, { useState, useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';

// import { useStateContext } from '../../context/StateContext';
import { runFireworks } from '../../lib/utils';

export function Success() {
  // const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    // setCartItems([]);
    // setTotalPrice(0);
    // setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <button type="button" style={{ width: '300px' }} className="btn" onClick={() => (window.location.href = '/')}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Success;
