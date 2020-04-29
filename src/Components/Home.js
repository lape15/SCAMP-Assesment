import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
  const [stat, setStat] = useState([])
  const [searchField, setSearchField] = useState('')
  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://api.covid19api.com/summary')
        .then((response) => {
          setStat(response.data.Countries)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    fetchData()
  }, [])
  const handeleSearch = (e) => {
    setSearchField(e.target.value)
    console.log(searchField)
  }

  const filteredCountries = stat.filter((country) => {
    return (
      country.Country.toLowerCase().indexOf(searchField.toLowerCase()) !== -1
    )
  })
  return (
    <div className="w-auto  p-6 h-auto bg-transparent">
      <h2 className="text-center text-blue-800 italic lg:text-3xl mb-6 md: text-xl text-center">
        Get your daily COVID19 updates here
      </h2>
      <div class="w-full max-w-xs text-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Country"
            onChange={handeleSearch}
          />
        </form>
      </div>
      <div className="w-full bg-gray-400 text-gray-400  h-full">
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

        {filteredCountries.map((country, index) => (
          <Link
            className="flex w-auto  border
            border-solid
            border-gray-100 transition duration-500 ease-in-out bg-gray-200 transform hover:-translate-y-1 hover:scale-100 cursor-pointer"
            key={index}
            to={`/home/${country.Slug}`}
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
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Home
