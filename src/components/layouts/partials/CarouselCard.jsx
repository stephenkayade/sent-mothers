import React from 'react'
import { Link } from 'react-router-dom'

const CarouselCard = () => {

    const events = [
        {
            description: 'ANNUAL CONVENTION 2023',
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432511/sentmothers/img_1_ogd4sf.jpg'
        },
        {
            description: 'November Prayer Challenge 2023',
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432567/sentmothers/img_2_vznhaz.jpg'
        },
        {
            description: 'November Prayer Challenge 2023',
            imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432544/sentmothers/img_3_n8bmjv.jpg'
        },
        // {
        //     description: 'November Prayer Challenge 2021',
        //     imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432546/sentmothers/img_4_d3mojg.jpg'
        // },
        // {
        //     description: 'November Prayer Challenge 2021',
        //     imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432564/sentmothers/img_5_s8fkdv.jpg'
        // },
        // {
        //     description: 'November Prayer Challenge 2021',
        //     imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432535/sentmothers/img_6_wwibbi.jpg'
        // },
        // {
        //     description: 'November Prayer Challenge 2021',
        //     imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432563/sentmothers/img_7_bqttyl.jpg'
        // },
        // {
        //     description: 'November Prayer Challenge 2021',
        //     imgSrc: 'https://res.cloudinary.com/uridevmedia/image/upload/v1670432549/sentmothers/img_8_ckyywr.jpg'
        // },
    ]


    return (
        <>
            {
                events &&
                events.length > 0 &&
                events.map((e, index) =>
                    <>
                        <div className={`c-card mt-md-3 mt-0`} key={index}>
                            <div className='c-card-link mb-md-4 mb-0' to={``}>
                                <div className={`carousel-card  border-grey pdt1 pdr1 pdl1 pdb1`}>

                                    <div className='c-card-image ui-full-bg-norm' style={{ backgroundImage: `url(${e.imgSrc})` }}></div>
                                    <div className="px-md-3 px-2 py-md-4 py-3">
                                        <div className=''>
                                            <span className="fs-20 font-600 font-matterbold text-black pb-2 d-block">SMGPH</span>
                                            <div className=''>
                                                <p className='fs-13 text-muted pb-1'>Redemption Camp</p>
                                                <p className="text-dark fs-13">{e.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
        </>
    )
}

export default CarouselCard