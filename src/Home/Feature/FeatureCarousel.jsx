import './FeatureCarousel.css'
import FeatureCard from './FeatureCard'

function FeatureCarousel() {
  return (
    <>
          <div className='gridFeatures'>
            <FeatureCard title="Gestiona tu presupuesto" imgSrc="../src/assets/superFondo.jpg" description="Gestiona tu presupuesto de forma inteligente."/>
            <FeatureCard title="Maneja tus compras" imgSrc="../src/assets/escaneoFeature.png" description="Organiza tu compra como nunca antes se ha visto."/>
            <FeatureCard title="Mejora tus finanzas" imgSrc="../src/assets/react.svg" description="This is a feature v1"/>
          </div>
    </>
  )
}

export default FeatureCarousel
