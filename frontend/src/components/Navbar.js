import React from "react";
import {Link} from "react-router-dom";  // This had incorrect syntax

function Navbar(){
    return (
       <div className="navbar">
              <Link to="/">Home</Link> 
              <h1>My React App</h1>
       </div>
    );
}

export default Navbar;