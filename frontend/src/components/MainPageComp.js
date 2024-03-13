import React from 'react';
import "../components-css/MainPageComp.css";

const MainPageComp = () => {
    return (
        <div className="mainpage-container">
            <div className="menubox">
                <a href="/about">
                    <div className="imagebox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="240" height="240" className="main-grid-item-icon" fill="#4A9448" stroke="#FFDACA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{backgroundColor: "#4A9448"}}>
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                    </div>
                    <div className="textbox">
                        <h2>About</h2>
                    </div>
                </a>
            </div>

            <div className="menubox">
                <a href="/recipes">
                    <div className="imagebox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="240" height="240" className="main-grid-item-icon" fill="#4A9448" stroke="#FFDACA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{backgroundColor: "#4A9448"}}>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                            <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
                        </svg>
                    </div>
                    <div className="textbox">
                        <h2>Recipes</h2>
                    </div>
                </a>
            </div>

            <div className="menubox">
                <a href="/new-recipe">
                    <div className="imagebox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="240" height="240" className="main-grid-item-icon" fill="#4A9448" stroke="#FFDACA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{backgroundColor: "#4A9448"}}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                        <path d="M14 3v5h5M12 18v-6M9 15h6"/>
                        </svg>
                    </div>
                    <div className="textbox">
                        <h2>New recipe</h2>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default MainPageComp;