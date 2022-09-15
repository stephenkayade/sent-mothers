import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../layouts/partials/Button'
import Navbar from '../layouts/partials/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <main className='main'>
                <div className="container">
                    <h1 className='text-center pb-3 pt-md-5 pt-3'>We are the Sent Mothers <br />
                        Global Prayer Hub.</h1>
                    <p className="text-light text-center pb-2">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
                    <div className="mb-3">
                        <Link to='' className="text-purple bg-white py-md-4 px-md-5 py-2 px-3">Join Us</Link>

                    </div>
                    <div className="main-img py-md-5 py-2">
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
                            <img src="../../../images/img@about.png" className='d-block img-fluid my-4' height={300} alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mx-custom">
                                <h2 class='fs-56 font-600'>Who are we?</h2>
                                <p className='py-4 pr-4 fs-15 text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis hendrerit hendrerit maecenas augue ullamcorper. Neque ut quam diam orci arcu. Ipsum tempus blandit ut aliquam adipiscing sapien aliquam ut. Lacus dictum mauris quis dolor, sagittis. In euismod eu cras duis.</p>
                                <Button
                                    buttonName='Learn More About Us'
                                    className=' py-3 px-5 fs-20'
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
                                <h2 class='fs-56 font-600'>Partner With Us Today</h2>
                                <p className='py-4 pr-4 fs-15 text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis hendrerit hendrerit maecenas augue ullamcorper. Neque ut quam diam orci arcu.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet risus arcu, amet, gravida iaculis ullamcorper. Feugiat hendrerit quis feugiat velit. Fringilla tortor auctor placerat
                                    vitae integer eget morbi varius rhoncus. Amet, eget fermentum ipsum dictum urna, arcu potenti tristique. Nibh lectus feugiat augue orci et hendrerit elementum. Cras adipiscing odio erat gravida faucibus felis elit.</p>
                                <Button
                                    buttonName='Partner With Us'
                                    className=' py-3 px-5 fs-20'
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
                                <h2 class='fs-56 font-600'>Visit Our Store</h2>
                                <p className='py-4 pr-4 fs-15 text-black-50'>Consectetur pellentesque at laoreet quisque pharetra.
                                    A bibendum metus odio tortor imperdiet amet, sagittis. Viverra donec turpis lorem fames venenatis sem.
                                    Dictum pellentesque mattis a egestas auctor. Purus feugiat donec sit nibh massa ipsum. Orci nunc phasellus l
                                    ectus purus mattis eget viverra mus et. Ultrices id.</p>
                                <Button
                                    buttonName='Visit Our Store'
                                    className=' py-3 px-5 fs-20'
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home