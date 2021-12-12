import Head from 'next/head'

function ServiceCard({title}){
  return <div className='service-card'>
    <div className='service-card-icon'></div>
    <div className='service-card-content'>
      <span><p></p><strong>{title}</strong></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
  </div>
}


function PortFolioCard({image}){
  return (
    <div className='portfolio-card'>
      <img src={image} alt="portfolio-thumb"/>
      <div className='portfolio-card-gradient'></div>
    </div>
  )
}
export default function Home() {
  return (
    <div>
      <Head><title>Digtal Agency-Landing Page</title></Head>
      <section className='hero'>
        <div className='hero_content'>
          <h3>WE ARE CREATIVE</h3>
          <h1>Digital Agency</h1>
          <p>We provide ourselves in geat work ethic.
integrity and providing end results.</p>
<button tabIndex={1}>Get Started</button>
        </div>
        <img src="/banner.jpg" alt="banner" className="banner-image"/>
        <div className='banner-gradient'></div>
        <div className='social-links'>
          <a href="#"><img src="/twitter_icon.svg" alt="twitter-icon"/></a>
          <a href="#"><img src="/instagram_icon.svg" alt="insta-icon"/></a>
          <a href="#"><img src="/facebook_icon.svg" alt="fb-icon"/></a>
        </div>
      </section>

      <section className='about_section'>
        <div className='about_content'>
          <div className='about_content_main'>
            <h3>WHO WE ARE</h3>
            <h1>About Agency</h1>
              <p>We provide ourselves in geat work ethic.integrity and providing end results.</p>
              <p>We provide ourselves in geat work ethic.integrity and providing end results.</p>
            
          </div>
        </div>
        <div className='blank_box'>
          <img src="/agency.jpg" alt="blank-box"/>
        </div>
      </section>
      <section className='services'>
        <div className='service_wrapper'>
          <div className='services_content'>
            <h3>WHAT WE DO?</h3>
            <h1>Our Services</h1>
            <div className='service_cards'>
              <ServiceCard title="Online marketing"/>
              <ServiceCard title="Web devlopment"/>
              <ServiceCard title="Website Design"/>
              <ServiceCard title="SEO Optimization"/>
            </div>
          </div>
        </div>
        {/* <img src="/service_image.jpg" alt="service_image" className='mobile_service_image'/> */}
        <div className='service_blank_box'>
          
          <img src="/service_image.jpg" alt="service_image"/>
        </div>
      </section>
      <section className='portfolio_section'>
        <div className='portfolio_container'>
        <h3>OUR WORKS</h3>
        <h1>Portfolio</h1>
        <div className='portfolio-cards'>
          <PortFolioCard image="/plant.jpg"/>
          <PortFolioCard image="/bottle.jpg"/>
          <PortFolioCard image="/cactus.jpg"/>
          <PortFolioCard image="/book.jpg"/>
        </div>
        </div>
      </section>
    </div>
  )
}
