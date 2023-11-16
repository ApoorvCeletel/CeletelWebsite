import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light border`} style={{border: '1px solid gray'}}>
            <div className="container-fluid">
                <div className="logo">
                    <img src="/images/logo.svg" alt="Logo" style={{ marginRight: '25px' }} />
                </div>
                <button
                    className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={isNavOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={toggleNav}
                    style={{ boxShadow: 'none', background: "none", marginRight: '20px' }}
                >
                    <img src="/images/list.svg" alt="Hamburger Icon" style={{ width: '30px', height: '30px', color: 'dark' }} />
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#home">Home</a>
                        <a className="nav-link" href="#product">
                            Product <img src="/images/chevron-down.svg" alt="Dropdown Icon" />
                        </a>
                        <a className="nav-link" href="#pricing">Pricing</a>
                    </div>
                    <div className="ms-auto custom-ms-auto">
                        <button className="btn btn-warning me-2" type="button">
                            Login
                        </button>
                        <button className="btn btn-outline-warning text-dark" type="button">
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
