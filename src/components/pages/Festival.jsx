import React from 'react'
import Carousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"; import Navbar from '../layouts/partials/Navbar'
import { BsArrowRightShort } from 'react-icons/bs'
import Footer from '../layouts/partials/Footer';

const Festival = () => {

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
    return (
        <>
            <Navbar />
            <div id="festival__fire" className='pb-5'>

                <main>
                    <div className='container'>
                        <div className="festival">
                            <div className="festival__register p-md-4 p-3">
                                <h3 className='onpurple fs-18'>Register for Festival Of Fire</h3>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className='fs-12 mb-0'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo.</p>
                                    <a href="https://bit.ly/3X7gkzZ" rel="noreferrer" target='_blank' className=''><BsArrowRightShort className='fs-22' /></a>
                                </div>
                            </div>
                            <p className='festival__header'>Festival of Fire</p>
                        </div>
                    </div>
                </main>
                <section className="section">
                    <div className="speakers">
                        <h3 className='text-center onpurple fw-bold text-capitalize py-md-5 py-3 px-1 px-md-0'>
                            Our Speakers.
                            <div className="underline"></div>
                        </h3>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-10 col-md-3">
                                    <div className="speaker__card mb-4">
                                        <div className="bg-white w-100">
                                            <img src="../../../images/silhouette-1.png" alt="" className="img-fluid  fest-img" />
                                        </div>
                                        <div className="card-body guests px-md-4 py-md-3 px-3 py-2">
                                            <p className='onpurple'>01</p>
                                            <p className='fs-26 guest__name'>To be unveiled</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-10 col-md-3">
                                    <div className="speaker__card mb-4">
                                        <div className="bg-white w-100">

                                            <img src="../../../images/silhouette-2.png" alt="" className="img-fluid  fest-img" />
                                        </div>
                                        <div className="card-body guests px-md-4 py-md-3 px-3 py-2">
                                            <p className='onpurple'>02</p>
                                            <p className='fs-26 guest__name'>To be unveiled</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 col-md-3">
                                    <div className="speaker__card mb-4">
                                        <div className="bg-white w-100">

                                            <img src="../../../images/silhouette-3.jpg" alt="" className="img-fluid  fest-img" />
                                        </div>
                                        <div className="card-body guests px-md-4 py-md-3 px-3 py-2">
                                            <p className='onpurple'>03</p>
                                            <p className='fs-26 guest__name'>To be unveiled</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-10 col-md-3">
                                    <div className="speaker__card mb-4">
                                        <div className="bg-white w-100">

                                            <img src="../../../images/silhoutte-4.webp" alt="" className="img-fluid  fest-img" />
                                        </div>
                                        <div className="card-body guests px-md-4 py-md-3 px-3 py-2">
                                            <p className='onpurple'>04</p>
                                            <p className='fs-26 guest__name'>To be unveiled</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-10 col-md-3">
                                    <div className="speaker__card mb-4">
                                        <div className="bg-white w-100">

                                            <img src="../../../images/silhouette-1.png" alt="" className="img-fluid  fest-img" />
                                        </div>
                                        <div className="card-body guests px-md-4 py-md-3 px-3 py-2">
                                            <p className='onpurple'>05</p>
                                            <p className='fs-26 guest__name'>To be unveiled</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-10 col-md-3">
                                    <div className="speaker__card mb-4">
                                        <div className="bg-white w-100">

                                            <img src="../../../images/silhouette-2.png" alt="" className="img-fluid  fest-img" />
                                        </div>
                                        <div className="card-body guests px-md-4 py-md-3 px-3 py-2">
                                            <p className='onpurple'>06</p>
                                            <p className='fs-26 guest__name'>To be unveiled</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 col-md-3">
                                    <div className="speaker__card mb-4">
                                        <div className="bg-white w-100">

                                            <img src="../../../images/silhouette-3.jpg" alt="" className="img-fluid  fest-img" />
                                        </div>
                                        <div className="card-body guests px-md-4 py-md-3 px-3 py-2">
                                            <p className='onpurple'>07</p>
                                            <p className='fs-26 guest__name'>To be unveiled</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-10 col-md-3">
                                    <div className="speaker__card mb-4">
                                        <div className="bg-white w-100">

                                            <img src="../../../images/silhoutte-4.webp" alt="" className="img-fluid  fest-img" />
                                        </div>
                                        <div className="card-body guests px-md-4 py-md-3 px-3 py-2">
                                            <p className='onpurple'>08</p>
                                            <p className='fs-26 guest__name'>To be unveiled</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="conference">
                        <h3 className='text-center onpurple fw-bold text-capitalize py-md-5 py-3 px-1 px-md-0'>
                            Pictures from our last Conference
                            <div className="underline"></div>
                        </h3>
                        <div className="container">
                            <div className="conf">
                                <div className="conf-slider">
                                    <span style={{ '--i': 1 }}><img src="../../../images/img@conf-1.png" alt="" className="img-fluid" /></span>
                                    <span style={{ '--i': 2 }}><img src="../../../images/img@conf-1.png" alt="" className="img-fluid" /></span>
                                    <span style={{ '--i': 3 }}><img src="../../../images/img@conf-1.png" alt="" className="img-fluid" /></span>
                                    <span style={{ '--i': 4 }}><img src="../../../images/img@conf-1.png" alt="" className="img-fluid" /></span>
                                    <span style={{ '--i': 5 }}><img src="../../../images/img@conf-1.png" alt="" className="img-fluid" /></span>
                                    <span style={{ '--i': 6 }}><img src="../../../images/img@conf-1.png" alt="" className="img-fluid" /></span>
                                    <span style={{ '--i': 7 }}><img src="../../../images/img@conf-1.png" alt="" className="img-fluid" /></span>
                                    <span style={{ '--i': 8 }}><img src="../../../images/img@conf-1.png" alt="" className="img-fluid" /></span>
                                    <span style={{ '--i': 9 }}><img src="../../../images/img@conf-1.png" alt="" className="img-fluid" /></span>
                                    <span style={{ '--i': 10 }}><img src="../../../images/img@conf-1.png" alt="" className="img-fluid" /></span>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="testifiers">
                        <h3 className='text-center onpurple fw-bold text-capitalize py-md-5 py-3 px-1 px-md-0'>
                            Testimonies from our last Conference
                            <div className="underline"></div>
                        </h3>
                        <div className="row  align-items-center g-0">
                            <div className="col-12 col-md-3 px-md--0 px-3">
                                <div className="testimonies pink-bg px-5 py-4">
                                    <p className="onpurple fs-12">Testimonies</p>
                                    <p className="fs-28 fw-bold">Here’s what our users are saying.</p>
                                    <p className="fs-14">Our community of land owners is growing and we are glad we could help, you too can become one.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-9 p-4 p-md-0">
                                <Carousel
                                    className="owl-theme prod-slider"
                                    loop {...options}>

                                    <div className="testify">

                                        <div className="testifier">
                                            <div className="testimony">
                                                <p className='fs-13 mb-0'>Lorem ipsum dolor sit amet consectetur. Egestas euismod enim proin odio sem convallis suspendisse facilisis. In enim eros diam sagittis.</p>
                                                <p className="fs-13 pt-3 mb-0">-Mrs Ogidan</p>
                                            </div>
                                        </div>


                                    </div>

                                </Carousel>
                            </div>
                        </div>
                    </div>


                </section>
                <section className="section">
                    <div className="info_Section">
                        <h3 className='text-center text-capitalize pt-md-5 pt-3 px-1 px-md-0 pb-3 onpurple fw-bold'>
                            INFORMATION SECTION
                            <div className="underline"></div>
                        </h3>
                        <p className="fs-20 text-center light-text pb-md-5 pb-3  header__desc px-md-0 px-3" style={{ maxWidth: 450, width: '100%', margin: 'auto' }}>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo.</p>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <div className="info__cards mb-3 mb-md-0 py-md-5 py-3 px-md-5 px-3 mx-md-0 mx-2">
                                        <div className="info__underline mb-4"></div>
                                        <h4 className='text-white fs-38 info__text'>Venue</h4>
                                        <p className="fs-15 light-text">Anim aute id magna aliqua ad ad non deserunt sunt.
                                            Qui irure qui Lorem cupidatat commodo.Anim aute id magna aliqua ad ad non deserunt sunt.
                                            Qui irure qui Lorem cupidatat commodo.Anim aute id magna aliqua ad ad non deserunt sunt.
                                            Qui irure qui Lorem cupidatat commodo.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="info__cards mb-3 mb-md-0 py-md-5 py-3 px-md-5 px-3 mx-md-0 mx-2">
                                        <div className="info__underline mb-4"></div>
                                        <h4 className='text-white fs-38 info__text'>Accomodation</h4>
                                        <p className="fs-15 light-text">Anim aute id magna aliqua ad ad non deserunt sunt.
                                            Qui irure qui Lorem cupidatat commodo.Anim aute id magna aliqua ad ad non deserunt sunt.
                                            Qui irure qui Lorem cupidatat commodo.Anim aute id magna aliqua ad ad non deserunt sunt.
                                            Qui irure qui Lorem cupidatat commodo.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="info__cards mb-3 mb-md-0 py-md-5 py-3 px-md-5 px-3 mx-md-0 mx-2">
                                        <div className="info__underline mb-4"></div>
                                        <h4 className='text-white fs-38 info__text'>Venue</h4>
                                        <p className="fs-15 light-text">Anim aute id magna aliqua ad ad non deserunt sunt.
                                            Qui irure qui Lorem cupidatat commodo.Anim aute id magna aliqua ad ad non deserunt sunt.
                                            Qui irure qui Lorem cupidatat commodo.Anim aute id magna aliqua ad ad non deserunt sunt.
                                            Qui irure qui Lorem cupidatat commodo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="contribute pb-5">
                        <h3 className='text-center text-capitalize pt-md-5 pt-3 px-1 px-md-0 pb-3 onpurple fw-bold'>
                            CONTRIBUTE TO SMGPH
                            <div className="underline"></div>
                        </h3>
                        <p className="fs-20 text-center light-text pb-md-5 pb-3 header__desc px-md-0 px-3" style={{ maxWidth: 450, width: '100%', margin: 'auto' }}>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo.</p>
                        <div className="container">
                            <div className="row justify-content-center">

                                <div className="col-10 col-md-3 mb-3 mb-md-0">
                                    <div className="contribution__cards bg-light py-md-4 py-3 px-md-4 px-3">
                                        <div className="img-wrapper" style={{ background: 'url(../../../images/img@donate.png)' }}></div>
                                        <div className="card-body">
                                            <h4 className='donor fs-38 pt-3'>Donate</h4>
                                            <p className="fs-13 light-text">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo.</p>
                                            <div className=' d-flex justify-content-end my-4'>

                                                <a href='mailto:sentmotherspaypal@gmail.com' target='_blank' rel='noreferrer' className={`shadow py-md-2 py-1 sponsor-btn px-4 btn-purple border-dark border-3 fs-14 text-white button-sm`}>Donate</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 col-md-3 mb-3 mb-md-0">
                                    <div className="contribution__cards bg-light py-md-4 py-3 px-md-4 px-3">
                                        <div className="img-wrapper" style={{ background: 'url(../../../images/img@fire-partner.png)' }}></div>
                                        <div className="card-body">
                                            <h4 className='donor fs-38 pt-3'>Partnership</h4>
                                            <p className="fs-13 light-text">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo.</p>
                                            <div className=' d-flex justify-content-end my-4'>

                                                <a href='https://bit.ly/3WRS9Wo' target='_blank' rel='noreferrer' className={`shadow py-md-2 py-1 sponsor-btn px-4 btn-purple border-dark border-3 fs-14 text-white button-sm`}>Partner</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 col-md-3 mb-3 mb-md-0">
                                    <div className="contribution__cards bg-light py-md-4 py-3 px-md-4 px-3">
                                        <div className="img-wrapper" style={{ background: 'url(../../../images/img@volunteer.png)' }}></div>
                                        <div className="card-body">
                                            <h4 className='donor fs-38 pt-3'>Volunteer</h4>
                                            <p className="fs-13 light-text">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo.</p>
                                            <div className=' d-flex justify-content-end my-4'>

                                                <a href='https://bit.ly/3InmHuW' target='_blank' rel='noreferrer' className={`shadow py-md-2 py-1 sponsor-btn px-4 btn-purple border-dark border-3 fs-14 text-white button-sm`}>Volunteer</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />

        </>
    )
}

export default Festival
