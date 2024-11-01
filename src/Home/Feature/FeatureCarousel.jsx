import './FeatureCarousel.css'
import FeatureCard from './FeatureCard'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';


function FeatureCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const isLargeScreen = useMediaQuery('(min-width: 1280px)');

  return (
    <>
    <div className='carrusel'>
      <Carousel  
      height={500} 
      width="100%"
      slideGap="xl"
      align="start"
      slideSize={isLargeScreen ? "40%" : "100%"}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide><FeatureCard title="Gestiona tu presupuesto" imgSrc="../src/assets/superFondo.jpg" description="Gestiona tu presupuesto de forma inteligente."/></Carousel.Slide>
        <Carousel.Slide><FeatureCard title="Maneja tus compras" imgSrc="../src/assets/escaneoFeature.png" description="Organiza tu compra como nunca antes se ha visto."/></Carousel.Slide>
        <Carousel.Slide><FeatureCard title="Mejora tus finanzas" imgSrc="../src/assets/react.svg" description="This is a feature v1"/></Carousel.Slide>
        <Carousel.Slide><FeatureCard title="Mejora tus finanzas" imgSrc="../src/assets/react.svg" description="This is a feature v1"/></Carousel.Slide>
        <Carousel.Slide><FeatureCard title="Mejora tus finanzas" imgSrc="../src/assets/react.svg" description="This is a feature v1"/></Carousel.Slide>
      </Carousel>
    </div>
    </>
  )
}

export default FeatureCarousel
