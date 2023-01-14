import React from "react"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }

    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
    let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
  

  },[])

  return (
    <div className="">


      <header id="header" className="fixed-top  ">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Lucas Moy</a></h1>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active bg-transparent" href="#hero">Home</a></li>
          <li><a className="nav-link   scrollto" href="#portfolio">¿Cómo funciona?</a></li>
          <li><a className="nav-link scrollto" href="#team">Test de Orientación</a></li>
          <li className="dropdown"><a href="#"><span>Carreras</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Programador Frontend</a></li>
              <li className="dropdown"><a href="#"><span>Programador Backend</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Programador Backend en Java</a></li>
                  <li><a href="/py-course/">Programador Backend en Python</a></li>
                  <li><a href="#">Programador Backend en PHP</a></li>
                  <li><a href="#">Programador Backend en .NET</a></li>
                </ul>
              </li>
              <li><a href="#">User Experience Designer</a></li>
              <li><a href="#">Testing & Quality Assurance</a></li>
              <li><a href="#">DevOps</a></li>
              <li><a href="#">Mobile</a></li>
              <li><a href="#">Administrador de Bases de Datos</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Ayuda</a></li>
          <li><a className="getstarted scrollto" href="#about">Ingresar / Registrarse</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </div>
  )
}

export default Header
