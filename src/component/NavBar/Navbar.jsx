import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Nav = () =>(
  <nav className="navbar">
    <div>
      <Link to={'/'}>Home</Link>
    </div>
    <div>
      <Link to={'/computadores'}>Computadores</Link>
    </div>
    <div>
      <Link to={'/periféricos'}>Perifericos</Link>
    </div>
    <div>
      <Link to={'/impressoras'}>Impressoras</Link>
    </div>

  </nav>
)
export default Nav