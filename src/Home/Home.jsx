import './Home.css'
import Nav from '../Nav/Nav.jsx'
import FeatureCarousel from './Feature/FeatureCarousel.jsx'
import Footer from '../Footer/Footer.jsx'
import imagenFondoH from '../assets/superFondo.jpg'
function Home() {
  return (
    <>
      <Nav />
      <div className="headerMainContainer" style={{ backgroundImage: `url(${imagenFondoH})` }}>
        <h1>¡Esto es SavAR!</h1>
        <h2>Una nueva forma de hacer compras</h2>
        <p> Con SavAR, podrás <br></br>
          <span className="accionResalte">
            <span>mejorar tus finanzas.</span>
          </span>
        </p>
        <button>Descargar</button>
      </div>

      <div className='featuresContainer' >
        <h2>Prueba SavAR y cambia tu manera de comprar!</h2>
        <FeatureCarousel />
      </div>
      <Footer />
    </>
  )
}

export default Home
