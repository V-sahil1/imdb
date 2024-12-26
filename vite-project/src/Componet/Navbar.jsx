import React from 'react'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex space-x-8 border items-center pl-2  py-2'>
        <img className='w-[50px]' src={Logo} alt="" />
        <Link className='font-bold text-blue-500 text-xl ' to="/">Movies</Link>
        <Link className='font-bold text-blue-500 text-xl' to="./Watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar