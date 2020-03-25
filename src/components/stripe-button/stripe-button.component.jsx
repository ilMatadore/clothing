import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey= 'pk_test_uHwH5mIyIiLXqq34TjsUN0M400CsL1gScH';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (

    <StripeCheckout
        label='Pay Now'
        name='Eureka'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;