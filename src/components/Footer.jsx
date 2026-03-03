import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-col">
                        <img src="/bima-logo.png" alt="BIMA Logo" style={{ height: '40px', objectFit: 'contain', marginBottom: '1.5rem', filter: 'brightness(0) invert(1) brightness(0.5)' }} className="mb-3" />
                        <p className="footer-text mb-4">
                            Protecting the future of every family. BIMA is the leading provider of mobile-delivered insurance and health services in emerging markets.
                        </p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/bima_ghana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://www.youtube.com/channel/UC3xgELNhZqdN9SrsVEkmdIw" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                {/* Custom simple YouTube icon since lucide-react might not have it in all versions, or use an SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About BIMA</Link></li>
                            <li><Link to="/products">Our Products</Link></li>
                            <li><Link to="/news">News & Awards</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Products</h4>
                        <ul className="footer-links">
                            <li><Link to="/products">B-Health</Link></li>
                            <li><Link to="/products">B-Life</Link></li>
                            <li><Link to="/products">B-Care</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h4 className="footer-title">Contact</h4>
                        <div className="contact-item">
                            <Phone size={20} className="contact-icon text-secondary" />
                            <div>
                                <p className="text-sm text-muted">Customer Service</p>
                                <a href="tel:080000545" className="contact-link">080 000 0545</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} className="contact-icon text-secondary" />
                            <div>
                                <p className="text-sm text-muted">Email Us</p>
                                <a href="mailto:info@gh.milvik.com" className="contact-link">info@gh.milvik.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <MapPin size={20} className="contact-icon text-secondary" />
                            <div>
                                <p className="text-sm text-muted">Head Office</p>
                                <p className="contact-text">FAACO Complex Alajo,<br />Opposite Ghana Police Academy,<br />Accra</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} BIMA Ghana. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
