import { logoAndroid, logoFigma, logoLinkedin, logoGithub } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="social-icon">
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <IonIcon icon={logoAndroid} />
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <IonIcon icon={logoFigma} />
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <IonIcon icon={logoLinkedin} />
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="#">
                        <IonIcon icon={logoGithub} />
                    </a>
                </li>
            </ul>
            <ul className="menu">
                <li className="menu__item">
                    <a className="menu__link" href="#">Home</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">About</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">Services</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">Team</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="#">Contact</a>
                </li>
            </ul>
            <p>&copy;2024 SavAR S.A de C.V | Todos los Derechos Reservados</p>
        </footer>
    );
}

export default Footer;