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
    <div className="w-auto  p-6 h-auto bg-transparent ">
      {country ? (
        <div className="w-auto bg-transparent text-gray-400  h-auto md: w-64 sm: w-64 lg:p-12 country">
          <div className="md:hidden sm:hidden lg:flex  lg:w-auto lg:bg-gray-300  country-head">
            <div className="lg:flex-1 m-2 p-2  lg:w-8 text-blue-800 font-black tracking-wider">
              Name
            </div>
            <div className="lg:flex-1 m-2 p-2  w-8 text-blue-800 font-black tracking-wider">
              Confirmed cases
            </div>
            <div className="lg:flex-1 m-2 p-2  w-8 text-blue-800 font-black tracking-wider">
              Deaths
            </div>
            <div className="lg:flex-1 m-2 p-2  w-8 text-blue-800 font-black tracking-wider">
              Recovered
            </div>
            <div className="lg:flex-1 m-2 p-2  w-8 text-blue-800 font-black tracking-wider">
              Date
            </div>
          </div>

          {country.length > 0 ? (
            country.map((oneCountry, index) => (
              <div
                className="lg:flex w-full block  border
              border-solid
              border-blue-100 mb-1 transition duration-500 ease-in-out lg:bg-gray-200 transform hover:-translate-y-1 hover:scale-100 cursor-pointer md:block  sm:block child bg-white-900"
                key={index}
              >
                <div className="flex-1 m-2 p-2  lg:w-16 text-black font-bold tracking-wider md:block sm:block md:w-full sm:w-full">
                  <b className="lg:hidden m-2">Country:</b>

                  {oneCountry.Country}
                </div>
                <div className="flex-1 m-2 p-2  lg:w-8 text-green-500 font-black tracking-wider">
                  <b className="lg:hidden m-2 text-black font-bold">
                    Confirmed Cases:
                  </b>
                  {oneCountry.Confirmed}
                </div>
                <div className="flex-1 m-2 p-2  lg:w-8 text-red-500 font-black tracking-wider ">
                  <b className="lg:hidden m-2 text-black font-bold">Deaths:</b>
                  {oneCountry.Deaths}
                </div>
                <div className="flex-1 m-2 p-2  lg:w-8 text-green-500 font-black tracking-wider">
                  <b className="lg:hidden m-2 text-black font-bold">
                    Recoveries:
                  </b>
                  {oneCountry.Recovered}
                </div>
                <div className="flex-1 m-2 p-2  lg:w-16 lg:text-sm text-blue-800 font-bold text-sm font-black tracking-wider">
                  <b className="lg:hidden m-2 text-black font-bold">Date:</b>
                  {new Date(oneCountry.Date).toDateString()}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-auto p-8 bg-gray-400 text-blue-900 ">
              <span className="text-2xl text-blue-900 font-bold lg:mr-8">
                No information yet!
              </span>
              <Link to={'/home'} className="underline">
                Go to Homepage
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center w-auto p-8 bg-gray-400 text-blue-900 ">
          <span className="text-2xl text-blue-900 font-bold lg:mr-8">
            Loading.....
          </span>
        </div>
      )}
    </div>
  )
}

export default Country
