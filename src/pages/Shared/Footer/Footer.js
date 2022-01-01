import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import logo from '../../../images/logo1.png';
import './Footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-footer">
            <div className="container mt-5 pt-5 pb-3 text-light">
                <div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-4 mb-lg-0 mb-4 text-start">
                            <NavLink to="/">
                                <img src={logo} className='img-fluid w-50' alt="" />
                            </NavLink>
                            <p className='my-3 w-75'>Welcome and open yourself to your truest love this year with us! With the Release Process</p>
                        </div>
                        <div className="col-12 col-lg-2 col-md-6">
                            <ul className="list-style p-0">
                                <li className="text-start pb-2"><h4>Quick Links</h4></li>
                                <li className="text-start">About Us</li>
                                <li className="text-start">Causes</li>
                                <li className="text-start">Events</li>
                                <li className="text-start">Volunteer</li>
                                <li className="text-start">Contact</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <ul className="list-style p-0">
                                <li className="text-start pb-2"><h4>Our Address</h4></li>
                                <li className="text-start w-75"><p>Would you have any enquiries. Please feel free contact us.</p></li>
                                <li className="text-start my-1"><IoLocationSharp className="me-1" style={{ color: '#f15b43' }} /> 123 street, California</li>
                                <li className="text-start my-1"><BsFillTelephoneFill className="me-1" style={{ color: '#f15b43' }} />+88012345678</li>
                                <li className="text-start my-1"><MdEmail className="me-1" style={{ color: '#f15b43' }} /> hphand@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <ul className="list-style p-0">
                                <li className="text-start mb-1 pb-2"><h4>Newsletter</h4></li>
                                <li className="text-start mt-1 mb-2">You will be notified when something new will be appear.</li>
                                <li className="text-start mt-1">
                                    <button className='btn btn-danger rounded-pill px-3 button-color my-4'>DONATE NOW</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-5 mb-0">Copyright ©helping-hand-2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;