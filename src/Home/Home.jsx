import './Home.css'
import Nav from '../Nav/Nav.jsx'
function Home() {
  return (
    <>
      <div>
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
      </div>
    </>
  )
}

export default Home
