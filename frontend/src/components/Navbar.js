import React from 'react';
import "../components-css/Navbar.css";

// SVG icon for search
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFDACA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="25" x2="16.65" y1="25" y2="17" />
    </svg>
);

function Navbar() {
    return (
        <nav>
            <div className="navbar-container">
                <ul className="navbar-items-left">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li className="recipes-dropdown">
                        <a href="/recipes" >Recipes</a>
                        <div className="dropdown-content">
                            <div className="columns">
                                <div className="column">
                                    <h3>BREAKFAST</h3>
                                    <ul>
                                        <li><a href="/recipes/category1">Placeholder 1</a></li>
                                        <li><a href="/recipes/category1">Placeholder 2</a></li>
                                        <li><a href="/recipes/category1">Placeholder 3</a></li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h3>LUNCH</h3>
                                    <ul>
                                        <li><a href="/recipes/category2">Placeholder 1</a></li>
                                        <li><a href="/recipes/category2">Placeholder 2</a></li>
                                        <li><a href="/recipes/category2">Placeholder 3</a></li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h3>SNACKS</h3>
                                    <ul>
                                    <li><a href="/recipes/category2">Placeholder 1</a></li>
                                        <li><a href="/recipes/category2">Placeholder 2</a></li>
                                        <li><a href="/recipes/category2">Placeholder 3</a></li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h3>DINNERS</h3>
                                    <ul>
                                    <li><a href="/recipes/category2">Placeholder 1</a></li>
                                        <li><a href="/recipes/category2">Placeholder 2</a></li>
                                        <li><a href="/recipes/category2">Placeholder 3</a></li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h3>DESSERTS</h3>
                                    <ul>
                                    <li><a href="/recipes/category2">Placeholder 1</a></li>
                                        <li><a href="/recipes/category2">Placeholder 2</a></li>
                                        <li><a href="/recipes/category2">Placeholder 3</a></li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h3>SIDES</h3>
                                    <ul>
                                    <li><a href="/recipes/category2">Placeholder 1</a></li>
                                        <li><a href="/recipes/category2">Placeholder 2</a></li>
                                        <li><a href="/recipes/category2">Placeholder 3</a></li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h3>DRINKS</h3>
                                    <ul>
                                    <li><a href="/recipes/category2">Placeholder 1</a></li>
                                        <li><a href="/recipes/category2">Placeholder 2</a></li>
                                        <li><a href="/recipes/category2">Placeholder 3</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='slashes'>/ /</li>
                    <li className='social-icons'>
                        
                        {/* Facebook */}
                        <a href="https://www.facebook.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>
                        {/* Twitter */}
                        <a href="https://www.twitter.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-items-right">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                    <li>
                        <div className="search-container">
                            <button type="submit">
                                <SearchIcon />
                            </button>
                            <input type="text" placeholder="search..." name="search" />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;