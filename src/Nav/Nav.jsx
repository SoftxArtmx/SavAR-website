import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import './Nav.css'

function Nav(){
    return(
        <>  
        <div className = "navMainContainer">
          <img className = "logo" src='../src/assets/logo.png'></img>

          <div className = "navButtonsContainer">
          <a>Sobre nosotros</a>
          <a>Ayuda</a>
          </div>
        </div>
        </>

    );
}

export default Nav