// export default Payment;
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe chưa sẵn sàng hoặc các thành phần Elements chưa được tạo
      return;
    }

    const result = await stripe.confirmCardPayment('your_client_secret', {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Customer Name',
          address: {
            line1: '123 ABC Street',
            city: 'City',
            state: 'State',
            postal_code: '12345',
            country: 'Country',
          },
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      // Xử lý kết quả thanh toán thành công
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default Payment;
