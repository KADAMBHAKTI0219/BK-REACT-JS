import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="nav-item" activeClassName="active">Home</NavLink>
      <NavLink to="/products" className="nav-item" activeClassName="active">Products</NavLink>
      <NavLink to="/addProducts" className="nav-item" activeClassName="active">Add Products</NavLink>
      <NavLink to="/login" className="nav-item" activeClassName="active">Login</NavLink>
    </nav>
  );
}

export default Navigation;
