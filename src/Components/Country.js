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
      })
      .catch((error) => {
        console.log(error)
      })
  }
  getCountryStat(countrySlug)

  return (
    <div className="w-auto  p-6 h-auto bg-transparent">
      <div className="w-auto bg-transparent text-gray-400  h-auto md: w-64 sm: w-64 p-16">
        <div className="md:hidden sm:hidden lg:flex  lg:w-auto lg:bg-gray-300">
          <div className="lg:flex-1 m-12  w-8 text-blue-800 font-black tracking-wider">
            Name
          </div>
          <div className="lg:flex-1 m-12  w-8 text-blue-800 font-black tracking-wider">
            Confirmed cases
          </div>
          <div className="lg:flex-1 m-12  w-8 text-blue-800 font-black tracking-wider">
            Deaths
          </div>
          <div className="lg:flex-1 m-12  w-8 text-blue-800 font-black tracking-wider">
            Recovered
          </div>
          <div className="lg:flex-1 m-12  w-8 text-blue-800 font-black tracking-wider">
            Date
          </div>
        </div>

        {country && country.length > 0 ? (
          country.map((oneCountry, index) => (
            <div
              className="flex w-auto  border
            border-solid
            border-gray-100 transition duration-500 ease-in-out bg-gray-200 transform hover:-translate-y-1 hover:scale-100"
              key={index}
            >
              <div className="flex-1 m-12  w-16 text-blue-800 font-black tracking-wider ">
                {oneCountry.Country}
              </div>
              <div className="flex-1 m-12  w-8 text-red-500 font-black tracking-wider ">
                {oneCountry.Confirmed}
              </div>
              <div className="flex-1 m-12  w-8 text-red-500 font-black tracking-wider ">
                {oneCountry.Deaths}
              </div>
              <div className="flex-1 m-12  w-8 text-green-500 font-black tracking-wider">
                {oneCountry.Recovered}
              </div>
              <div className="flex-1 m-12  w-16 text-lg text-blue-800 font-bold font-black tracking-wider">
                {new Date(oneCountry.Date).toDateString()}
              </div>
            </div>
          ))
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
    </div>
  )
}

export default Country
