import './FeatureCard.css'
function FeatureCard( props ) {
  return (
    <>
      <div className = 'featureCardContainer'>
        <h1>{props.title}</h1>
        <img src={props.imgSrc} className='featureImg'></img>
        <p>{props.description}</p>
      </div>
    </>
  )
}

export default FeatureCard
