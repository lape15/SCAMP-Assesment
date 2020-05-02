import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [toggle, setToggler] = useState(false)

  const handleToggler = () => {
    console.log(toggle)
    setToggler(!toggle)
  }

  return (
    <nav>
      {/*className="sm:border sm:border-solid sm:border-blue-400"*/}
      <div class="container mx-auto px-6 py-2 flex justify-between items-center relative fixed">
        <NavLink className="px-4 font-bold text-3xl no-underline" to="/home">
          Covid19
        </NavLink>
        <div
          class="block cursor-pointer lg:hidden menu-toggler"
          onClick={handleToggler}
        >
          <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-blue-200 appearance-none focus:outline-none">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`hidden  lg:block  md:block  ${toggle ? 'menu' : 'hide'}`}
        >
          <ul class="lg:inline-flex md:inline">
            <li className=" lg:border lg:border-none mb-2">
              <NavLink class="px-4 font-bold " to="/">
                Home
              </NavLink>
            </li>
            <li className=" lg:border lg:border-none  mb-2">
              <NavLink class="px-4 font-bold hover:text-gray-800" to="/">
                About
              </NavLink>
            </li>
            <li className=" lg:border lg:border-none mb-2">
              <NavLink class="px-4 font-bold hover:text-gray-800" to="/">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
