import React from 'react';
import image1 from '../../Images/image1.png';
const Slider = () => {
    const sliderStyle = {
    }
    const imageStyle = {
        width: '500px',
        height: '320px',
    }
    return (
        <div style = {sliderStyle} className="slider">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h2 className="text-bold">Learn With fun <br/>on <span>any schedule</span> </h2>
                            <p className="text-disabled">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, recusandae.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img style={imageStyle} className="illustration-img" src={image1} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;