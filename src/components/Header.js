import React from 'react';
import { Link } from 'react-scroll'
import logo from './../assets/logo.svg';

function Header() {
    return (
        <>
            <nav className="header navbar navbar-expand-lg navbar-light bg-light px-3">
                <Link className="navbar-brand" to="/"><img src={logo} className='logo' alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link pe-5" to="home" spy={true} smooth={true}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-5" to="about" spy={true} smooth={true}>ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-5" to="service" spy={true} smooth={true}>OUR SERVICES</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header