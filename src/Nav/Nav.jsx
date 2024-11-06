import React, { useState, useEffect } from 'react';
import './Nav.css'
import logoEmpresa from '../assets/softxartLogo.png'
function Nav(){
    return(
        <>  
        <div className = "navMainContainer">
          <a href='/'><img className = "logo" src={logoEmpresa}/></a>
          <div className = "navButtonsContainer">
          <a href='/aboutus'>Sobre nosotros</a>
          <a href='/help'>Ayuda</a>
          </div>
        </div>
        </>

    );
}

export default Nav