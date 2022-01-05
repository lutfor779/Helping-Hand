import React, { useRef } from 'react';
import { BsEnvelopeOpenFill, BsFillTelephoneFill, BsGlobe } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import emailjs from '@emailjs/browser';
import './Contact.css';


const Contact = () => {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_msrcwep', 'template_sjz2jec', e.target, 'user_AvRy9EKlSuedHbSJ3RMtc')
            .then(
                (result) => {
                    console.log(result.text);
                    window.alert(
                        "Email successfully sent, As soon as possible i will reply"
                    );
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }
    return (
        <>
            <Header></Header>
            <div className="section-header">
                <div className="container">
                    <div className="row text-center py-5">
                        <div className="col text-center">
                            <h2 className="text-white">Contact</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* section title end */}
            <section className="contact-area py-5 bg-light">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-content "  >
                                <BsFillTelephoneFill className="me-1 icon" style={{ color: '#f15b43' }} />
                                <h2>call us</h2>
                                <p>+8801923970212,01776-502993</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-content "  >
                                <IoLocationSharp className="me-1 icon" style={{ color: '#f15b43' }} />
                                <h2>office location</h2>
                                <p>Suite 02, Level 12, Sahera Tropical Center </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-content ">
                                <BsEnvelopeOpenFill className="me-1 icon" style={{ color: '#f15b43' }} />
                                <h2>email</h2>
                                <p>support@helpinghand.org</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="contact-content ">
                                <BsGlobe className="me-1 icon" style={{ color: '#f15b43' }} />
                                <h2>website</h2>
                                <p>http://helpinghand.org</p>
                            </div>
                        </div>
                    </div>
                    {/* contact icon end */}
                    <div className=" text-center text-uppercase py-3 mb-3">
                        <h2>Get <span className="text-color">in touch</span></h2>
                    </div>
                    <div className="row bg-light p-4">
                        <div className="col-lg-12">
                            <div className="contact">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <input type="text" name="name" className="form-control p-3" placeholder="Enter Your Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" name="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3">
                                                <input type="tel" name="telephone" className="form-control p-3" placeholder="Enter Your Phone" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="url" name="url" className="form-control p-3 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Web Site" />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="text" name="subject" className="form-control mb-3 p-3 " placeholder="Subject" />
                                    <textarea className="form-control mb-3 p-3 " name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                                    <button type="submit" className="btn theme-bg text-white p-3 px-4">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* contact form end */}
                </div>
            </section>
            <Footer />
        </>
    );
};
export default Contact;