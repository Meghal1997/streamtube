import React from "react";
import arrowlogo from "./Images/arrow-right.png"
import house1 from "./Images/house1.png"
import like from "./Images/like.png"
import lock from "./Images/lock.png"
import User from "./Images/user-circle.png"
function Sidebar() {
    return <nav className="Side">

<button className="Sidebarbutton" type="button"><img src={arrowlogo} className='Arrow' alt="Arrow_logo" /></button>
<button className="Homebutton" type="button"><img src={house1} className='home' alt="house" /></button>
<button className="likebutton" type="button"><img src={like} className='like' alt="Like" /></button>
<button className="lockbutton" type="button"><img src={lock} className='lock' alt="Lock" /></button>
<button className="userbutton" type="button"><img src={User} className='user' alt="user" /></button>




    </nav>
}

export default Sidebar;