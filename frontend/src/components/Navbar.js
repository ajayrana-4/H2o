import React from "react";
import {Link} from "react-router-dom";  // This had incorrect syntax

function Navbar(){
    return (
       <div className="navbar">
        
              <Link to="/">Home</Link>
              <Link to="/About">about</Link>
              <Link to="/Contact">contact</Link>
              <Link to="/Login">login</Link>
              

              <h1>H2O</h1>
              <h6>fitness is life</h6>
       </div>
    );
}

export default Navbar;