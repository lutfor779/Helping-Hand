import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const Donation = () => {
    const [amount, setAmount] = useState('');
    console.log(amount)
    const stripePromise = loadStripe('pk_test_51JvrhSADdTbXZK36qpL6RcLHtpgImTVxEfM6IDSUkA2LUw0cZAuYD7F0fXZI6dFedosjp6kji0QsIVStSdul9uAC00A6DtoiiB')
    return (
        <div className='py-5' style={{backgroundColor:'#f9cbbb'}}>
            <div className='row align-items-center justify-content-center mx-lg-5'>
                <div className="col-12 col-md-6 col-lg-6 m-0 p-0 h-100">
                    <div className='bg-dark text-light px-5 ms-lg-5 py-5'>
                        <h4 className='mb-4 text-center'>Choose Your Amount</h4>
                        <div className='d-flex justify-content-center text-center'>
                            <div class="row row-cols-4 g-2 g-lg-3">
                                <div>
                                    <p onClick={() => setAmount(10)} className='border rounded-3 px-4 m-0'>$10</p>
                                </div>
                                <div>
                                    <p onClick={() => setAmount(25)} className='border rounded-3 px-4 m-0'>$25</p>
                                </div>
                                <div>
                                    <p onClick={() => setAmount(50)} className='border rounded-3 px-4 m-0'>$50</p>
                                </div>
                                <div>
                                    <p onClick={() => setAmount(100)} className='border rounded-3 px-4 m-0'>$100</p>
                                </div>
                            </div>
                            <br />
                        </div>
                        <input onBlur={e => setAmount(e.target.value)} className='my-3 border py-2 rounded-3 px-2 w-100' placeholder='Custom Amount' type="number" />
                        <div className='d-flex justify-content-between'>
                            <button className='btn text-light'>One Time</button>
                            <button className='btn text-light'>Weekly</button>
                            <button className='btn text-light'>Monthly</button>
                        </div>
                        <div style={{ background: 'white', padding: '15px' }} className="mt-3 rounded-3">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm amount={amount} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;