import React, { useState } from 'react'
import axios from 'axios'
const Home = () => {
  const [stat, setStat] = useState([])
  axios
    .get('https://api.covid19api.com/summary')
    .then((response) => {
      // console.log(response.data)
      setStat(response.data.Countries)
    })
    .catch((error) => {
      console.log(error)
    })
  // console.log(stat)
  return (
    <div className="w-auto  p-6 h-auto bg-transparent">
      <h2 className="text-center text-blue-800 italic lg:text-3xl mb-6 md: text-xl text-center">
        Get your daily COVID19 updates here
      </h2>
      <div className="w-full bg-gray-400 text-gray-400 border border-solid rounded border-black h-full">
        <div className="flex  lg:w-auto lg:bg-gray-300 ">
          <div className="lg:flex-1 m-12  w-8 text-blue-800 font-black tracking-wider">
            Country
          </div>
          <div className="flex-1 m-12 w-8  text-blue-800 font-black tracking-wider">
            NewDeaths
          </div>
          <div className="flex-1 m-12 w-8 text-blue-800 font-black tracking-wider">
            NewRecovered
          </div>
          <div className="flex-1 m-12  w-12 text-blue-800 font-black tracking-wider">
            Confirmed Total
          </div>
          <div className="flex-1 m-12 w-8 text-blue-800 font-black tracking-wider">
            Deaths
          </div>
          <div className="flex-1 m-12 w-8 text-blue-800 font-black tracking-wider">
            Recovered
          </div>
        </div>

        {stat.map((country, index) => (
          <div
            className="flex w-auto  border
            border-solid
            border-gray-100 transition duration-500 ease-in-out bg-gray-200 transform hover:-translate-y-1 hover:scale-90"
            key={index}
          >
            <div className="flex-1 m-12  w-16 text-blue-800 font-black tracking-wider ">
              {country.Country}
            </div>
            <div className="flex-1 m-12  w-8 text-red-500 font-black tracking-wider ">
              {country.NewDeaths}
            </div>
            <div className="flex-1 m-12  w-8 text-green-500 font-black tracking-wider">
              {country.NewRecovered}
            </div>
            <div className="flex-1 m-12  w-12 text-blue-800 font-black tracking-wider">
              {country.TotalConfirmed}
            </div>
            <div className="flex-1 m-12 w-8 text-red-500 font-black tracking-wider">
              {country.TotalDeaths}
            </div>
            <div className="flex-1 m-12 w-8 text-green-500 font-black tracking-wider">
              {country.TotalRecovered}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
