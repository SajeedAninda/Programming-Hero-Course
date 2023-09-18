import { Outlet, Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-slate-800 text-white p-6">
            <div>
                <h1 className="text-3xl">My Website</h1>
            </div>
            <div className="flex gap-6 text-2xl font-bold">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/form">Form</Link>
                <Link to="/users">Users</Link>
            </div>
        </nav>
    );
};

export default Navbar;