
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ amount }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('https://serene-bastion-42312.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ amount })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [amount])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        } else {
            setError('')
            console.log(paymentMethod);

        }
        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        } else {
            setError('');
            setSuccess('Your payment process successfully')
            console.log(paymentIntent)
            setProcessing(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='text-center'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'black',
                                '::placeholder': {
                                    color: 'black',
                                },
                            },
                            invalid: {
                                color: 'black',
                            },
                        },
                    }}
                />
                {processing ? <p className='text-danger mt-3'>Loading...</p> : <button style={{ backgroundColor: "#f15b43" }} className='btn w-50 mx-auto text-light mt-3' type="submit" disabled={!stripe || success}>
                    Pay $ {amount}
                </button>}
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
    );
};


export default CheckoutForm;