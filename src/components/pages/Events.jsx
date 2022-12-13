import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/partials/Footer'
import Navbar from '../layouts/partials/Navbar'

const Events = () => {

    const events = [
        {
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432511/sentmothers/img_1_ogd4sf.jpg'
        },
        {
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432567/sentmothers/img_2_vznhaz.jpg'
        },
        {
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432544/sentmothers/img_3_n8bmjv.jpg'
        },
        {
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432546/sentmothers/img_4_d3mojg.jpg'
        },
        {
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432564/sentmothers/img_5_s8fkdv.jpg'
        },
        {
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432535/sentmothers/img_6_wwibbi.jpg'
        },
        {
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432563/sentmothers/img_7_bqttyl.jpg'
        },
        {
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432549/sentmothers/img_8_ckyywr.jpg'
        },
    ]


    return (
        <>
            <Navbar />
            <main className='main pb-md-5 pb-3'>
                <div className="container">
                    <h1 className='text-center pb-3 pt-md-5 mt-md-5 pt-5'>Past Events</h1>
                    <p className="text-light text-center pb-2 px-md-0 px-4">A mother is not only one with a child. A mother is one with a burden for the next generation</p>

                </div>
            </main>
            <section className="p-md-5 p-3">
                <div className="container">
                    <div className=" my-md-5 my-3 image-list">
                        {
                            events &&
                            events.length > 0 &&
                            events.map((e, index) =>
                                <>
                                    <img src={`${e.imgSrc}`} className='event-card-image ui-full-bg-norm rounded-2' alt='events images' />
                                </>
                            )
                        }
                    </div>
                </div>

            </section>



            <Footer />
        </>
    )
}

export default Events