import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider2';
import Specialization from './../Elements/Specialization';
import About from './../Elements/About3';
import OurValue from './../Elements/OurValue';
import OurMission from './../Elements/OurMission';
import OurServices from './../Elements/OurServices';
import Callus from './../Elements/Callus';
import OurProject from './../Elements/OurProject';
import Blogs from './../Elements/Blogs';
import Testimonials from './../Elements/Testimonials';


import Banner from './../Elements/Banner';

import { NavLink } from 'react-router-dom';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'





class Home extends React.Component {


    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider />


                    {/* <Banner title="Soluciones de acuerdo a sus necesidades. " pagename="Project Grid" bgimage={bnrimg.default} /> */}

                    {/* SECTION CONTENT START */}

                    {/* SECTION CONTENT END  */}

                    {/* <Specialization /> */}

                    <Element name='nosotros' className='element'  >
                        <About />
                    </Element>

                    <OurValue />
                    {/* <OurMission />
                    <OurServices />
                    <Callus />
                    <OurProject />
                    <Blogs />
                    <Testimonials /> */}
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;