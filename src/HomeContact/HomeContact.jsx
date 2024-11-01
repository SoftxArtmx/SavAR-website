import React from 'react'
import './HomeContact.css'
import Nav from '../Nav/Nav.jsx'
import Contact from './Contact/Contact.jsx'
import Footer from '../Footer/Footer.jsx'

function HomeContact() {
    return (
        <>
            <Nav/>
            <div className = "contactMainContainer">
                <h1>¡Contáctanos!</h1>
                <Contact/>
            </div>
            <Footer />
        </>
    )
}

export default HomeContact