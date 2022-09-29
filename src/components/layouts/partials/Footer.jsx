import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <footer class="footer bg-white px-2 px-md-5">
                <div className="container">

                    <div className="d-flex mb-md-0 mb-4 flex-md-row flex-column justify-content-md-between justify-content-sm-center align-items-center">

                        <Link className="footer-brand d-inline" to="/"><img src="../../images/logo.png" alt="" height={60} width={80} /></Link>

                        <ul className="footer-nav-1">
                            <li className="footer-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="nav-link" to="#"> About</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="nav-link" to="#">Partnerships</Link>
                            </li>

                            <li className="footer-item">
                                <Link className="nav-link" to="/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex mb-md-0 mb-4 justify-content-md-between justify-content-center w-100">

                        <ul className="footer-nav-2 d-md-flex d-none">
                            <li className="footer-item ml-0">
                                Ut non.
                            </li>
                            <li className="footer-item">
                                Leo est.
                            </li>
                            <li className="footer-item">
                                Magna.
                            </li>

                            <li className="footer-item">
                                Id in.
                            </li>
                        </ul>

                        <div className="d-flex">

                            <p className=' ml-auto text-md-start text-center mb-0'>Copyright Sent Mothers Global Prayer Hub. &copy;2022</p>
                        </div>

                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer