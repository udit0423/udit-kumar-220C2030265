import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/top-users">Top Users</Link>
            <Link to="/trending">Trending Posts</Link>
            <Link to="/feed">Feed</Link>
        </nav>
    );
};

export default Navbar;
