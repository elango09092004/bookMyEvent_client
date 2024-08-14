import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">BookMyEvent</div>
            <div className="nav-links">
                <Link to={"/home"}><p>Home</p></Link>
                <Link to={"/events"}><p>Events</p></Link>
                <Link to={"/bookings"}><p>Bookings</p></Link>
            </div>
        </nav>
    );
}

export default NavBar;
