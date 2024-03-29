import React from 'react'
import bag from '../../Images/bagwithhand.png'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminHome() {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBlock: "10px" }} >
                <div className='me-3 p-3 fs-3' style={{ width: "49%", height: "250px", float: "left", backgroundColor: "#89aed3", borderRadius: "30px" }} onClick={() => navigate('/admin-home/allcategory')}>
                    See All Category
                </div>
                <div className='p-3 fs-3' style={{ width: "48%", height: "250px", float: "left", backgroundColor: "#215382", borderRadius: "30px" }} onClick={() => navigate('/admin-home/allproduct')}>
                    See All product
                </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                <div style={{ width: "33%", marginRight: "10px" }}>
                    <div className='p-3 fs-3 text-light' style={{ width: "100%", height: "200px", marginBottom: "10px", borderRadius: "30px", backgroundColor: "#052a4e" }} onClick={() => navigate('/admin-home/getreview')}>
                        See All Customer review
                    </div>
                    <div className='p-3 fs-3 text-light' style={{ width: "100%", height: "200px", borderRadius: "30px", backgroundColor: "#1d4265" }} onClick={() => navigate('/admin-home/getUsers')}>
                        See All User
                    </div>
                </div>
                <div style={{ width: "32%", marginRight: "10px" }}>
                    <div className='p-3 fs-3' style={{ width: "100%", height: "300px", marginBottom: "10px", borderRadius: "30px", backgroundColor: "#5c94c9" }} onClick={() => navigate('/create-category')}>
                        Add Category
                    </div>
                    <div className='p-3 fs-3' style={{ width: "100%", height: "100px", borderRadius: "30px", backgroundColor: "#89aed3" }}>
                        Add Key trends
                    </div>
                </div>
                <div style={{ width: "32%" }}>
                    <div style={{ height: "410px", borderRadius: "30px", backgroundColor: "#052a4e" }} onClick={() => navigate('/create-product')}>
                        <div className='w-50 d-flex justify-content-center pt-2 ps-2 text-light'>
                            <h1>
                                Add product
                            </h1>
                        </div>
                        <div className='d-flex justify-content-end align-item-end'>
                            <img src={bag} alt='' style={{ width: "350px", height: "350px" }} />
                        </div>
                    </div>
                </div>

                {/* <div className='bg-info' style={{ width: "30%", height: "270px", float: "left" }}>

                </div>
                <div className='bg-secondary' style={{ width: "30%", height: "400px", float: "left" }}>

                </div> */}
            </div>
        </div>
    )
}
