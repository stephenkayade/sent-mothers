import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layouts/partials/Footer'
import Navbar from '../layouts/partials/Navbar'

const Testimonies = () => {
    return (
        <>
            <Navbar />
            <main className='main pb-md-5 pb-3'>
                <div className="container">
                    <h1 className='text-center pb-3 pt-md-5 mt-md-5 pt-5'>Testimonies </h1>
                    <p className="text-light text-center pb-2 px-md-0 px-4">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>

                </div>
            </main>
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
                                    {/* <h5 className='mb-3 fs-28 font-600'>Mrs A from Ikorodu</h5> */}
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>I want to bless the name of the Lord for his Divine healing.
                                        During the 17th day of the prayer and fasting challenge, Mrs. A raised a prayer point about healing and skin reaction. My daughter has been down for a while, my daughter woke up dancing and happy. Glory to God.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>02</h4>
                                <div>
                                    {/* <h5 className='mb-3 fs-28 font-600'>Mrs B from Ikorodu</h5> */}
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>

                                        Happy new month ma I really enjoyed last session….it was explosive May God continue to give you fresh fire in Jesus Name, Amen. I want to bless the name of the Lord for his Divine healing. During the 17th day of the prayer and fasting challenge, Mrs. A raised a prayer point about healing and skin reaction.
                                        My daughter has been down for a while, my daughter woke up dancing and happy. Glory to God.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>03</h4>
                                <div>
                                    {/* <h5 className='mb-3 fs-28 font-600'>Mrs C from Ikorodu</h5> */}
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>I want to testify to what God has done in my life. During the prayers, you gave a word that the following day someone will receive Goodnews at work. And I keyed into it. I got to work and changes were made to make work easier.
                                        As if that was not enough, my salary was reviewed and increased by 100%. God is indeed doing miracles for me. I return all glory to God. God bless you ma.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>04</h4>
                                <div>
                                    {/* <h5 className='mb-3 fs-28 font-600'>Mrs D from Ikorodu</h5> */}
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>Praise God During my quiet time, I received a word from God.
                                        I asked Him to confirm the word through His daughter. Hallelujah, I received the confirmation and even more clearer. God bless you ma, you are indeed for signs and wonders. Thank you for the sacrifices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>05</h4>
                                <div>
                                    {/* <h5 className='mb-3 fs-28 font-600'>Mrs E from Ikorodu</h5> */}
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>My 9-year-old daughter started bed wetting all of a sudden. I have been praying using the prayer devotional. One morning while we were praying, I went to her room and discovered she had bed wetted.
                                        I got angry in my spirit and I poured out my heart to God. To the glory of God, she has not bed wetted for weeks now. Thank you, Lord.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>06</h4>
                                <div>
                                    {/* <h5 className='mb-3 fs-28 font-600'>Mrs K from Ikorodu</h5> */}
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>Thank God for your life and ministry. The last word of knowledge is actually for me. A whole lot on my mind.
                                        The word of comfort and assurance is for me. I pray for its earliest manifestation. Amen. God bless you and yours.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>07</h4>
                                <div>
                                    {/* <h5 className='mb-3 fs-28 font-600'>Mrs K from Ikorodu</h5> */}
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>Good morning mama. I just joined from Jos, Im single though but I want to appreciate you for this ministry! It was as if you were seeing my mind and praying my prayers. I am 31 and unmarried, not even knowing what direction my life is taking.
                                        The prayer point for delay was just how I have been feeling. And I really needed more fire! God bless you so much!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>08</h4>
                                <div>
                                    {/* <h5 className='mb-3 fs-28 font-600'>Mrs K from Ikorodu</h5> */}
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>Good afternoon ma, I want to bless God for your life and appreciate you for allowing
                                        yourself to be used by God.
                                        I was listening to your message on ‘Understanding Warfare’ and when you got to the aspect of ‘there is a reason why I am in this country at this time and that we must be intentional about how we live our lives and not live anyhow and dishonour God, I was so blessed and broken.
                                        This is because I have been so frustrated and I have been thinking of relocating to UK as a nurse because of the situation of the country but I have not prayed about it. Now, I know I have to take things slowly, pray, allow God to lead me before taking any step.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-md-flex d-block bg-pink p-4 my-3" style={{ maxWidth: 504, width: '100%' }}>
                                <h4 className='px-md-3 px-0 fs-28 font-600' style={{ color: '#ccc' }}>09</h4>
                                <div>
                                    {/* <h5 className='mb-3 fs-28 font-600'>Mrs K from Ikorodu</h5> */}
                                    <p className='fs-14' style={{ lineHeight: 2, letterSpacing: 0.9 }}>Good morning ma, I want to share my testimony. I have been reluctant on sharing it. But the Holy Spirit keeps reminding me and telling me if I want the healing to be permanent, I have to share. For over 10 years been having allergic reaction where I sneeze uncontrollably to things like perfume anything with strong smell, headaches and running nose. Of recent it has been more, that I fear it might be corona but I just say it's allergy and move on. Severally prayed about it, but to be honest it was the least on my mind on Sunday during the general prayers, and then you were praying for healing including allergies immediately I keyed into it and I started feeling better.
                                        I believe that God will perfect that which he has started in Jesus’ name, Amen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Testimonies
