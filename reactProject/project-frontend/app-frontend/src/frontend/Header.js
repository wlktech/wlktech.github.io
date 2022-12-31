import React from "react";

function Header(props){
    return(
    <div id="header">
        <div className="container-fluid text-light pt-5" >
            <div className="container text-center">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <h3 className="header-title">What Do We Do?</h3>
                        <p className="header-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <button className="header-btn btn btn-light my-3 shadow-lg">Learn More</button>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <img src="assets/social media.svg" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/wave.svg" className="wave"/>
    </div>
    )
}
export default Header;