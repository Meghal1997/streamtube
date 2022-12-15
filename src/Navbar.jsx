import React from "react";
import img1 from './Images/logo1.png'

function Navbar() {
    return <nav className="nav">

        <img src={img1} className='logo1' alt="envato_logo" ></img>
        <button className="ButtonNav" type="button">Buy Now</button>

    </nav>
}

export default Navbar;