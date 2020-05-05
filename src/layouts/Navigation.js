import React from 'react';
import { NavLink } from 'react-router-dom'
import "../styles/Navigation.css"

const navList = [
  { name: 'start', path: '/', exact: true },
  { name: 'produkt', path: '/products' },
  { name: 'kontakt', path: '/contact' },
  { name: 'panel administratora', path: '/admin' },
]

const Navigation = () => {

  const menu = navList.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>

    </li>
  ))
  return (
    <nav className='main'>
      <ul>
        {menu}
      </ul>
    </nav>
  );
}

export default Navigation;