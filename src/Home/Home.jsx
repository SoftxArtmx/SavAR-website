import './Home.css'
import Nav from '../Nav/Nav.jsx'
import FeatureCarousel from './Feature/FeatureCarousel.jsx' 
function Home() {
  return (
    <>
      <Nav/>
        <div className = "headerMainContainer">
          <h1>¡Esto es SavAR!</h1>
          <h2>Una nueva forma de hacer compras</h2>
          <p> Con SavAR, podrás <br></br>
            <span className="accionResalte"> 
              <span>mejorar tus finanzas.</span> 
            </span>
          </p>
          <button>Descargar</button>
        </div>

        <div className = 'featuresContainer' >
          <h2>Get a taste of SavAR!</h2>
          <FeatureCarousel/>
      </div>
    </>
  )
}

export default Home
