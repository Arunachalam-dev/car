// StripeContainer.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51RNXskPVBz7lPjGMje7UMnwNCzgF3iFX6OteXx39ikdEF5UB9vrUiXQgXonnmMDKEHEyDbSDjyV39QHIPYr9vRxo00iINayUy8"); // Your Stripe PUBLIC key

export default function StripeContainer({ children }) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
