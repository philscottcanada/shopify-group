import React from 'react'
import './NavLeft.scss';
import navLeft from "../../assets/navLeft.png";

function NavLeft() {
  return (
      <div>
          <img src={navLeft} alt="nav left" className="navLeft" />
    </div>
  )
}

export default NavLeft