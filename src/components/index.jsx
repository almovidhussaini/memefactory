import React from 'react';
import Main from './main/Main';
import Aboutus from './aboutus/Aboutus';
import Portfolio from './portfolio/Portfolio';
import Talk from './talk/Talk';
import Footer from './footer/Footer';

const index = () => {
    return (
        <>
           <Main/> 
            <Aboutus/>
            <Portfolio/>
            <Talk/>
            <Footer/>
        </>
    );
}

export default index;