import React from 'react'
import nba from "../../assets/nba.png.jpg"
import "../header/header.css"

const Header = () => {
  return (
    <div className='header-logo'>
        <img src={nba} alt="" />
        <div className='header-title-container'>
        <h1 className='header-title'>NBA</h1> 
        <h1>Legends</h1>
    </div>
    </div>
  )
}

export default Header