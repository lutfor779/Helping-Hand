import React from 'react';
import img1 from '../../../images/service1.png'
import img2 from '../../../images/service2.png'
import img3 from '../../../images/service3.png'
import img4 from '../../../images/service4.png'
import './Services.css'

const Services = () => {
    return (
        <div class="container my-5 text-center">
            <h1 className='mb-4'>Our Services</h1>
            <div class="row row-cols-1 row-cols-lg-4 g-3 g-lg-5 mx-5">
                <div class="col">
                    <div class="p-3 bg-food custom-shadow">
                        <img src={img1} className='img-fluid w-50 rounded-pill custom-shadow bg-light' alt="" />
                        <h4 className='my-4'>Healthy Food</h4>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 bg-water custom-shadow">
                        <img src={img2} className='img-fluid w-50 rounded-pill custom-shadow bg-light' alt="" />
                        <h4 className='my-4'>Clean Water</h4>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 bg-medical custom-shadow">
                        <img src={img3} className='img-fluid w-50 rounded-pill custom-shadow bg-light' alt="" />
                        <h4 className='my-4'>Medical Care</h4>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 bg-blood custom-shadow">
                        <img src={img4} className='img-fluid w-50 rounded-pill custom-shadow bg-light' alt="" />
                        <h4 className='my-4'>Donate Blood</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;