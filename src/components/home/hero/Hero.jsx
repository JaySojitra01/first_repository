import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO GENIUS GEMS' title='Best Online Education Expertise' />
            <p>Unlock Your Potential, Embrace Education Learn, Grow, Succeed Education for a Brighter Tomorrow Ignite Your Curiosity, Explore Education Innovate, Educate, Elevate Knowledge is Power, Embrace Education Discover the Joy of Learning</p>
            <div className='button'>

              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
