import { logoAndroid, logoDiscord, logoSoundcloud, logoGithub } from 'ionicons/icons';

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
                    <a className="social-icon__link" href="https://discord.gg/N44tuv2Gw7">
                        <IonIcon icon={logoDiscord} />
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="https://open.spotify.com/playlist/1Fdq4g0A5Z8uisdBwIjZvQ?si=0fe40f61d2264e61">
                        <IonIcon icon={logoSoundcloud} />
                    </a>
                </li>
                <li className="social-icon__item">
                    <a className="social-icon__link" href="https://github.com/SoftxArtmx">
                        <IonIcon icon={logoGithub} />
                    </a>
                </li>
            </ul>
            <p>&copy;2024 SoftxArtMx S.A de C.V | Todos los Derechos Reservados</p>
        </footer>
    );
}

export default Footer;