import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <>

            <footer className="footer bg-white px-2 px-md-5 pt-md-5 pt-3">
                <div className="container">
                    <div className="row border-bottom border-white">
                        <div className="col-12 col-md-4 mb-4">
                            <img src="../../../images/logo-white.svg" alt="" />
                            <div className='footer-socials mt-md-5 mt-4'>

                                <a href='/' target='_blank' rel='noreferrer' className='mx-2'><BsFacebook /></a>
                                <a href='/' target='_blank' rel='noreferrer' className='mx-2'><AiFillInstagram /></a>
                                <a href='/' target='_blank' rel='noreferrer' className='mx-2'><BsLinkedin /></a>
                            </div>

                        </div>
                        <div className="col-6 col-md-2">
                            <ul>
                                <li><a href="/" className='fs-18 fw-bold'>Website Links</a></li>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About </a></li>
                                <li><a href="/">Get in touch </a></li>
                                <li><a href="/">FAQS</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2">
                            <ul>
                                <li><a href="/" className='fs-18 fw-bold'>Services</a></li>
                                <li><a href="/">Architecture</a></li>
                                <li><a href="/">Buildings </a></li>
                                <li><a href="/">3d maps </a></li>
                                <li><a href="/">Structure design</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2">
                            <ul>
                                <li><a href="/" className='fs-18 fw-bold'>Developers</a></li>
                                <li><a href="/">Features</a></li>
                                <li><a href="/">Testimonials </a></li>
                                <li><a href="/">Referrers</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2">
                            <ul>
                                <li>
                                    <a href="/" className='fs-18 fw-bold'>Instagram Feed</a>
                                    <div className="row mt-4">
                                        <div className="col-4 col-md-4">
                                            <div className="mb-3 footer-gallery">

                                                <img src="../../../images/img@donate.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-4">
                                            <div className="mb-3 footer-gallery">

                                                <img src="../../../images/img@volunteer.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-4">
                                            <div className="mb-3 footer-gallery">

                                                <img src="../../../images/img@conf-1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-4">
                                            <div className="mb-3 footer-gallery">

                                                <img src="../../../images/img@fire-partner.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-4">
                                            <div className="mb-3 footer-gallery">

                                                <img src="../../../images/img@conf-1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-4">
                                            <div className="mb-3 footer-gallery">

                                                <img src="../../../images/img@volunteer.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-4">
                                            <div className="mb-3 footer-gallery">

                                                <img src="../../../images/img@volunteer.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-4">
                                            <div className="mb-3 footer-gallery">

                                                <img src="../../../images/img@donate.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-md-4">
                                            <div className="mb-3 footer-gallery">

                                                <img src="../../../images/img@fire-partner.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                    <p className="text-center text-white fs-13 mb-0 py-3">Non Copyrighted &copy; 2022 Design and upload by SMGPH</p>
                </div>
            </footer>

        </>
    )
}

export default Footer