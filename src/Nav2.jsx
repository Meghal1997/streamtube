import React from "react";
import img2 from './Images/logo2.png'
import img6 from './Images/MIcon.png'
import image from './Images/SIcon.png'


function Nav2() {
    return <nav className="nav2">


        <img src={img2} className='logo2' alt="Streamtube_logo" ></img>
        <div className="Searchbox">
            <input
                type="text"
                placeholder="Search here..." /> 
                <button className="Searchbarbutton" type="button"><img src={image} className='logo8' alt="Search_logo" /></button>
        
        </div>
        <div className="Sign">
        <button className="SignIn" type="button">Sign In</button>
        </div>
        <div className="MIcons"><img src={img6} className='logo6' alt="MIcon" ></img>
        </div>
    </nav>
}

export default Nav2;
