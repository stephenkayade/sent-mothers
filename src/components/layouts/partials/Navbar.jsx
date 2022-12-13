import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light px-2 px-md-5" style={{zIndex: 1000}}>
                <div class="container">
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
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
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
                    <a href='https://view.flodesk.com/pages/6385b34fe23bcf78aedfe502' target="_blank" className="btn-purple py-2 px-4 text-white">Join Us</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
