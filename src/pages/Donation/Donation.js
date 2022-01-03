import React, { useState } from 'react';
import './donation.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import DonationPartners from './DonationPartners/DonationPartners';

const Donation = () => {
    const [amount, setAmount] = useState('');
    console.log(amount)
    const stripePromise = loadStripe('pk_test_51JvrhSADdTbXZK36qpL6RcLHtpgImTVxEfM6IDSUkA2LUw0cZAuYD7F0fXZI6dFedosjp6kji0QsIVStSdul9uAC00A6DtoiiB')
    return (
        <>
            <Header />
            <div className='donation-container'>
                <div className='row align-items-center justify-content-center'>
                    <div className="col-12 col-md-6 col-lg-6">
                        <h1 className='text-light fw-1 fs-1'>Donate</h1>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className='donation'>
                            <h3>Choose your amount</h3>
                            <div className='d-flex justify-content-between'>
                                <p onClick={() => setAmount(10)}>$10</p>
                                <p onClick={() => setAmount(25)}>$25</p>
                                <p onClick={() => setAmount(100)}>$100</p> <br />

                            </div>
                            <input onBlur={e => setAmount(e.target.value)} placeholder='Choose Amount' type="number" />
                            <div className='donation-period d-flex justify-content-between'>
                                <button>One Time</button>
                                <button>Monthly</button>
                            </div>
                            <div style={{ background: 'white', padding: '15px' }} className="mt-5">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm amount={amount} />
                                </Elements>
                            </div>
                            <div className='donation-container row'>
                                <div className="col-md-7 d-flex align-items-center justify-content-center">
                                    <div>
                                        <h1 style={{ fontSize: '40px' }} className='text-light fw-1 fs-1'>Donate</h1>
                                        <p className='text-light fw-1 fs-3'>100% of your donation will fund for poor and needy people</p>
                                    </div>

                                </div>
                                <div className="col-md-5 ">
                                    <div className='donation'>
                                        <h3>Choose your amount</h3>
                                        <div className='d-flex justify-content-between'>
                                            <p onClick={() => setAmount(10)}>$10</p>
                                            <p onClick={() => setAmount(25)}>$25</p>
                                            <p onClick={() => setAmount(100)}>$100</p> <br />

                                        </div>
                                        <input className='mt-4 py-2' onBlur={e => setAmount(e.target.value)} placeholder='Choose Amount' type="number" />
                                        <div className='mt-4 donation-period d-flex justify-content-between'>
                                            <button className='py-2'>One Time</button>
                                            <button>Monthly</button>
                                        </div>
                                        <div style={{ background: 'white', padding: '15px' }} className="mt-5">
                                            <Elements stripe={stripePromise}>
                                                <CheckoutForm amount={amount} />
                                            </Elements>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DonationPartners />
            <Footer />
        </>
    );
};

export default Donation;