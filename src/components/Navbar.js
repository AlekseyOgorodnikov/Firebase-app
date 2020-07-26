import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">
            Firebase APP
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">О нас</NavLink>
            </li>
        </ul>
    </nav>)
