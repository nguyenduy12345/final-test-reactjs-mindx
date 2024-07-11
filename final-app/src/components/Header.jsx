import { NavLink, Routes, Route } from "react-router-dom";
import React from 'react'

import './Header.css'
const Header = () => {
  return (
    <ul className="todo__nav">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/active"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Active
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/completed"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Completed
            </NavLink>
          </li>
        </ul>
  
    )
}

export default Header
