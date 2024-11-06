// src/components/acercaDe.js

import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import imagenMision from '../assets/softxartTeam.jpg'
import imagenVision from '../assets/softxartTeam.jpg'
import imagenCultura from '../assets/softxartTeam.jpg'
import imagenFondoH from '../assets/softxartTeam.jpg'
import '../AboutUs/aboutUs.css';

function AboutUs() {
    return (
      <>
      <Nav/>
      <div className = "headerAboutUsContainer" style={{backgroundImage: `url(${imagenFondoH})`}}>
        <h1>SoftxArt</h1>
        <h2>Donde el software es un arte...</h2>
      </div>

      <div className='containerInfoType1 bgT1'>
        <h2>Misión</h2>
        <p>Proveer soluciones de software innovadoras y confiables que superen las expectativas
        de nuestros clientes, apoyados por un equipo de profesionales altamente capacitados y
        comprometidos con la excelencia. Nos dedicamos a entender y satisfacer una amplia
        gama de necesidades tecnológicas, asegurando el éxito de nuestros clientes en un
        mundo en constante evolución.</p>
        <img src={imagenMision}></img>
      </div>

      <div className='containerInfoType1 bgT2'>
        <h2>Visión</h2>
        <p>Ser la empresa líder en soluciones de software en el continente americano, reconocida
        por nuestra capacidad de anticipar y responder a las demandas del mercado. Nos
        esforzamos por convertirnos en la primera opción para cualquier organización que
        busque tecnología de vanguardia, siendo un referente en calidad, innovación y
        compromiso con el cliente.</p>
        <img src={imagenVision}></img>
      </div>

      <div className='containerInfoType1 bgT1'>
        <h2>Nuestra cultura</h2>
        <ul>
          <li>En SoftxArt creemos firmemente que el crear SOFTWARE es un ARTE.</li>
          <li>Una mente abierta hace que fluyan las ideas.</li>
          <li>En SoftxArt sabemos que el FUTURO ES HOY por lo que siempre se buscara estar al día con las NUEVAS TECNOLOGIAS</li>
          <li>En SoftxArt, CELEBRAMOS LA DIVERSIDAD en todas sus formas.</li>
        </ul>
        <img src={imagenCultura}></img>
      </div>

    <Footer/>
  </>
    );
}

export default AboutUs;
