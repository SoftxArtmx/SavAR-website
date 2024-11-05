import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import './Nav.css'

function Nav(){
    return(
        <>  
        <div className = "navMainContainer">
          <a href='/index'><img className = "logo" src='../src/assets/softxartLogo.png'/></a>
          <div className = "navButtonsContainer">
          <a href='/aboutus'>Sobre nosotros</a>
          <a href='/help'>Ayuda</a>
          </div>
        </div>
        </>

    );
}

export default Nav