import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 1000;
   const publishableKey = "pk_test_51H1x30Dg9d6yaN3KTO1Qmhug4XBa3S5lWaqL3KGyA9Mv22Aqyqi599tKc9JAS25SJotpVIc6GGQixpUL34ihGdET00JJFzWeQB";

   const onToken = token => {
      console.log(token);
      alert("Payment Successful");
   };

   return (
      <StripeCheckout
         label="Pay Now"
         name="Gents Stop"
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

export default StripeCheckoutButton;