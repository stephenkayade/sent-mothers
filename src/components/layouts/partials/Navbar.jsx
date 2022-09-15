import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light px-2 px-md-5">
                <div class="container">
                    <Link className="navbar-brand" to="/"><img src="../../images/logo.png" alt="" height={60} width={ 60} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-evenly w-75">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><img src="../../../images/icons/home-logo.svg" className='pb-1' alt="" height={20} /> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"> About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Partnership</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Testimonies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Store</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='' className="btn-purple py-2 px-4 text-white">Join Us</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
