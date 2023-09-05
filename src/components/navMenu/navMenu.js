import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// Navigation menu component to display navigation links
function NavMenu() {
  return (
    <Navbar className="navigation">
      <Link to="/">Home</Link>
      <Link to="/userProfile">Profile</Link>
      <Link to="/Shopping">Products</Link>
      <Link to="/Legal">Legal</Link>
      <Link to="/interestCalculator">Interest calculator</Link>
    </Navbar>
  );
}

export default NavMenu;
