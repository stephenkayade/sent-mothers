import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/partials/Footer'
import Navbar from '../layouts/partials/Navbar'
import { ImPointRight } from 'react-icons/im'

const About = () => {
    return (
        <>
            <Navbar />
            <main className='main pb-md-5 pb-3 about-main'>
                <div className="container">
                    <h1 className='text-center pb-3 pt-md-5 mt-md-5 pt-5'>About Sent Mothers <br />
                        Global Prayer Hub.</h1>
                    <p className="text-light text-center pb-2 px-md-0 px-4">If there is a Mother to pray, there is a God to answer. </p>

                </div>
            </main>
            <div className="container">
                <div className="about__info d-md-flex d-block align-items-center justify-content-around py-md-5 px-md-0 px-3 py-3">
                    <div className="about__objective">
                        <h2 className='text-uppercase pb-3'>Our Objectives</h2>
                        <p className=""> <span className='font-900 fs-12'><ImPointRight /></span> To raise an aggressive army of mothers who are fervent in and out of season to deliver a  Christ centered future to their children whether biological or spiritual.</p>
                        <p className=''> <span className='font-900 fs-12'><ImPointRight /></span> To train women in the art and science of intercession. Women who will stand in the gap until their seeds are fully established in God's counsel and the baton is passed to the next generation accurately.</p>
                        <p className=""> <span className='font-900 fs-12'><ImPointRight /></span> To equip women to have a vibrant relationship with God backed by miracles, signs and wonders.</p>
                        <p> <span className='font-900 fs-12'><ImPointRight className='onpurple' /></span> To create a strong network of women from every nation of the world who are on fire for God, bound to one another by the love of God, sharing all things in common and covering one another in prayer.</p>
                        <p> <span className='font-900 fs-12'><ImPointRight /></span> To birth a long lasting revival in every home through the life, character and intercession of women whether wife, mother, daughter or sister.</p>
                    </div>

                    <div>
                        <div className="about__vision mb-4">
                            <h2 className='text-uppercase pb-2'>Our Vision</h2>
                            <p className=""> <span className='font-900'>*</span> To set mothers on fire so they can raise burning prayer altars for their children.</p>
                        </div>

                        <div className="about__motto">
                            <h2 className='text-uppercase pb-2'>Our Motto</h2>
                            <p className=""> <span className='font-900'>*</span> Every child deserves prayers and spiritual sacrifices.</p>
                        </div>

                        <div className="about__values">
                            <h2 className='text-uppercase pb-2'>Our Values</h2>
                            <p className=""> <span className='font-900'>*</span> Love, Faith, Fellowship, Resourcefulness, Excellence.</p>
                        </div>

                    </div>


                </div>
            </div>


            <Footer />
        </>
    )
}

export default About
