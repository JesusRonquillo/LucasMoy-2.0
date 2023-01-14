import React from "react"
import "./style.css"
import client_1 from "../../images/clients/client-1.png"
import client_2 from "../../images/clients/client-2.png"
import client_3 from "../../images/clients/client-3.png"
import client_4 from "../../images/clients/client-4.png"
import client_5 from "../../images/clients/client-5.png"
import client_6 from "../../images/clients/client-6.png"

import hero from "../../images/hero-img.png" 

import 'bootstrap/dist/css/bootstrap.css';
const Hero = () => {
  return (
    <div>
    <section id="hero" className="d-flex align-items-center ">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up" data-aos-delay="200">
          <h1>
            Educación Profesional, Accesible y GRATUITA</h1>
          <h2>Desarrolla tu carrera profesional con nuestros cursos de programación. Puedes estudiar a tu ritmo y en tu
            idioma.</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started scrollto">¡Tu primer paso a un CLICK!</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={hero} className="img-fluid animated" alt=""></img>
        </div>
      </div>
    </div>
    </section>

    <main id="main">


    <section id="clients" className="clients section-bg">
      <div className="container">

        <div className="row" data-aos="zoom-in">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client_1} className="img-fluid" alt=""></img>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client_2} className="img-fluid" alt=""></img>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client_3} className="img-fluid" alt=""></img>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client_4} className="img-fluid" alt=""></img>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client_5} className="img-fluid" alt=""></img>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={client_6} className="img-fluid" alt=""></img>
          </div>

        </div>

      </div>
    </section>
    </main>

    </div>
  )
}

export default Hero