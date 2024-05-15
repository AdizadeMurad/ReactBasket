import React, { useContext } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvider'



function Navbar() {
const {basket} = useContext(MainContext)

  return (
  <nav className='navbar'>
    <ul>
        <li><Link to={"/"}>İTEMS</Link></li>
        <li><Link to={"/basket"}>BASKET {basket.length} </Link></li>
        <li><Link to={"/wishlist"}>WISHLIST</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar