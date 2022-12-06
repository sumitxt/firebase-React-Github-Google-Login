import React from 'react';
import HomeBanner from "../components/home/HomeBanner";

const HomePage = () => {
    return (
        <div>
            <HomeBanner title="welcome" subtitle="Sumit Barua" subject={{name:"Sumit", age:"26"}}></HomeBanner>
        </div>
    );
};

export default HomePage;