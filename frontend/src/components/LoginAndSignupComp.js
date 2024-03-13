import React from 'react';
import "../components-css/Navbar.css";

// SVG icon for search
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFDACA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="25" x2="16.65" y1="25" y2="17" />
    </svg>
);

function LoginAndSignUp() {
    return (
        <ul className="navbar-items-right">
            <li><a href="/login">Login</a></li>
            <li><a href="/registration">Signup</a></li>
            <li>
                <div className="search-container">
                    <button type="submit">
                        <SearchIcon />
                    </button>
                    <input type="text" placeholder="search..." name="search" />
                </div>
            </li>
        </ul>
    );
}

export default LoginAndSignUp;