import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='w-[40%] mt-16 flex justify-around align-middle border border-fuchsia rounded-lg'>
      <NavLink to="/" end className={
        ({isActive}) =>{
          return `w-full text-base text-center font-nunito m-2.5 
          ${isActive ? ' bg-fuchsia text-gray-300 ': ' bg-gray-200 text-white hover:text-fuchsia active:bg-fuchsia active:text-gray-300'}
          border-0 curse-pointer rounded capitalize font-semibold `;
        }
      }>
        Crypto</NavLink>

      <NavLink to="/trending" className={
        ({isActive}) =>{
          return `w-full text-base text-center font-nunito m-2.5 
          ${isActive ? ' bg-fuchsia text-gray-300 ': ' bg-gray-200 text-white hover:text-fuchsia active:bg-fuchsia active:text-gray-300'}
          border-0 curse-pointer rounded capitalize font-semibold `;
        }
        }>
        Trending</NavLink>

      <NavLink to="/saved" className={
        ({isActive}) =>{
          return `w-full text-base text-center font-nunito m-2.5 
          ${isActive ? ' bg-fuchsia text-gray-300 ': ' bg-gray-200 text-white hover:text-fuchsia active:bg-fuchsia active:text-gray-300'}
          border-0 curse-pointer rounded capitalize font-semibold `;
        }
        }>
        saved</NavLink>
    </nav>
  )
}

export default Navigation
