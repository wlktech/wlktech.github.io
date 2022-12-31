import React from "react";

function Service(props){
    return(
        <div className="container mb-5">
            <h2 className="text-center service">Our Service</h2>
            <div className="row my-5">
                <div className="col-xl-4">
                    <img src="assets/socialmedia.jpg" className="img-fluid" />
                    <div className="service-text">
                        <h3 className="service-header mt-4 mb-3">Digital Marketing</h3>
                        <p className="service-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="col-xl-4">
                <img src="assets/android.jpg" className="img-fluid" />
                    <div className="service-text">
                        <h3 className="service-header mt-4 mb-3">Android Development</h3>
                        <p className="service-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="col-xl-4">
                <img src="assets/webdev.jpg" className="img-fluid" />
                    <div className="service-text">
                        <h3 className="service-header mt-4 mb-3">Web Development</h3>
                        <p className="service-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;