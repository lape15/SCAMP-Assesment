import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
  const [stat, setStat] = useState([])
  const [searchField, setSearchField] = useState('')
  const [activeSection, setActiveSection] = useState('country')
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
    // console.log(searchField)
  }

  const highestConfirmed = () => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((response) => {
        response.data.Countries.sort((a, b) =>
          a.TotalConfirmed < b.TotalConfirmed ? 1 : -1
        )
        setStat(response.data.Countries)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const highestDeath = () => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((response) => {
        response.data.Countries.sort((a, b) =>
          a.TotalDeaths < b.TotalDeaths ? 1 : -1
        )
        setStat(response.data.Countries)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const highestRecovered = () => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((response) => {
        response.data.Countries.sort((a, b) =>
          a.TotalRecovered < b.TotalRecovered ? 1 : -1
        )
        setStat(response.data.Countries)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // let groupedCountry = []
  // let singleCountry = ''
  // let letter
  // let oneCountry
  // const groupCountries = stat.map((country) => {

  //   letter = country.Country.charAt(0)

  //   oneCountry = country.Country.split('')
  //   singleCountry = oneCountry[0]
  //   if (singleCountry[0] === letter) {
  //     console.log(letter)
  //     groupedCountry.push(country)
  //   }
  //   return groupedCountry
  // })

  // console.log(letter)
  // console.log(groupedCountry)

  // const changeSection = (section) => {
  //   if (activeSection === section) {
  //   }
  //   setActiveSection(activeSection === section ? '' : section)
  // }
  const filteredCountries = stat.filter((country) => {
    return (
      country.Country.toLowerCase().indexOf(searchField.toLowerCase()) !== -1
    )
  })
  return (
    <div className="w-auto  p-6 h-auto bg-transparent parent">
      <h2 className="text-center text-blue-800 italic lg:text-3xl mb-6 md: text-xl text-center">
        Get your daily COVID19 updates here
      </h2>
      <div class="w-full max-w-xs text-center  m-auto">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center outline-none"
            type="text"
            placeholder="Search for a country"
            onChange={handeleSearch}
          />
        </form>
      </div>

      <div className="w-1/2  text-center bg-transparent border border-solid rounded border-white my-2 mx-auto">
        {' '}
        <button
          onClick={highestConfirmed}
          className="bg-blue-300 p-2 border rounded outline-none m-2 hover:bg-blue-800 hover:text-white"
        >
          Sort by Cases
        </button>
        <button
          onClick={highestDeath}
          className="bg-blue-300 p-2 border rounded outline-none m-2 hover:bg-blue-800 hover:text-white"
        >
          Sort by deaths
        </button>{' '}
        <button
          onClick={highestRecovered}
          className="bg-blue-300 p-2 border rounded outline-0 m-2 hover:bg-blue-800 hover:text-white"
        >
          Sort by Recovery
        </button>
      </div>
      <div className="w-auto bg-transparent text-gray-400  h-auto md: w-64 sm: w-64 lg:p-2 country">
        <div className="md:hidden sm:hidden lg:flex  lg:w-auto bg-gray-300  country-head">
          <div className="lg:flex-1 m-2 p-2  lg:w-8 text-blue-800 font-black tracking-wider">
            Country
          </div>
          <div className="flex-1 m-2 p-2 w-12 text-blue-800 font-black tracking-wider">
            All Cases
          </div>
          <div className="flex-1 m-2 p-2 w-12 text-blue-800 font-black tracking-wider">
            New Cases
          </div>
          <div className="flex-1 m-2 p-2 w-12 text-blue-800 font-black tracking-wider text-left ">
            Deaths
          </div>
          <div className="flex-1 m-2 p-2 w-8  text-blue-800 font-black tracking-wider">
            NewDeaths
          </div>

          <div className="flex-1 m-2 p-2 w-8 text-blue-800 font-black tracking-wider">
            Recovered
          </div>
        </div>

        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <Link
              className="lg:flex w-full block  border
            border-solid
            border-blue-100 mb-1 transition duration-500 ease-in-out lg:bg-gray-200 transform hover:-translate-y-1 hover:scale-100 cursor-pointer md:block  sm:block child bg-white-900"
              key={index}
              to={`/home/${country.Slug}`}
            >
              <div className="flex-1 m-2 p-2  lg:w-16 text-black font-bold tracking-wider md:block sm:block md:w-full sm:w-full">
                <b className="lg:hidden font-bold m-2">Country:</b>{' '}
                {country.Country}
              </div>
              <div className="flex-1 m-2 p-2  lg:w-8 text-blue-500 font-black tracking-wider font-bold">
                <b className="lg:hidden m-2 text-black font-bold">All Cases:</b>
                {country.TotalConfirmed}
              </div>
              <div className="flex-1 m-2 p-2  lg:w-8 text-green-500 font-black tracking-wider font-bold">
                <b className="lg:hidden m-2 text-black font-bold">New Cases:</b>
                {country.NewConfirmed}
              </div>
              <div className="flex-1 m-2 p-2  lg:w-12 text-red-500 font-black tracking-wider font-bold">
                <b className="lg:hidden m-2 text-black font-bold">Deaths:</b>
                {country.TotalDeaths}
              </div>
              <div className="flex-1 m-2 p-2 lg:w-8 text-red-500 font-black tracking-wider font-bold">
                <b className="lg:hidden m-2 text-black font-bold">
                  New Deaths:
                </b>
                {country.NewDeaths}
              </div>
              <div className="flex-1 m-2 p-2 lg:w-8 text-green-500 font-black tracking-wider font-bold">
                <b className="lg:hidden m-2 text-black font-bold">
                  Recoveries:
                </b>
                {country.TotalRecovered}
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center w-auto p-8 bg-gray-400 text-blue-900 ">
            <span className="text-2xl text-blue-900 font-bold lg:mr-8">
              Loading.....
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
export default Home
