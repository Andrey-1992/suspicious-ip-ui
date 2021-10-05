import './Nav.css';
import React from "react";
import { NavLink } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <div className="nav">
      <NavLink className='go-home' to="/suspicious-ip">
        <p className="nav-buttons">Home</p>
      </NavLink>
      <NavLink className='go-local-ip' to="local-ip">
        <p className="nav-buttons">Local IP</p>
      </NavLink>
      <NavLink className='go-search-ip' to="/searched-ip">
        <p className="nav-buttons">Search IP</p>
      </NavLink>
      <NavLink className='go-saved-ips' to="/saved-ip">
        <p className="nav-buttons">Saved IPs</p>
      </NavLink>
    </div>
  );
}