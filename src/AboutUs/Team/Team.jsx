// src/components/acercaDe.js
import React from 'react';
import imagenFondoH from '../../assets/bannerSoftxart.jpeg'
import Nav from '../../Nav/Nav.jsx';
import TeamCarousel from './TeamCarousel/TeamCarousel'
import '../Team/Team.css'
import Footer from '../../Footer/Footer.jsx';

function Team() {
    return (
        <>
            <Nav />
            <div className="headerTeamContainer" style={{ backgroundImage: `url(${imagenFondoH})` }}>
                <h1>Un equipo multidisciplinario</h1>
                <h2>Un grupo de artistas dedicados a hacer software.</h2>
            </div>

            <div className='membersContainer' >
                <h2>Conoce nuestro equipo</h2>
                <TeamCarousel/>
            </div>
            <Footer/>
        </>
    );
}

export default Team;
