import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/partials/Footer'
import Navbar from '../layouts/partials/Navbar'

const Partner = () => {
    return (
        <>
            <Navbar />
            <main className='main pb-md-5 pb-3'>
                <div className="container">
                    <h1 className='text-center pb-3 pt-md-5 mt-md-5 pt-5'>Partner With Sentmothers <br />
                        Global Prayer Hub.</h1>
                    <p className="text-light text-center pb-2 px-md-0 px-4">We would love to Partner with you.</p>

                </div>
            </main>
            <section className="partner py-md-5 py-3">
                <div className="container">
                    <h2 className='text-center onpurple font-600 fs-38 pb-md-5 pb-4'>Donate Now</h2>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="donate__card mx-md-2 mx-0 mb-3  shadow p-3 pb-5 bg-white rounded-3">
                                <div className="card-img">
                                    <img src="https://res.cloudinary.com/uridevmedia/image/upload/v1670432520/sentmothers/img_rubies_urrjkf.png" className='img-fluid rounded-3' alt="ruby" />
                                </div>
                                <div className="d-flex justify-content-between px-md-4 px-3 py-4 mb-3">
                                    <p className="onpurple fs-24 font-600">Ruby</p>
                                    <p className='py-1 px-4 rounded-3 onpurple font-600'>#5,000</p>
                                </div>
                                <a href='https://paystack.com/pay/smruby' className='rounded-3 px-md-4 px-3 py-2 mx-md-4 mx-3 text-white btn__donate' target='_blank' >Donate</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="donate__card mx-md-2 mx-0 mb-3 shadow p-3 pb-5 bg-white rounded-3">
                                <div className="card-img">
                                    <img src="https://res.cloudinary.com/uridevmedia/image/upload/v1670432504/sentmothers/img_sapphire_nuqxn1.png" className='img-fluid rounded-3' alt="sapphire" />
                                </div>
                                <div className="d-flex justify-content-between px-md-4 px-3 py-4 mb-3">
                                    <p className="onpurple fs-24 font-600">Sapphire</p>
                                    <p className='py-1 px-4 rounded-3 onpurple font-600'>#20,000</p>
                                </div>
                                <a href='https://paystack.com/pay/smsapphire' className='rounded-3 px-md-4 px-3 py-2 mx-md-4 mx-3 text-white btn__donate' target='_blank' >Donate</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="donate__card mx-md-2 mx-0 mb-3  shadow p-3 pb-5 bg-white rounded-3">
                                <div className="card-img">
                                    <img src="https://res.cloudinary.com/uridevmedia/image/upload/v1670432551/sentmothers/img_diamond_buy1pb.png" className='img-fluid rounded-3' alt="diamond" />
                                </div>
                                <div className="d-flex justify-content-between px-md-4 px-3 py-4 mb-3">
                                    <p className="onpurple fs-24 font-600">Diamond</p>
                                    <p className='py-1 px-4 rounded-3 onpurple font-600'>#30,000</p>
                                </div>
                                <a href='https://paystack.com/pay/smdiamond' className='rounded-3 px-md-4 px-3 py-2 mx-md-4 mx-3 text-white btn__donate' target='_blank' >Donate</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow px-4 py-3 mx-2 rounded-3">
                        <h4 className='onpurple fw-bold fs-24 pb-md-3 pb-2 mx-2'>Bank Details:</h4>
                        <div className="d-md-flex d-block">
                            <p className='bg-light mb-md-0 mb-3 mx-2 px-3 py-2 border-purple rounded-3 shadow-sm'>
                                <span className='onpurple fw-semibold fs-18'>Account Name: </span>
                                <span className='mx-3 fw-bold'>Sent Mothers Global Prayer Hub</span>
                            </p>
                            <p className='bg-light mb-md-0 mb-3 mx-2 px-3 py-2 border-purple rounded-3 shadow-sm'>
                                <span className='onpurple fw-semibold fs-18'>Bank Name:</span>
                                <span className='mx-3 fw-bold'>Wema Bank</span>
                            </p>
                            <p className='bg-light mb-md-0 mb-3 mx-2 px-3 py-2 border-purple rounded-3 shadow-sm'>
                                <span className='onpurple fw-semibold fs-18'>Account Number:</span>
                                <span className='mx-3 fw-bold'>8270003904</span>
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Partner
