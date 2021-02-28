import React from 'react';
import { Link } from 'react-router-dom';
import sample from '../../Images/sample.jpeg';
import './Departments.css';
const Departments = () => {
    return (
        <div className='container mt-4'>
            <div className="d-flex justify-content-center">
                <h2 className='text-primary'>Departments</h2>
                <Link to={'/departments'}><button className="btn btn-primary m-2">See more</button></Link>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card ">
                        <img src={sample} className="card-img-top" alt={sample}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text container">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={sample} className="card-img-top" alt={sample}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text container">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={sample} className="card-img-top" alt={sample}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text container">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Departments;