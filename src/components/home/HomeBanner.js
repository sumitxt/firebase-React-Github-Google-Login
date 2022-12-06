import React from 'react';

const HomeBanner = (props) => {
    return (
        <div>
            <h1>Sumit Barua</h1>
            <h1>{props.title}</h1>
            <h1>{props.subtitle}</h1>
            <h2>{props.subject.name}</h2>
            <h2>{props.subject.age}</h2>
        </div>
    );
};

export default HomeBanner;