import React, { useState } from 'react';
import './donation.css';

const Donation = () => {
    const [amount, setAmount] = useState('');
    console.log(amount)
    return (
        <div className='donation-container row'>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <h1 className='text-light fw-1 fs-1'>Donate</h1>
            </div>
            <div className="col-md-6 ">
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

                    <button className='continue'>Continue</button>
                </div>

            </div>

        </div>
    );
};

export default Donation;