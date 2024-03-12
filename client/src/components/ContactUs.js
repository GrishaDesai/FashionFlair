import React from 'react'
import '../css/ContactUs.css'

export default function ContactUs() {
    return (
        <>
            <div className='mainCContainer w-100'>
                <div class="mainContentContainer">
                    <div className='textContactContainer'>
                        <div class="contact-text">
                            <div style={{ width: "35%", float: "left" }}>
                                <h1 className='title'>Contact Us <i class="fa fa-long-arrow-right"></i></h1>
                            </div>
                            <div style={{ width: "50%", float: "left", marginLeft: "150px", marginTop: "30px" }}>
                                <div className='bg-danger mt-5' style={{ width: "100%" }}>
                                    <div className='m-3 box border-animation'>
                                        <i class="fa fa-map-marker mt-2" style={{ fontSize: "50px" }}></i>
                                        <h3>Our Shop Address</h3>
                                        <h6>Palm Court Bldg M, 5011B, 5th Floor,
                                            New Link Road, Beside Goregaon
                                            Sports Complex, Malad West,
                                            Mumbai, Maharashtra 400064</h6>
                                    </div>
                                    <div className=' m-3 box border-animation'>
                                        <i class="fa fa-envelope mt-2" style={{ fontSize: "50px" }}></i>
                                        <h3>General Enquiries</h3>
                                        <h6>fashionflare@gmail.com</h6>
                                    </div>
                                </div>
                                <div className='bg-danger' style={{ width: "100%" }}>
                                    <div className='m-3 box border-animation'>
                                        <i class="fa fa-phone mt-2" style={{ fontSize: "50px" }}></i>
                                        <h3>Call Us</h3>
                                        <h5>+91-8888888888</h5>
                                    </div>
                                    <div className=' m-3 box border-animation'>
                                        <i class='fa fa-clock-o mt-3' style={{ fontSize: "50px" }}></i>
                                        <h3>Our Timings</h3>
                                        <h6><p style={{ fontSize: "1.2em" }} className='fontstyle'>Mon - Sat : 10:00 AM - 07:00 PM</p>
                                            <p style={{ fontSize: "1.2em" }} className='fontstyle'>Sun : 10:00 AM - 01:00 PM</p></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
