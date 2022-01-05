import React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import imgDonate from '../../../images/donate.png';
import './HelpPeople.css'

const HelpPeople = () => {
    return (
        <div className='container donate-banner bg-danger mb-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 col-lg-6 text-light text-center mt-3'>
                    <h1>If you want to help <br /> Hopeless People?</h1>
                    <Link to="/donation"><button className="btn donate-button rounded-pill px-4 py-2 my-3">Donate Now<span className='ms-2'><BsArrowUpRightCircle /></span></button></Link>
                </div>
                <div className='col-12 col-md-6 col-lg-6 text-center py-3'>
                    <img src={imgDonate} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HelpPeople;