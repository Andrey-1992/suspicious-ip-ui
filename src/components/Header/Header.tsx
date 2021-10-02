import './Header.css';
import React from "react";
import { Nav } from '../Nav/Nav';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>Suspicious IP</h1>
      <Nav />  
    </div>
  );
}
