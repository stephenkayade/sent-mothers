import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <footer class="navbar navbar-expand-lg bg-light px-2 px-md-5">
                <div class="container">
                    <Link className="navbar-brand" to="/"><img src="../../images/logo.png" alt="" height={60} width={80} /></Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Partnerships</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <footer class="navbar navbar-expand-lg bg-light px-2 px-md-5 under pb-2">
                <div class="container">
                    <div className="d-flex justify-content-between w-100">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    Ut non.
                                </li>
                                <li className="nav-item">
                                    Leo est.
                                </li>
                                <li className="nav-item">
                                    Magna.
                                </li>

                                <li className="nav-item">
                                    Id in.
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex">

                        <p className=' ml-auto mb-0'>Copyright Sent Mothers Global Prayer Hub. &copy;2022</p>
                        </div>

                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer