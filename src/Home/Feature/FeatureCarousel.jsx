import './FeatureCarousel.css'
import FeatureCard from './FeatureCard'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';

import imagenFun1 from '../../assets/func1.jpeg';
import imagenFun2 from '../../assets/func2.jpeg';
import imagenFun3 from '../../assets/func3.jpeg';

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
        <Carousel.Slide><FeatureCard title="Gestiona tu presupuesto" imgSrc={imagenFun1} description="Gestiona tu presupuesto de forma inteligente."/></Carousel.Slide>
        <Carousel.Slide><FeatureCard title="Usa tu cámara!" imgSrc={imagenFun2} description="Obten detalles del producto escaneando su codigo de barras."/></Carousel.Slide>
        <Carousel.Slide><FeatureCard title="Registra tus compras" imgSrc={imagenFun3} description="Lleva un registro de tus compras."/></Carousel.Slide>
      </Carousel>
    </div>
    </>
  )
}

export default FeatureCarousel
