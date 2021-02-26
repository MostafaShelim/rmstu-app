import React from 'react';

const NoticeDetails = (props) => {
    // console.log(props.value);
    const noticeDetailsStyle = {
        backgroundColor: '#d5e4de',
    }
    return (
        <div style = {noticeDetailsStyle}>
            <h4>Notice No. {props.value + 1}</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, possimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex sit rerum error aliquam maxime repellendus reiciendis dolore soluta porro deserunt blanditiis dignissimos nulla magnam libero exercitationem minima maiores officiis, fuga, quis, facilis obcaecati accusantium adipisci perferendis voluptate. Voluptates, enim.</p>
        </div>
    );
};

export default NoticeDetails;