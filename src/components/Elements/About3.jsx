import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/portrait/accesor2.gif'),
    require('./../../images/gallery/portrait/person1.gif'),
    require('./../../images/gallery/portrait/rollonvp3.gif'),
    // require('./../../images/gallery/portrait/pic7.jpg'),
]

var bnr1 = require('./../../images/background/line.png');

class About3 extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
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
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true
        };
        return (
            <>
                <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-md-5 col-sm-6">
                                    <div >
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img">
                                                    <NavLink to="/about"><img src={item.default} alt=""/></NavLink>
                                                    </div>
                                                </div>
                                            ))}
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-6">
                                    <div className="m-about-containt text-black p-t80">
                                        <div className="m-about-years bg-moving">
                                            <span className="text-primary large-title">+15</span>
                                            <span className="large-title-info">Años de experiencia</span>
                                        </div>
                                        <h3 className="font-weight-600">Somos una empresa joven dedicada a la fabricación de rollos de papel</h3>
                                        <p>
                                            Para puntos de venta, papelería en general y consumibles para equipo de cómputo de las principales marcas, contamos con más de 15 años de experiencia  
                                            a nivel nacional.
                                        </p>
                           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About3;