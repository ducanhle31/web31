import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Products</NavLink>
    </nav>
  );
}
// 1 sử dụng component <link>  <navlink>
// 2 sử dụng hàm navigate()=> Programing routing


