import React from "react"
import "./Header.css"
import client_1 from "../../images/clients/client-1.png"
import client_2 from "../../images/clients/client-2.png"
import client_3 from "../../images/clients/client-3.png"
import client_4 from "../../images/clients/client-4.png"
import client_5 from "../../images/clients/client-5.png"
import client_6 from "../../images/clients/client-6.png"

import hero from "../../images/hero-img.png"



const Header = () => {
  return (
    <div>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Lucas Moy</a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#portfolio">
                  ¿Cómo funciona?
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Test de Orientación
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Carreras</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Programador Frontend</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Programador Backend</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Programador Backend en Java</a>
                      </li>
                      <li>
                        <a href="#">Programador Backend en Python</a>
                      </li>
                      <li>
                        <a href="#">Programador Backend en PHP</a>
                      </li>
                      <li>
                        <a href="#">Programador Backend en .NET</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">User Experience Designer</a>
                  </li>
                  <li>
                    <a href="#">Testing & Quality Assurance</a>
                  </li>
                  <li>
                    <a href="#">DevOps</a>
                  </li>
                  <li>
                    <a href="#">Mobile</a>
                  </li>
                  <li>
                    <a href="#">Administrador de Bases de Datos</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Ayuda
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
                  Ingresar / Registrarse
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
