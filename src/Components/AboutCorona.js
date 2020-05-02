import React from 'react'
import HeroImage from '../assets/hero1.jpg'
import AboutImage from '../assets/hero-image2.png'

const AboutCorona = () => {
  return (
    <div className="h-auto">
      <div className="lg:flex block ">
        <div className="lg:flex-1 block  m-2 p-4">
          <h2 className="text-blue-900 lg:text-4xl text-xl font-extrabold text-center m-4">
            COVID-19
          </h2>

          <div className="text-center">
            <p className="text-center text-gray-700">
              A new strain of coronavirus that has not been previously
              identified in humans...
            </p>
            <img
              src={AboutImage}
              alt={AboutImage}
              className="block ml-6 h-64 w-5/6"
            />
          </div>
          <button className="bg-blue-300 border rounded outline-0 lg:mt-6 p-2 text-center lg:ml-64 ml-32 mt-4">
            Read More...
          </button>
        </div>

        <div className="lg:flex-1 block m-2  p-4">
          <h4 className="text-blue-900 lg:text-4xl text-xl font-extrabold text-center m-4">
            What is Covid-19?
          </h4>
          <div className="text-center text-gray-700 p-2">
            <p className="leading-loose">
              A novel coronavirus is a new strain of coronavirus that has not
              been previously identified in humans.
            </p>

            <p className="leading-loose">
              Coronaviruses (CoV) are a large family of viruses transmitting
              between animals and people that cause illness ranging from the
              common cold to more severe diseases such as Middle East
              respiratory syndrome (MERS-CoV) and severe acute respiratory
              syndrome (SARS-CoV).
            </p>

            <p className="leading-loose">
              Reports suggest that 2019-nCoV infection can cause mild to severe
              disease and be fatal in some. Common observed symptoms include
              fever, cough, shortness of breath and breathing difficulties. In
              more severe cases, infection can cause pneumonia or severe acute
              respiratory syndrome, particularly in those with other chronic
              underlying health conditions, and even death.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCorona
