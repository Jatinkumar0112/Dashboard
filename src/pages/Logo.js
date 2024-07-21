import React from 'react'
import { Link } from 'react-router-dom'
import logo1Svg from "../assets/logo1.svg"

const logo = () => {
  return (
    
      <Link to='/' className='absolute top-[1.5rem] left-[1rem] [text-decoration:none] text-lg flex items-center
       text-fuchsia '>
        <img src={logo1Svg} alt="CryptoBucks"></img>
        <span>CryptoStack</span>
      </Link>
      
    
  )
}

export default logo
