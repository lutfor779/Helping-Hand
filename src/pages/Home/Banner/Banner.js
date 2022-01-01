import React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import imgBanner from '../../../images/img-banner.png'
import './Banner.css'

const Banner = () => {

    return (
        <div className="img-banner">
            <div className="container bg-color-sm text-center">
                <div className='row align-items-center'>
                    <div className="col-12 col-md-6 col-lg-6 text-light text-start">
                        <h3 className="mt-3 text-color" >Helping Hand</h3>
                        <h1 className="mt-3 text-size" >We're On a Mission To Change World</h1>
                        <p className="my-4 pe-5">We’re helping non-profit fundraising <span className='text-color'>helping hand</span> organization. Our charity activities are taken place around the world. Let contribute to them with us by your hand to be a better life.</p>
                        <Link to="/contact"><button className="btn button-color rounded-pill text-light px-4 py-2">Learn More <span className='ms-2'><BsArrowUpRightCircle /></span></button></Link>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 pt-5'>
                        <img src={imgBanner} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;