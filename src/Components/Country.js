import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Country = (props) => {
  const { countrySlug } = props.match.params
  const [country, setCountry] = useState(null)

  const getCountryStat = (slug) => {
    axios
      .get(`https://api.covid19api.com/live/country/${slug}/status/confirmed`)
      .then((response) => {
        setCountry(response.data)
        console.log(country)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  getCountryStat(countrySlug)

  return (
    <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-3 md:grid-rows-4 lg:grid-rows-5 xl:grid-rows-6 overflow-x-hidden">
      {country && country.length > 0 ? (
        country.map((oneCountry, index) => {
          return (
            <div
              className="text-center bg-transparent px-4 py-4 m-2 relative  h-auto border border-solid border-gray-200 rounded"
              key={index}
            >
              <h3 className="text-blue-900  text-2xl bg-gray-200 mb-5">
                {oneCountry.Country}
              </h3>
              <div>
                <div className="text-2xl mr-4">Confirmed cases:</div>
                <span className="text-4xl text-gray-900 font-bold">
                  {oneCountry.Confirmed}
                </span>
              </div>
              <div>
                {' '}
                <div className="text-2xl mr-4">Deaths:</div>
                <span className="text-4xl text-red-500 font-bold">
                  {oneCountry.Deaths}
                </span>
              </div>
              <div>
                <div className="text-2xl mr-4">Recovered:</div>
                <span className="text-4xl text-green-500 font-bold">
                  {oneCountry.Recovered}
                </span>
              </div>
              <div>
                <div className="text-2xl mr-4">Date:</div>
                <span className="text-2xl text-gray-500 font-bold">
                  {new Date(oneCountry.Date).toDateString()}
                </span>
              </div>
            </div>
          )
        })
      ) : (
        <div className="text-center w-auto p-8 bg-gray-400 text-blue-900 ">
          <span className="text-2xl text-blue-900 font-bold mr-8">
            Nothing to show here
          </span>
          <Link to={'/home'} className="underline">
            Go to Homepage
          </Link>
        </div>
      )}
    </div>
  )
}

export default Country
