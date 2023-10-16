import { Outlet, Link, NavLink } from "react-router-dom";
import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-slate-800 text-white p-6">
            <div>
                <h1 className="text-3xl">My Website</h1>
            </div>
            <div className="flex gap-6 text-2xl font-bold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/form">Form</NavLink>
                <NavLink to="/users">Users</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;