import React from "react";
import logo from '../images/images.png'


function Navbar(){
    return(
        <nav className="nav">
            <div style={{display:'flex', alignItems: 'center', alignContent: 'flex-end'}}>
            <img className="logo" src={logo} alt="react logo"/>

           <h1 className="nav_title">We ❤️ React Jokes</h1>
           </div>


           <h2 className="project">project 0.0.2</h2>
        </nav>
    )
}


export default Navbar;