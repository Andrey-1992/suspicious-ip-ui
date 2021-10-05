import './Error.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Error: React.FC = () => {
  return (
    <div className='error'>
      <NavLink to='/suspicious-ip'>
        <img className='error-img' src="https://img.freepik.com/free-vector/404-error-page-found-lamp-broken-background_114341-57.jpg?size=626&ext=jpg" alt="404-img"/>
      </NavLink>
    </div>
  )
}
