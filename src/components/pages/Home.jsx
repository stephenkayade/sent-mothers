import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../layouts/partials/Button'
import Navbar from '../layouts/partials/Navbar'
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { MdOutlineModeComment, MdOutlineShare } from 'react-icons/md'
import Footer from '../layouts/partials/Footer';
import Carousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CarouselCard from '../layouts/partials/CarouselCard';
import WelcomeModal from './WelcomeModal';


const Home = () => {
    const [config, setConfig] = useState({
        display: true
    })

    const [active, setActive] = useState(true)
    const [show, setShow] = useState(false)

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const Next = (e) => {
        if (e) { e.preventDefault() }
        this.slider.slickNext();
    }
    const Previous = (e) => {
        if (e) { e.preventDefault() }
        this.slider.slickPrev();
    }

    const options = {
        margin: 30,
        loop: true,
        autoplay: false,
        autoplayTimeout: 4000,
        nav: true,
        dots: true,
        rewind: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 2,
            },
            800: {
                item: 3,
            },

            1000: {
                items: 3,

            }
        },
    };

    const toggleShow = (e) => {
        if (e) { e.preventDefault() }
        setShow(!show)

    }

    // const showForm = (e) => {
    //     if(e){e.preventDefault()}
    //     window.fd('form', {
    //         formId: '6390df0aa841ac869d3f8447',
    //         containerEl: '#fd-form-6390df0aa841ac869d3f8447'
    //     });

    // }

    return (
        <>
            <Navbar />
            <main className='main pb-md-5 pb-3'>
                <div className="container">
                    <h1 className='text-center pb-3 pt-md-5 mt-md-5 pt-5'>We are the Sent Mothers <br />
                        Global Prayer Hub.</h1>
                    <p className="text-light text-center pb-2 px-md-0 px-4">The Sent Mothers Global Prayer Hub is a MOVEMENT committed to creating a holy and fervent awareness in mothers.
                        At the Sent Mothers Prayer Hub, we believe A mother is not only one with a child. A mother is one with a burden for the next generation.
                    </p>
                    <div className="mb-3 w-100">
                        <Link to='' onClick={(e) => toggleShow(e)} className="text-purple bg-white py-md-4 px-md-5 py-3 mb-3 px-5 w-100">Welcome</Link>

                    </div>
                    <div className="d-md-flex justify-content-center d-block main-img py-md-5 mt-md-0 py-4 py-2">
                        <img src="https://res.cloudinary.com/uridevmedia/image/upload/v1670432558/sentmothers/img_main-1_fsvder.png" className='img1 d-md-block d-none' alt="" style={{ height: 250 }} />
                        <img src="https://res.cloudinary.com/uridevmedia/image/upload/v1670432503/sentmothers/img_main-2_wm3egm.png" className='mx-md-4 mx-0 img2 img-fluid' alt="" style={{ height: 300 }} />
                        <img src="https://res.cloudinary.com/uridevmedia/image/upload/v1670432510/sentmothers/img_main-3_apoydo.png" className='img3 d-md-block d-none' alt="" style={{ height: 250 }} />
                    </div>
                    {/* <div className="d-md-flex d-block" style={{ gap: '1rem' }}>
                        <div className="banner-1">
                            <h1 className='text-center pb-3 pt-md-0 mt-md-0 pt-5 fs-24 text-dark'>We are the Sent Mothers <br />
                                Global Prayer Hub.</h1>
                        </div>
                        <div className="banner-2">

                        </div>
                    </div> */}
                </div>


            </main>

            {/* ABOUT */}
            <section className='section-box'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6">
                            <img src="https://res.cloudinary.com/uridevmedia/image/upload/v1670432552/sentmothers/img_about_qk6rpa.png" className='img-fluid my-4' height={300} alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mx-custom">
                                <h2 className='fs-56 header-text font-600'>Who are we?</h2>
                                <p className='py-4 pr-4 fs-15 text-black-50'>The Sent Mothers Global Prayer Hub is a MOVEMENT committed to creating a holy and fervent awareness in mothers.
                                    At the Sent Mothers Prayer Hub, we believe A mother is not only one with a child. A mother is one with a burden for the next generation.
                                    We therefore encourage all women with a burden for the next generation whether single, separated, divorced or married to be a part of this Holy Movement</p>
                                <Link to='/about' className={` py-3 px-5 btn-purple fs-20 text-white d-inline-block button-sm`}>Learn More About Us</Link>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNER */}
            <section className='section-box'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 order-md-2 order-1">
                            <img src="https://res.cloudinary.com/uridevmedia/image/upload/v1670432509/sentmothers/img_partner_xpaa81.png" className='d-block img-fluid my-md-4 my-3' height={300} alt="" />
                        </div>
                        <div className="col-12 col-md-6 order-md-1 order-2">
                            <div className="p-w">
                                <h2 className='fs-56 header-text font-600'>Partner With Us Today</h2>
                                <p className='py-md-4 py-3 pr-4 mb-md-2 mb-0 fs-15 text-black-50'>We invite you to partner with us by donating to the Ministry.
                                    With God's help and your partnership via any of the partnership plan below, we are able to spread the Ministry and reach more sent mothers like you around the Globe.</p>

                                <Link to='/partner' className={` py-3 px-5 btn-purple fs-20 text-white d-inline-block button-sm`}>Partner With Us</Link>


                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* STORE */}
            {/* <section className='section-box'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6">
                            <img src="../../../images/img@store.png" className='d-block img-fluid my-4' height={300} alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mx-custom " >
                                <h2 className='fs-56 header-text font-600'>Visit Our Store</h2>
                                <p className='py-md-4 py-3 mb-md-2 mb-0 pr-4 fs-15 text-black-50'>Consectetur pellentesque at laoreet quisque pharetra.
                                    A bibendum metus odio tortor imperdiet amet, sagittis. Viverra donec turpis lorem fames venenatis sem.
                                    Dictum pellentesque mattis a egestas auctor. Purus feugiat donec sit nibh massa ipsum. Orci nunc phasellus l
                                    ectus purus mattis eget viverra mus et. Ultrices id.</p>
                                <Button
                                    buttonName='Visit Our Store'
                                    className=' py-3 px-5 btn-purple fs-20'
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </section> */}

            {/* PAST EVENTS */}
            {/* <section className='section-box'>
                <div className="container">
                    <h2 className='fs-56 header-text font-600'>Past Events</h2>

                    <Carousel
                        className="owl-theme prod-slider"
                        loop {...options}>


                    </Carousel>
                </div>
            </section> */}

            {/* SUBSCRIBE */}


            {/* EVENTS */}
            <section id='events' className="section-box section-box-rm bg-blue" style={{ zIndex: 1 }}>
                <div className="container">

                    <div className="row p-md-0 p-3">
                        <div className="col-12 col-md-4" style={{ position: 'relative' }}>
                            <h2 className='fs-48 font-600 text-white header-text mb-md-4 mb-3'>Here Are Some Of Our Upcoming Events.</h2>
                            <p className='fs-14 font-400 mb-md-5 mb-3' style={{ color: '#f2f2f2' }}>Come Join virtous mothers in this great revival</p>
                            <a href='https://view.flodesk.com/pages/6385b34fe23bcf78aedfe502' target="_blank" className={` py-3 px-4 bg-white text-purple fs-18 my-md-0 my-3 text-white d-inline-block button-sm fw-bold`}>Register Now</a>
                            <img src="../../../images/icons/img@abs-2.svg" className='d-md-block d-none' alt="" height={'230px'} width={'550px'} style={{ position: 'absolute', bottom: '-150px', left: '-200px', zIndex: -0.5 }} />

                        </div>
                        <div className="col-12 col-md-8">

                            <div className='mx-md-3 mx-0'>

                                <div className=''>
                                    <Carousel
                                        className="owl-theme prod-slider"
                                        loop {...options}>
                                        <CarouselCard />
                                        <CarouselCard />
                                        <CarouselCard />




                                        {/* <div className='bg-white slider-card card rounded-0' >
                                            <img src="../../../images/img@main-2.png" alt="" className="img-fluid" />
                                            <div className="card-body">
                                                <h3 className='fs-18'>SMGPH</h3>
                                                <p className='mb-3 fs-15'>Redemption Camp</p>
                                                <p className='fs-13'>Non, vel, risus lacus eu lorem dolor. Faucibus nibh eu dignissim velit tristique ut non neque ut. In facilisis sit.</p>

                                            </div>
                                        </div> */}

                                    </Carousel>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIES */}
            <section className="section-box">
                <div className="container">
                    <div className="row px-md-5 px-0">
                        <div className="col-12 col-md-6">
                            <div className="mx-3 my-3">

                                <h2 className='fs-48 font-600 header-text mb-md-2 mb-2' style={{ maxWidth: 440, width: '100%' }}>Testimonies from SMGPH</h2>
                                <span className='fs-14'>We look forward to your testimonies, please send them to: <span>
                                    <a href="mailto:testimonies@sentmothers.com" target='_blank' rel="noopener noreferrer" className="text-purple">testimonies@sentmothers.com</a></span>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink pink-bg p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>01</h4>
                                <div>
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>I want to bless the name of the Lord for his Divine healing.
                                        During the 17th day of the prayer and fasting challenge, Mrs. A raised a prayer point about healing and skin reaction. My daughter has been down for a while, my daughter woke up dancing and happy. Glory to God.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>02</h4>
                                <div>
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>Happy new month ma I really enjoyed last session….it was explosive May God continue to give you fresh fire in Jesus Name, Amen. I want to bless the name of the Lord for his Divine healing. During the 17th day of the prayer and fasting challenge, Mrs. A raised a prayer point about healing and skin reaction.
                                        My daughter has been down for a while, my daughter woke up dancing and happy. Glory to God.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>03</h4>
                                <div>
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>I want to testify to what God has done in my life. During the prayers, you gave a word that the following day someone will receive Goodnews at work. And I keyed into it. I got to work and changes were made to make work easier.
                                        As if that was not enough, my salary was reviewed and increased by 100%. God is indeed doing miracles for me. I return all glory to God. God bless you ma.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNERS */}
            <section className="section-box" style={{ backgroundColor: '#F9FAFB', position: 'relative' }}>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h2 className="fs-42 header-text font-600 text-center">We have partners in over 20 Countries.</h2>
                        <p className="fs-20 font-300 text-center pb-md-5 pb-2" style={{ color: '#6B7280', maxWidth: '950.23px', width: '100%' }}>With God's help and your partnership via any of the partnership plan below,
                            we are able to spread the Ministry and reach more sent mothers like you around the Globe.</p>

                        <div className="d-md-flex d-block justify-content-between align-items-center bg-white px-5 py-3 rounded-3 shadow" style={{ maxWidth: '950.23px', width: '100%', position: 'absolute', bottom: -60 }}>
                            <div>
                                <h2 className="fs-40 font-600 text-purple text-center">2000+</h2>
                                <p className='fs-14 text-center'>partners</p>

                            </div>
                            <div>
                                <h2 className="fs-40 font-600 text-purple text-center">2000+</h2>
                                <p className='fs-14 text-center'>Members</p>

                            </div>
                            <div>
                                <h2 className="fs-40 font-600 text-purple text-center">100+</h2>
                                <p className='fs-14 text-center'>Countries</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SMPH MEMBERS */}
            <section className="section-box mt-5" style={{ position: 'relative' }}>
                <img src="../../../images/icons/img@fixed-path.svg" className='d-md-block d-none' alt="" height={'300px'} width={300} style={{ position: 'absolute', top: '70px', left: 5, zIndex: -1 }} />

                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h2 className="fs-42 header-text font-600 text-center">Find SMPH members around you.</h2>
                        <p className="fs-20 font-300 text-center pb-md-3 pb-2" style={{ color: '#6B7280', maxWidth: '950.23px', width: '100%' }}>Connect with SMPH members around your location </p>

                        <div className="d-flex justify-content-between align-items-center bg-white rounded-3 shadow-sm" style={{ maxWidth: '1050px', width: '100%' }}>
                            <img src="https://res.cloudinary.com/uridevmedia/image/upload/v1670432503/sentmothers/img_map_mjcgte.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            {/* IG FEED */}

            {/* <section className="section-box">
        <div className="container">
            <div className="row">
                <h2 className='font-600 text-center pb-5'>Our Instagram Feed</h2>
                <div className="col-12 col-md-4">
                    <div className="my-md-0 my-3 mx-md-2 mx-0 box-shadow p-3 rounded-3">
                        <img src="../../../images/img@instag-1.png" alt="" className="img-fluid w-100 rounded-3" />
                        <div className="py-3">
                            <p>Mauris lectus tempor.</p>
                            <h4 className="font-600 mb-3 fs-22" style={{ width: '289px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            <p className='fs-14'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.</p>
                            <div className="d-flex justify-content-between">
                                <p className='fs-14'>2, Sept 2020</p>
                                <div className="">
                                    <AiOutlineLike className='text-purple' />
                                    <MdOutlineModeComment className='text-purple mx-2' />
                                    <MdOutlineShare className='text-purple' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">

                    <div className="mx-0 mx-md-2 my-md-0 my-3 box-shadow p-3 rounded-3">
                        <img src="../../../images/img@instag-2.png" alt="" className="img-fluid w-100 rounded-3" />
                        <div className="py-3">

                            <p>Mauris lectus tempor.</p>
                            <h4 className="font-600 mb-3 fs-22" style={{ width: '289px' }}>Egestas aliquet hendrerit. </h4>
                            <p className='fs-14'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.</p>
                            <div className="d-flex justify-content-between">
                                <p className='fs-14'>2, Sept 2020</p>
                                <div className="">
                                    <AiOutlineLike className='text-purple' />
                                    <MdOutlineModeComment className='text-purple mx-2' />
                                    <MdOutlineShare className='text-purple' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="my-md-0 my-3 mx-md-2 mx-0 box-shadow p-3 rounded-3">
                        <img src="../../../images/img@instag-3.png" alt="" className="img-fluid w-100 rounded-3" />
                        <div className="py-3">
                            <p>Mauris lectus tempor.</p>
                            <h4 className="font-600 mb-3 fs-22" style={{ width: '289px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </h4>
                            <p className='fs-14'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.</p>
                            <div className="d-flex justify-content-between">
                                <p className='fs-14'>2, Sept 2020</p>
                                <div className="">
                                    <AiOutlineLike className='text-purple' />
                                    <MdOutlineModeComment className='text-purple mx-2' />
                                    <MdOutlineShare className='text-purple' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

            {/* SUBSCRIBE */}

            <section>
                <div className="section-box" style={{ position: 'relative' }}>
                    <img src="../../../images/icons/img@fixed-path.svg" className='d-md-block d-none' alt="" height={'300px'} width={300} style={{ position: 'absolute', bottom: '-45px', left: 5, zIndex: -1 }} />
                    <img src="../../../images/icons/img@fixed-path.svg" className='d-md-block d-none' alt="" height={'300px'} style={{ position: 'absolute', top: '-45px', right: 10, zIndex: -1 }} />
                    <div className="container no-gutter">
                        <div id='news' className="d-flex justify-content-center flex-column align-items-center p-5">

                            <h3 className="fs-50 font-500 text-white header-text text-center pt-md-0 pt-5">Join 1000+ moms</h3>
                            <p className='text-light text-center py-md-3 py-4 px-0' style={{ maxWidth: 600, width: '100%' }}>Join now to get timely information.</p>
                            <div>
                                <a href='https://view.flodesk.com/pages/629c8552b7b14338733e5857' target='_blank' className={`  px-md-5 px-2 w-100 py-3 bg-white text-purple font-500 text-center fs-20 my-md-0 my-3 text-white button-sm`}>Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* FAQ */}

            {/* <section className="section-box fqa" style={{ backgroundColor: '#F9FAFB' }}>
                <div className="container">
                    <h2 className='font-600 pb-5'>Frequently asked questions</h2>
                    <div className="row pt-3" style={{ borderTop: '1px solid #E5E7EB' }}>
                        <div className="col-12 col-md-6 my-md-0 my-2">
                            <div className="">
                                <h4 className="font-500 fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-3">
                            <div className="mx-2 mb-3">
                                <p className="font-400 fs-16" style={{ lineHeight: 1.6 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque, mattis dignissim turpis duis et. Tellus sit pretium enim dui mauris. Id dui fringilla at massa lectus.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-2">
                            <div className="">
                                <h4 className="font-500 fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-3">
                            <div className="mx-2 mb-3">
                                <p className="font-400 fs-16" style={{ lineHeight: 1.6 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque, mattis dignissim turpis duis et. Tellus sit pretium enim dui mauris. Id dui fringilla at massa lectus.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-2">
                            <div className="">
                                <h4 className="font-500 fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-3">
                            <div className="mx-2 mb-3">
                                <p className="font-400 fs-16" style={{ lineHeight: 1.6 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque, mattis dignissim turpis duis et. Tellus sit pretium enim dui mauris. Id dui fringilla at massa lectus.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-2">
                            <div className="">
                                <h4 className="font-500 fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-3">
                            <div className="mx-2 mb-3">
                                <p className="font-400 fs-16" style={{ lineHeight: 1.6 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque, mattis dignissim turpis duis et. Tellus sit pretium enim dui mauris. Id dui fringilla at massa lectus.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-2">
                            <div className="">
                                <h4 className="font-500 fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-3">
                            <div className="mx-2 mb-3">
                                <p className="font-400 fs-16" style={{ lineHeight: 1.6 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque, mattis dignissim turpis duis et. Tellus sit pretium enim dui mauris. Id dui fringilla at massa lectus.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-2">
                            <div className="">
                                <h4 className="font-500 fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-md-0 my-3">
                            <div className="mx-2 mb-3">
                                <p className="font-400 fs-16" style={{ lineHeight: 1.6 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod neque, mattis dignissim turpis duis et. Tellus sit pretium enim dui mauris. Id dui fringilla at massa lectus.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
            <Footer />

            <WelcomeModal
                isShow={show}
                closeModal={toggleShow}
                modalTitle={'Welcome'}
                flattened={true}
                slim="slim-mlg"
            />

        </>
    )
}

export default Home