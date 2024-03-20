import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51Ovc3HK59UUfgaiCt9snihZ1Z2rznv9aUA7qQc4nUGa8E7lW1aT0z9bVlmN8QCv6Hkgnynzf0xvB3tXomCGLn90B00PcqCphnx',
    );
  }

  return stripePromise;
};

export default getStripe;
