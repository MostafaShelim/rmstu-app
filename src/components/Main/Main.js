import React from 'react';
import Slider from './../Slider/Slider';
import Notice from './../Notice/Notice';
import Departments from '../Departments/Departments';
import Academics from '../Academics/Academics';
import Gallery from '../Gallery/Gallery';
const Main = () => {
    return (
        <div>
            <Slider></Slider>
            <Notice></Notice>
            <Departments></Departments>
            <Academics></Academics>
            <Gallery></Gallery>
        </div>
    );
};

export default Main;