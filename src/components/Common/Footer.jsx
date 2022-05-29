import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

var bgimage = require('./../../images/background/bg-site.png');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = { logo: require('./../../images/mefrila.gif').default };
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo.default; }

    render() {

        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    <div className="container call-to-action-wrap bg-no-repeat bg-center" style={{ backgroundImage: 'url(' + bgimage.default + ')' }}>

                    </div>
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}><img src={this.currentstate.logo} alt="" /></NavLink>
                                        </div>
                                        <p className="max-w400"></p>
                                        <ul className="social-icons  mt-social-links">
                                            <li><NavLink to={"#"} className="fa fa-google" /></li>
                                            <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                            <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Contactanos </h4>
                                        <ul className="widget_address">
                                            <li>
                                                Calle José María Bustillos No. 29
                                                Colonia Algarín
                                                Delegación Cuauhtémoc
                                                Ciudad de México, 
                                                C.P. 06880
                                            </li>
                                            <li>(55) 5530 1975 </li>
                                            <li>(55) 5530 4611</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-5 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Enlaces</h4>
                                        <ul>
                                            <li><NavLink to={""}>Nosotros</NavLink></li>
                                            <li><NavLink to={""}>Servicios</NavLink></li>
                                            <li><NavLink to={""}>Contacto</NavLink></li>
                                          
                                        </ul>
                                    </div>
                                </div>
                                {/* TAGS */}

                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                    <span className="copyrights-text">© 2021 Corporativo Mefrila. Designed By eeramirez10.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)} />

            </>
        );
    };
};

export default Footer;