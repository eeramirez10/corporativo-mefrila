import React from 'react';
import { NavLink } from 'react-router-dom';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        return (
            <>
                <div className={(this.props.bgcolor !== '') ? `header-nav navbar-collapse collapse ${this.props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
                    <ul className="nav navbar-nav">
                        <li >
                            <Link  to={""}>Home</Link>

                        </li>
                        <li className={ ({isActive}) => isActive ? 'active' : ''} >
                            <Link  to={"nosotros"} spy={true} smooth={true} duration={1000} offset={-90} isDynamic={true} >Nosotros</Link>
                            
                        </li>
                        <li>
                            <NavLink to={""}>Servicios</NavLink>
                        </li>
                        <li>
                            <NavLink to={""}>Contactanos</NavLink>

                        </li>

                    </ul>
                </div>
            </>
        );
    };
};

export default Navigation;