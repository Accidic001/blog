import React from 'react'
import "./AboutPage.css"

function AboutPage() {
  return (
    <section className="about-us">
        <h2>About Us</h2>
    <div className="about">
    
      <img 
      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1724618248~exp=1724621848~hmac=766a7669e3884394ca795cbeb610007e1d55052ddb04e06ca64286654389f9ff&w=740" 
      alt='dev' className="pic" />
      <div className="text">
        <h5>Front-end Developer & <span>Designer</span></h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
        <div className="data">
          <a href="/about" class="hire">Hire Me</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutPage