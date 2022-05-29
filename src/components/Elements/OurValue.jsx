import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var img1 = require('./../../images/video-bg.jpg');

class OurValue extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

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
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-center">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestra</span> Mision</h2>
                                            </div>
                                            <p>
                                                Brindar a todos nuestros clientes, calidad en nuestros productos, atención personalizada y soluciones de acuerdo a sus necesidades, construyendo relaciones basadas en la confianza de nuestros servicios, adaptándonos a las necesidades de nuestros clientes al tiempo que mantenemos el crecimiento y la rentabilidad de nuestra empresa a través de un equipo comprometido y capacitado, en un ambiente de trabajo amigable.
                                            </p>
                                        </div>
                                    </div>
                                    {/* TITLE END */}


                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-full mobile-page-padding p-t80 p-b30 bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-center">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestra</span> Vision</h2>
                                            </div>
                                            <p>
                                                Ser una empresa líder a nivel Nacional, tomando en cuenta las herramientas del comercio en consumibles y equipos especiales.
                                            </p>
                                        </div>
                                    </div>
                                    {/* TITLE END */}


                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </>
        );
    }
};

export default OurValue;