import React from 'react';
import "../components-css/Navbar.css";

// SVG icon for search
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFDACA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="25" x2="16.65" y1="25" y2="17" />
    </svg>
);

function Navbar() {
    return (
        <nav>
            <div className="navbar-container">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/recipes">Recipes</a></li>
                    <li>
                        <div className="search-container">
                            <input type="text" placeholder="search..." name="search" />
                            <button type="submit">
                                <SearchIcon /> {/* Use the SVG icon as button */}
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
