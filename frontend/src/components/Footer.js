import React from 'react';
import "../components-css/Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                {/* First Row */}
                <div className="first-row">
                    <p>Look for us:</p>
                    <div className="social-icons">
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
                    </div>
                </div>
                {/* Second Row */}
                <div className="second-row">
                    <p><a href='https://www.apocapocbcn.com/?public&'>APOCAPOC.BCN</a></p>
                    <p><a href='https://www.google.com'>TERMS</a></p>
                    <p><a href='https://www.google.com'>PRIVACY AND POLICY</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

