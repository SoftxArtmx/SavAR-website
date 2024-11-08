import './TeamCarousel.css'
import Member from './Member.jsx'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import imagenFun1 from '../../../assets/escaneoFeature.png';
import pfpMJ from '../../../assets/pfps/pfpMarcosJ.jpeg'
import pfpCM from '../../../assets/pfps/pfpCarlosM.jpeg'
import pfpLZ from '../../../assets/pfps/pfpLeo.jpeg'

function TeamCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const isLargeScreen = useMediaQuery('(min-width: 1280px)');
  let gitLinks = { "CARLOS":"https://github.com/carlosmedina8", "HER":"", "REDE":"https://github.com/dgmnzrd", "MARCOS":"https://github.com/marcosjn19", "GAEL":"https://github.com/GaelCG" , "RODRI":"", "LEONARDO": "https://github.com/leozavglz" }
  let igLinks = { "CARLOS":"https://www.instagram.com/wave.kiddd/", "HER":"", "REDE":"https://github.com/dgmnzrd", "MARCOS":"https://www.instagram.com/marcos_jn19/", "GAEL":"https://github.com/GaelCG" , "RODRI":"", "LEONARDO": "https://github.com/leozavglz" }
  let lkdnLinks = { "CARLOS":"https://github.com/carlosmedina8", "HER":"", "REDE":"https://www.instagram.com/rede.js/", "MARCOS":"https://github.com/marcosjn19", "GAEL":"https://github.com/GaelCG" , "RODRI":"", "LEONARDO": "https://github.com/leozavglz" }
  return (
    <>
    <div className='carrusel'>
      <Carousel  
      height={500} 
      width="100%"
      slideGap="xl"
      align="start"
      slideSize={isLargeScreen ? "60%" : "100%"}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      dragFree = "true"
      >
        <Carousel.Slide><Member puesto="CEO" title="Hermione Sandoval" imgSrc={imagenFun1} description="'Saquen Valo'" linkGit={gitLinks["HER"]}/></Carousel.Slide>
        <Carousel.Slide><Member puesto="Vision Specialist" title="Leonardo Zavala" imgSrc={pfpLZ} description="'A un hombre no le preguntas dos cosas...
Cuánto gana, ni tampoco cuánto lleva del sprint'" linkGit={gitLinks["LEONARDO"]}/></Carousel.Slide>
        <Carousel.Slide><Member puesto="Developer" title="Carlos Medina" imgSrc={pfpCM} description="'Mi mamá me dio la vida, Lamia las ganas de vivirla'" linkGit={gitLinks["CARLOS"]}/></Carousel.Slide>
        <Carousel.Slide><Member puesto="DBA" title="Gael Costilla" imgSrc={imagenFun1} description="'Git's nightmare'" linkGit={gitLinks["GAEL"]}/></Carousel.Slide>
        <Carousel.Slide><Member puesto="CTO" title="Marcos Juarez" imgSrc={pfpMJ} description="'Ojalá la vida pudiera ser recursiva...'" linkGit={gitLinks["MARCOS"]}/></Carousel.Slide>
        <Carousel.Slide><Member puesto="CUM" title="Diego Muñoz" imgSrc={imagenFun1} description="'No te preocupes tanto por el futuro... A lo mejor ni llegas'" linkGit={gitLinks["REDE"]}/></Carousel.Slide>
        <Carousel.Slide><Member puesto="RookieAllStar" title="Rodrigo Mendez" imgSrc={imagenFun1} description="'Quesocrazy quote'" linkGit={gitLinks["RODRI"]}/></Carousel.Slide>
      </Carousel>
    </div>
    </>
  )
}

export default TeamCarousel
