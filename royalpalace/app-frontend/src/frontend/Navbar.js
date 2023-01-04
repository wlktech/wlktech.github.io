import React from "react";

const Navbar = ()=>{
    return(
        <div>
            <nav className="navbar text-light bg-dark py-1" id="home">
                <div className="container">
                    <span className="me-2 d-none d-lg-block">
                        <i className="fa-solid fa-envelope me-2"></i> 
                        contact@royalpalacehotel.com
                    </span>
                    <span className="me-auto">
                        <i className="fa-solid fa-phone-volume me-2"></i> 
                        +95 9421023714
                    </span>
                    <span>
                        Follow Us : 
                            <a className="text-white" href=""><i className="fa-brands fa-facebook ms-2"></i></a>
                            <a className="text-white" href=""><i className="fa-brands fa-twitter ps-2"></i></a>
                            <a className="text-white" href=""><i className="fa-brands fa-instagram ps-2"></i></a>
                    </span>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light shadow-lg sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img className="me-2 d-inline-block" src="assets/img/royallogo.png" width="80px" alt=""/>
                        <div className="logo d-inline">
                            <span>ROYAL PALACE</span>
                            <span className="logo-service d-inline-block ms-1">HOTELS & RESORTS</span>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="Navbar">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="promotion.html">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="product.html">ROOMS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">BLOGS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;