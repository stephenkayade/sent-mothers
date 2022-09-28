import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../layouts/partials/Button'
import Navbar from '../layouts/partials/Navbar'
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {MdOutlineModeComment, MdOutlineShare} from 'react-icons/md'

const Home = () => {
    const [config, setConfig] = useState({
        display: true,
        width: 850
    })

    const [active, setActive] = useState(true)

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

    return (
        <>
            <Navbar />
            <main className='main pb-md-5 pb-3'>
                <div className="container">
                    <h1 className='text-center pb-3 pt-md-5 mt-md-5 pt-3'>We are the Sent Mothers <br />
                        Global Prayer Hub.</h1>
                    <p className="text-light text-center pb-2">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
                    <div className="mb-3">
                        <Link to='' className="text-purple bg-white py-md-4 px-md-5 py-2 px-3">Join Us</Link>

                    </div>
                    <div className="d-md-flex d-block main-img py-md-5 py-2">
                        <img src="../../../images/img@main-1.png" height={250} alt="" />
                        <img src="../../../images/img@main-2.png" className='mx-4' height={300} alt="" />
                        <img src="../../../images/img@main-3.png" height={250} alt="" />
                    </div>
                </div>

            </main>

            <section className='section-box'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6">
                            <img src="../../../images/img@about.png" className='img-fluid my-4' height={300} alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mx-custom">
                                <h2 className='fs-56 font-600'>Who are we?</h2>
                                <p className='py-4 pr-4 fs-15 text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis hendrerit hendrerit maecenas augue ullamcorper. Neque ut quam diam orci arcu. Ipsum tempus blandit ut aliquam adipiscing sapien aliquam ut. Lacus dictum mauris quis dolor, sagittis. In euismod eu cras duis.</p>
                                <Button
                                    buttonName='Learn More About Us'
                                    className=' py-3 px-5 btn-purple fs-20'
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-box'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 order-2">
                            <img src="../../../images/img@partner.png" className='d-block img-fluid my-4' height={300} alt="" />
                        </div>
                        <div className="col-12 col-md-6 order-1">
                            <div className="" style={{ maxWidth: '89%', width: '100%' }}>
                                <h2 className='fs-56 font-600'>Partner With Us Today</h2>
                                <p className='py-4 pr-4 fs-15 text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis hendrerit hendrerit maecenas augue ullamcorper. Neque ut quam diam orci arcu.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet risus arcu, amet, gravida iaculis ullamcorper. Feugiat hendrerit quis feugiat velit. Fringilla tortor auctor placerat
                                    vitae integer eget morbi varius rhoncus. Amet, eget fermentum ipsum dictum urna, arcu potenti tristique. Nibh lectus feugiat augue orci et hendrerit elementum. Cras adipiscing odio erat gravida faucibus felis elit.</p>
                                <Button
                                    buttonName='Partner With Us'
                                    className=' py-3 px-5 btn-purple fs-20'
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='section-box'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6">
                            <img src="../../../images/img@store.png" className='d-block img-fluid my-4' height={300} alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mx-custom" >
                                <h2 className='fs-56 font-600'>Visit Our Store</h2>
                                <p className='py-4 pr-4 fs-15 text-black-50'>Consectetur pellentesque at laoreet quisque pharetra.
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
            </section>

            <section>
                <div className="section-box" style={{ position: 'relative' }}>
                    <img src="../../../images/icons/img@fixed-path.svg" className='d-md-block d-none' alt="" height={'300px'} width={300} style={{ position: 'absolute', bottom: '-45px', left: 5, zIndex: -1 }} />
                    <img src="../../../images/icons/img@fixed-path.svg" className='d-md-block d-none' alt="" height={'300px'} style={{ position: 'absolute', top: '-45px', right: 10, zIndex: -1 }} />
                    <div className="container no-gutter">
                        <div id='news' className="d-flex justify-content-center flex-column align-items-center p-5">

                            <h3 className="fs-50 font-500 text-white">Subscribe to our newsletter</h3>
                            <p className='text-light text-center py-3' style={{ maxWidth: 600, width: '100%' }}>Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque.</p>
                            <form>
                                <div className="form-group d-flex justify-content-center px-md-3 px-2">
                                    <input type="email" className="input form-control w-50 p-2 rounded-0" placeholder='' />
                                    <div className="mx-3"></div>
                                    <Button
                                        buttonName={'Subscribe'}
                                        className=' py-3 bg-white text-purple font-500 px-5 fs-20'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section-box bg-blue" style={{ zIndex: 1 }}>
                <div className="container">

                    <div className="row">
                        <div className="col-12 col-md-4" style={{ position: 'relative' }}>
                            <h2 className='fs-48 font-600 text-white mb-md-4 mb-3'>Here Are Some Of Our Upcoming Events.</h2>
                            <p className='fs-14 font-400 mb-md-5 mb-3' style={{ color: '#f2f2f2' }}>In ac, tellus mattis bibendum vitae enim odio in urna. Scelerisque massa scelerisque nulla aliquet. Mauris.</p>
                            <Button
                                buttonName='See All Events'
                                className=' py-3 px-4 bg-white text-purple fs-20'
                            />

                            <img src="../../../images/icons/img@abs-2.svg" className='d-md-block d-none' alt="" height={'230px'} width={'550px'} style={{ position: 'absolute', bottom: '-150px', left: '-200px', zIndex: -0.5 }} />

                        </div>
                        <div className="col-12 col-md-8">
                            <div className='mx-3 my-3'>
                                <button className="button mx-1 px-2 py-1 border-0" onClick={(e) => Previous(e)}>
                                    <BsArrowLeft className='btn-carous' />
                                </button>
                                <button className={`button ${active ? 'text-white btn-carousel carous' : ''} px-2 py-1 border-0`} onClick={(e) => Next(e)}>
                                    <BsArrowRight />
                                </button>
                            </div>

                            <div className='mx-3'>

                                <div
                                    style={{ width: config.width + "px", display: config.display ? "block" : "none" }}>
                                    <Slider {...settings}>
                                        <div className='bg-white card rounded-0' style={{ width: 100 }}>
                                            <img src="../../../images/img@main-1.png" alt="" className="img-fluid" />
                                            <div className="card-body">
                                                <h3 className='fs-18'>SMGPH</h3>
                                                <p className='mb-3 fs-15'>Redemption Camp</p>
                                                <p className='fs-13'>Non, vel, risus lacus eu lorem dolor. Faucibus nibh eu dignissim velit tristique ut non neque ut. In facilisis sit.</p>

                                            </div>
                                        </div>
                                        <div className='bg-white card rounded-0' style={{ width: 100 }}>
                                            <img src="../../../images/img@main-2.png" alt="" className="img-fluid" />
                                            <div className="card-body">
                                                <h3 className='fs-18'>SMGPH</h3>
                                                <p className='mb-3 fs-15'>Redemption Camp</p>
                                                <p className='fs-13'>Non, vel, risus lacus eu lorem dolor. Faucibus nibh eu dignissim velit tristique ut non neque ut. In facilisis sit.</p>

                                            </div>
                                        </div>
                                        <div className='bg-white card rounded-0' style={{ width: 100 }}>
                                            <img src="../../../images/img@main-3.png" alt="" className="img-fluid" />
                                            <div className="card-body">
                                                <h3 className='fs-18'>SMGPH</h3>
                                                <p className='mb-3 fs-15'>Redemption Camp</p>
                                                <p className='fs-13'>Non, vel, risus lacus eu lorem dolor. Faucibus nibh eu dignissim velit tristique ut non neque ut. In facilisis sit.</p>

                                            </div>
                                        </div>

                                    </Slider>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box">
                <div className="container">
                    <div className="row px-md-5 px-0">
                        <div className="col-12 col-md-6">
                            <div className="mx-3 my-3">

                                <h2 className='fs-48 font-600 mb-md-2 mb-2' style={{ maxWidth: 440, width: '100%' }}>Testimonies from SMGPH</h2>
                                <span className='fs-14'>We look forward to your testimonies, please send them to: <span>
                                    <a href="mailto:testimonies@sentmothers.com" target='_blank' className="text-purple">testimonies@sentmothers.com</a></span>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex bg-pink pink-bg p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-3 fs-28 font-600' style={{ color: '#ccc' }}>01</h4>
                                <div>
                                    <h5 className='mb-3 fs-28 font-600'>Mrs K from Ikorodu</h5>
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>Venenatis eget mi vivamus proin laoreet mollis. Vel turpis scelerisque auctor nisi, metus. In diam mi consectetur posuere congue neque, sed. Eu donec in amet bibendum maecenas orci purus nibh urna. Faucibus arcu nibh gravida volutpat.
                                        Nunc fermentum elementum ornare faucibus nunc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-3 fs-28 font-600' style={{ color: '#ccc' }}>02</h4>
                                <div>
                                    <h5 className='mb-3 fs-28 font-600'>Mrs K from Ikorodu</h5>
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>Venenatis eget mi vivamus proin laoreet mollis. Vel turpis scelerisque auctor nisi, metus. In diam mi consectetur posuere congue neque, sed. Eu donec in amet bibendum maecenas orci purus nibh urna. Faucibus arcu nibh gravida volutpat.
                                        Nunc fermentum elementum ornare faucibus nunc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-3 fs-28 font-600' style={{ color: '#ccc' }}>03</h4>
                                <div>
                                    <h5 className='mb-3 fs-28 font-600'>Mrs K from Ikorodu</h5>
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>Venenatis eget mi vivamus proin laoreet mollis. Vel turpis scelerisque auctor nisi, metus. In diam mi consectetur posuere congue neque, sed. Eu donec in amet bibendum maecenas orci purus nibh urna. Faucibus arcu nibh gravida volutpat.
                                        Nunc fermentum elementum ornare faucibus nunc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box" style={{ backgroundColor: '#F9FAFB', position: 'relative' }}>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h2 className="fs-42 font-600 text-center">We have partners in over 20 Countries.</h2>
                        <p className="fs-20 font-300 text-center pb-md-5 pb-2" style={{ color: '#6B7280', width: '950.23px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.</p>

                        <div className="d-flex justify-content-between align-items-center bg-white px-5 py-3 rounded-3 shadow" style={{ width: '950.23px', position: 'absolute', bottom: -60 }}>
                            <div>
                                <h2 className="fs-40 font-600 text-purple text-center">2000</h2>
                                <p className='fs-14 text-center'>Lorem</p>

                            </div>
                            <div>
                                <h2 className="fs-40 font-600 text-purple text-center">2000</h2>
                                <p className='fs-14 text-center'>Members</p>

                            </div>
                            <div>
                                <h2 className="fs-40 font-600 text-purple text-center">2000</h2>
                                <p className='fs-14 text-center'>Countries</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-5" style={{ position: 'relative' }}>
                <img src="../../../images/icons/img@fixed-path.svg" className='d-md-block d-none' alt="" height={'300px'} width={300} style={{ position: 'absolute', top: '70px', left: 5, zIndex: -1 }} />

                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h2 className="fs-42 font-600 text-center">Find SMPH members around you.</h2>
                        <p className="fs-20 font-300 text-center pb-md-3 pb-2" style={{ color: '#6B7280', width: '950.23px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.</p>

                        <div className="d-flex justify-content-between align-items-center bg-white rounded-3 shadow-sm" style={{ width: '1050px' }}>
                            <img src="../../../images/img@map.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box">
                <div className="container">
                    <div className="row">
                        <h2 className='font-600 text-center pb-5'>Our Instagram Feed</h2>
                        <div className="col-12 col-md-4">
                            <div className="my-md-0 my-2 mx-md-2 mx-0">
                                <img src="../../../images/img@instag-1.png" alt="" className="img-fluid w-100 rounded-3" />
                                <div className="py-3">
                                    <p>Mauris lectus tempor.</p>
                                    <h4 className="font-600 mb-3 fs-22" style={{width: '289px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                                    <p className='fs-14'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.</p>
                                    <div className="d-flex justify-content-between">
                                        <p className='fs-14'>2, Sept 2020</p>
                                        <div className="">
                                            <AiOutlineLike className='text-purple' />
                                            <MdOutlineModeComment  className='text-purple mx-2'/>
                                            <MdOutlineShare  className='text-purple'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            
                            <div className="mx-0 mx-md-2 my-md-0 my-2">
                                <img src="../../../images/img@instag-2.png" alt="" className="img-fluid w-100 rounded-3" />
                                <div className="py-3">
                                    <p>Mauris lectus tempor.</p>
                                    <h4 className="font-600 mb-3 fs-22" style={{width: '289px'}}>Egestas aliquet hendrerit. </h4>
                                    <p className='fs-14'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.</p>
                                    <div className="d-flex justify-content-between">
                                        <p className='fs-14'>2, Sept 2020</p>
                                        <div className="">
                                            <AiOutlineLike className='text-purple' />
                                            <MdOutlineModeComment  className='text-purple mx-2'/>
                                            <MdOutlineShare  className='text-purple'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="my-md-0 my-2 mx-md-2 mx-0">
                                <img src="../../../images/img@instag-3.png" alt="" className="img-fluid w-100 rounded-3" />
                                <div className="py-3">
                                    <p>Mauris lectus tempor.</p>
                                    <h4 className="font-600 mb-3 fs-22" style={{width: '289px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </h4>
                                    <p className='fs-14'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.</p>
                                    <div className="d-flex justify-content-between">
                                        <p className='fs-14'>2, Sept 2020</p>
                                        <div className="">
                                            <AiOutlineLike className='text-purple' />
                                            <MdOutlineModeComment  className='text-purple mx-2'/>
                                            <MdOutlineShare  className='text-purple'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home