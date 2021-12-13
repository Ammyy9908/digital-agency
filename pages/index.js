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


function PortFolioCard({image,type,title}){
  return (
    <div className='portfolio-card'>
      <img src={image} alt="portfolio-thumb" loading='lazy'/>
      <div className='portfolio-card-gradient'>
        <div className='portfolio_card_detail'>
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href='#' className={`${type+"-link"}`}>View</a>
        </div>
      </div>
      <div className={`portfolio-detail ${"portfolio-detail-"+type}`}>
        
      </div>
    </div>
  )
}

function TeamCard({image,type,name,profession}){
  return (
    <div className='team-card'>
      <img src={image} alt="team-thumb" loading='lazy'/>
      <div className='team-card-gradient'>
        <div className='team-card-content'>
         <div className='team-content-main'>
         <h3>{name}</h3>
          <p>{profession}</p>
         </div>
        </div>
      </div>
      <div className={`team-popup ${"team-popup-"+type}`}></div>
    </div>
  );
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
        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="banner" className="banner-image"/>
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
          
          <img src="https://images.unsplash.com/photo-1596419250611-a022c055f792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="service_image"/>
        </div>
      </section>
      <section className='portfolio_section'>
        <div className='portfolio_container'>
        <h3>OUR WORKS</h3>
        <h1>Portfolio</h1>
        <div className='portfolio-cards'>
          <PortFolioCard image="/plant.jpg" type="plant" title="Plant"/>
          <PortFolioCard image="/bottle.jpg" type="bottle" title="Bottle"/>
          <PortFolioCard image="/cactus.jpg" type="cactus" title="Cactus"/>
          <PortFolioCard image="/book.jpg" type="book" title="Book"/>
        </div>
        </div>
      </section>
      <section className='team-section'>
        <div className='team_container'>
          <h3>MEET OUR TEAM</h3>
          <h1>Our Team</h1>
          <div className='team-members'>
            <TeamCard image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" type="black" name="Angela" profession="Director"/>
            <TeamCard image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" type="brown" name="Jane" profession="adminstration"/>
            <TeamCard image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" type="green" name="John Doe" profession="WEB DEVELOPER"/>
            <TeamCard image="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" type="dark-green" name="Emilly" profession="Designer"/>
          </div>
        </div>
      </section>
    </div>
  )
}
