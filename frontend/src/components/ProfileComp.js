import React from 'react';
import "../components-css/Navbar.css";

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFDACA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="25" x2="16.65" y1="25" y2="17" />
    </svg>
);

const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="#FFDACA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

function Profile() {
    return (
        <ul className="navbar-items-right">
            <ProfileIcon />
            <li><a href="/profile">Profile</a></li>
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

export default Profile;