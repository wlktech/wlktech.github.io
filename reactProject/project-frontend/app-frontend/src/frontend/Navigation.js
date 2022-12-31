import React from "react";

function Navigation(props){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark" id="navbar">
            <div className="container">
                <a className="navbar-brand" href="#">SHOPPING</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="nav-link active" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">SHOPS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">PROMOTIONS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">CONTACT</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navigation;