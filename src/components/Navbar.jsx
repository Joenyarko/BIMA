import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled || location.pathname !== '/' ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/bima-logo.png" alt="BIMA Logo" style={{ height: '40px', objectFit: 'contain' }} />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-menu">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About BIMA</Link>
                    <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
                    <Link to="/news" className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`}>News & Awards</Link>
                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>

                    <a href="tel:080000545" className="btn btn-secondary nav-cta">
                        <Phone size={18} /> Call Us
                    </a>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
                <div className="mobile-nav-links">
                    <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/about" className={`mobile-link ${location.pathname === '/about' ? 'active' : ''}`}>About BIMA</Link>
                    <Link to="/products" className={`mobile-link ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
                    <Link to="/news" className={`mobile-link ${location.pathname === '/news' ? 'active' : ''}`}>News & Awards</Link>
                    <Link to="/contact" className={`mobile-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    <a href="tel:080000545" className="btn btn-secondary mobile-cta">
                        <Phone size={18} /> Call Us Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
