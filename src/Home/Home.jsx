import './Home.css'
import Nav from '../Nav/Nav.jsx'
import Feature from './Feature/FeatureCard.jsx'
 
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
          <h2>Funciones</h2>
          <div className='gridFeatures'>
            <Feature title="Gestiona tu presupuesto" imgSrc="../src/assets/superFondo.jpg" description="Gestiona tu presupuesto de forma inteligente."/>
            <Feature title="Maneja tus compras" imgSrc="../src/assets/escaneoFeature.png" description="Organiza tu compra como nunca antes se ha visto."/>
            <Feature title="Mejora tus finanzas" imgSrc="../src/assets/react.svg" description="This is a feature v1"/>
          </div>
      </div>
    </>
  )
}

export default Home
