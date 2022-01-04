import React from 'react';
import img1 from '../../../images/sponsor1.png';
import img2 from '../../../images/sponsor2.png';
import img3 from '../../../images/sponsor3.png';
import img4 from '../../../images/sponsor4.png';
import img5 from '../../../images/sponsor5.png';
import img6 from '../../../images/sponsor6.png';

const DonationPartners = () => {
    return (
        <div className="container text-center my-5">
            <h6 style={{color: "#f15b43"}}>Who Help Us</h6>
            <h3>Our Partners and Donors</h3>
            <p className='w-75 mx-auto'>We’re helping non-profit fundraising helping hand organization. Our charity activities are taken place around the world. </p>
            <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
                <div className="col">
                    <div className="p-3">
                        <img src={img1} className='img-fluid'  alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="p-3">
                        <img src={img2} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="p-3">
                        <img src={img3} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="p-3">
                        <img src={img4} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="p-3">
                        <img src={img5} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="p-3">
                        <img src={img6} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationPartners;