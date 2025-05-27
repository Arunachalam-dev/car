import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false); // ✅ Define loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    const res = await fetch('/api/stripe/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amount * 100,
        payment_method: paymentMethod.id,
      }),
    });

    const data = await res.json();
    if (data.success) {
      onSuccess(); // callback after payment
    } else {
      alert(data.error || "Payment failed");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="card-element" />
      <button
        type="submit"
        disabled={!stripe || !elements || loading}
        className="book_nows mt-3"
      >
        {loading ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
