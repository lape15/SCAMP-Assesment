import React from 'react'
import HeroImage from '../../assets/hero1.jpg'
import AboutImage from '../../assets/hero-image2.png'
import VideoPlay from '../utils/VideoPlay'
import Footer from '../layout/Footer'

const AboutCorona = () => {
  return (
    <div className="h-auto">
      <div className="p-4">
        <div className="row about-corona about-corona__hero">
          <div className="col-md-6">
            <h2>COVID-19</h2>
            <h1 className="my-4">
              <span>Stay Home</span>
              <span>Slow The Spread</span>
            </h1>
            <p>
              <span className="font-weight-bold">COVID-19</span> - a new strain
              of coronavirus that has not been previously identified in
              humans...
            </p>
            <button className="bg-blue-300 border rounded outline-0 mt-4">
              Read More...
            </button>
          </div>
          <div className="col-md-6">
            <img src={HeroImage} alt={HeroImage} className="img-fluid" />
          </div>
        </div>

        <div className="about-corona about-corona__section-2 my-5">
          <div className="row">
            <div className="col-md-6">
              <img src={AboutImage} alt={AboutImage} className="w-4/5" />
            </div>
            <div className="col-md-6">
              <h4>What is Covid-19?</h4>
              <h2 className="mt-4">Coronavirus</h2>
              <p className="mt-4">
                A novel coronavirus is a new strain of coronavirus that has not
                been previously identified in humans.
              </p>

              <p>
                Coronaviruses (CoV) are a large family of viruses transmitting
                between animals and people that cause illness ranging from the
                common cold to more severe diseases such as Middle East
                respiratory syndrome (MERS-CoV) and severe acute respiratory
                syndrome (SARS-CoV).
              </p>

              <p>
                Reports suggest that 2019-nCoV infection can cause mild to
                severe disease and be fatal in some. Common observed symptoms
                include fever, cough, shortness of breath and breathing
                difficulties. In more severe cases, infection can cause
                pneumonia or severe acute respiratory syndrome, particularly in
                those with other chronic underlying health conditions, and even
                death.
              </p>

              <button className="button button__blue-light mt-4">
                Read More...
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-center">A Short Documentary From W.H.O</h3>
      <VideoPlay />
      <Footer />
    </div>
  )
}

export default AboutCorona
