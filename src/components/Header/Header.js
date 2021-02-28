import React from 'react';
import logo from "../../Images/logo.png";
import './Header.css';
const Header = () => {
    const navStyle = {
        // backgroundColor: '#d5e4de',
        fontWeight: '600',
        fontSize: '15px',
    }
    const imageStyle = {
        width: '90px',
        height: '75px'
    }
    const buttonStyle = {
        backgroundColor: '#C6F5B5',
        borderRadius: '8px',
        padding: '3px'
    }

    return (
        <nav style={navStyle} className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="nav-link" href="/"><img style={imageStyle} src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/adminastrations">Adminastration</a>
                        <a className="nav-link" href="/departments">Departments</a>
                        <a className="nav-link" href="/institutes">Institutes</a>
                        <a className="nav-link" href="/notices">Notices</a>
                        <a className="nav-link" href="/about">About Us</a>
                        <a className="nav-link" href="/admissions">Admissions</a>
                        <a className="nav-link" href="/galleries">Gallery</a>
                        <a className="nav-link" href="/research">Research</a>
                        <a className="nav-link" href="/clubs">Clubs</a>
                        <a className="nav-link" href="/downloads">Downlodas</a>
                        <a className="nav-link" href="/contact">Contact Us</a>
                        <a className="fl-right nav-link" href="/students"><button style = {buttonStyle}>Stu's Corner</button></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;