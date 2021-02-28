import React from 'react';

const SingleDepartment = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3>Department Details</h3>
                    <p>Name Of Dept: <strong>CSE</strong></p>
                    <p>Number Of teachers: <strong>10</strong></p>
                    <p>Number of Students: <strong>1000</strong></p>
                    <p>Chairman of The Dept: <strong>G.M Sakhawat Hossain </strong></p>
                    <p>Acheivements: <strong>2nd Runner up on Programming Contest, Champion on Gadget Show</strong></p>
                </div>
                <div className="col-6">
                    <h3>This is image part</h3>
                </div>
            </div>
        </div>
    );
};

export default SingleDepartment;