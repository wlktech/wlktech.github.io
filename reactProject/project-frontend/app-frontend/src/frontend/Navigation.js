import React from "react";

function Navigation(props){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="javascript:void(0)">WAI LINN KYAW</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">HOME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">ABOUT</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">SKILLS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">PORTFOLIO</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">CONTACT</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navigation;