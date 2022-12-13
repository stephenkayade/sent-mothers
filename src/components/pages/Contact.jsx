import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/partials/Footer'
import Navbar from '../layouts/partials/Navbar'
import { FaFacebook } from 'react-icons/fa'
import { MdOutlineStream } from 'react-icons/md'
import { ImYoutube2 } from 'react-icons/im'
import {AiOutlineInstagram} from 'react-icons/ai'

// import GoogleMapReact from 'google-map-react';
// import MapMarker from './MapMarker';

const About = () => {
    return (
        <>
            <Navbar />
            <main className='main pb-md-5 pb-3'>
                <div className="container">
                    <h1 className='text-center pb-3 pt-md-5 mt-md-5 pt-5'>Contact Us </h1>
                    <p className="text-light text-center pb-2 px-md-0 px-4">Please, get in touch with us.</p>
                </div>
            </main>
            {/* <section className="map">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <GoogleMapReact
                                yesIWantToUseGoogleMapApiInternals={true}
                                bootstrapURLKeys={{
                                    key: process.env.REACT_APP_MAPS_APIKEY,
                                    language: 'en',
                                    region: 'ng',
                                    libraries: ['drawing'].join(',')
                                }}
                                defaultCenter={{ lat: 3.4680438225674246, lng: 6.42703016906005 }}
                                defaultZoom={15}
                                options={{
                                    disableDefaultUI: true,
                                    mapTypeControl: true,
                                    mapTypeControlOptions: {
                                        style: 2
                                    },
                                    streetViewControl: true,
                                    scrollwheel: false,
                                    fullscreenControl: true,
                                    fullscreenControlOptions: {
                                        position: 1
                                    },
                                    zoomControl: true,
                                    zoomControlOptions: {
                                        position: 3
                                    },
                                    styles: [{
                                        featureType: 'poi',
                                        elementType: 'labels',
                                        stylers: [{ visibility: 'off' }, { 'saturation': 50 }, { 'gamma': 0.5 }]
                                    }]
                                }}
                            >
                                <MapMarker
                                    lat={3.4680438225674246}
                                    lng={6.42703016906005}
                                    name={'sent mothers'}
                                    type={'main'}
                                />
                                <MapMarker
                                    lat={3.4680438225674246}
                                    lng={6.42703016906005}
                                    name={'sent mothers'}
                                    type={'similar'}
                                />
                            </GoogleMapReact>
                        </div>
                        <div className="col-12 col-md-4"></div>
                    </div>
                </div>
            </section> */}
            <section className="contact__us p-md-5 p-0">
                <div className="container">
                    <div className="contact d-md-flex d-block justify-content-md-between align-items-center">
                        <div className="get-in__touch shadow px-md-5 px-3 py-md-5 py-3">
                            <h2 className='pb-md-0 pb-4 pt-md-0 pt-3'>GET IN TOUCH <br /> WITH US</h2>
                            <div className="contact__card">
                                <div className="cards phone-card shadow mb-3">
                                    <h3 className='text-dark'>Address</h3>
                                    <p className='text-dark mb-0 pb-0'>2B, Certain Women Close, Redemption Camp Lagos Ibadan Expressway</p>
                                </div>
                                <div className="cards loc-card shadow">
                                    <h3 className='text-dark'>Email</h3>
                                    <p className='text-dark mb-0 pb-0'>sentmothersgph@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="social__media px-md-5 px-0 py-md-5 py-3 rounded-3">
                            <h2 className='text-dark pb-3 fs-24'>CONNECT WITH US <br /> VIA OUR PLATFORMS</h2>
                            <div className="social_media_card">
                                <a href='https://www.facebook.com/sentmothersgph' target='_blank' className="social__cards">
                                    <FaFacebook className='fs-48 text-primary pb-2 contact-icon' />
                                    <span className="text-muted fs-12 pb-0 mb-0">facebook</span>
                                </a>
                                <a href='https://www.instagram.com/sentmothers_gph' target='_blank' className="social__cards">
                                    <AiOutlineInstagram className='fs-48 text-danger pb-2 contact-icon' />
                                    <span className="text-muted fs-12 pb-0 mb-0">Instagram</span>

                                </a>
                                <a href='https://www.youtube.com/@adisaoyetomi/videos' target='_blank' className="social__cards">
                                    <ImYoutube2 className='fs-48 text-danger contact-icon' />
                                    <span className="text-muted fs-12 pb-0 mb-0">Youtube</span>
                                </a>
                                <a href='https://www.mixlr.com/tomi-adisa' target='_blank' className="social__cards">
                                    <MdOutlineStream className='fs-48 text-danger pb-2 contact-icon' />
                                    <span className="text-muted fs-12 pb-0 mb-0">Mixlr</span>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default About
