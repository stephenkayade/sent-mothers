import React, { useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [hover, setHover] = useState(false)

    const onHover = (e) => {
        if (e) { e.preventDefault() }
        setHover(!hover)

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white px-2 px-md-5" style={{ zIndex: 1000 }}>
                <div className="container">
                    <Link to="/" className="navbar-brand"><img src="../../../images/logo.png" alt="logo" height={60} width={60} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-evenly w-75">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><img src="../../../images/icons/home-logo.svg" className='pb-1' alt="" height={20} /> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"> About Us</Link>
                            </li>
                            <li className="nav-item nav-event" onClick={(e) => onHover(e)}>
                                <Link className="nav-link" to="">
                                    Events <AiOutlineDown />
                                </Link>
                                {
                                    hover && <>
                                        <ul className="nav-event-hover d-flex flex-column">
                                            <li><Link className="fw-bold fs-13 text-white" to="/events">All Events</Link></li>
                                            <li><Link className="fw-bold fs-13 text-white" to="/events/festival-of-fire">Festival of Fire</Link></li>
                                        </ul>
                                    </>
                                }

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/testimonies">Testimonies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/partner">Partnership</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <a href='https://view.flodesk.com/pages/6385b34fe23bcf78aedfe502' rel="noreferrer" target="_blank" className="btn-purple py-2 px-4 text-white">Join Us</a>
                </div>
            </nav>

        </>
    )
}

export default Navbar
