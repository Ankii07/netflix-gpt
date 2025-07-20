import React from 'react'
import myImage from '../assets/logo.png';
const Header = () => {
  return (
    <div className="absolute p-8 py-2 bg-gradient-to-b from-black z-10 "> 
       <img className='w-44' src= {myImage} alt="Logo_img"></img>
       {/* <h1 className='text-2xl bg-red-500'>Hii</h1> */}
    </div>

  )
}

export default Header
