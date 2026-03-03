import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us. We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="page-container fade-in" style={{ paddingTop: '100px' }}>

            {/* Header */}
            <section className="section bg-light" style={{ padding: '5rem 0 3rem 0', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: 'white' }}>
                <div className="container text-center">
                    <h1 className="heading-lg mb-3" style={{ color: 'white' }}>Contact Us</h1>
                    <p className="heading-sm" style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
                        We're here to help. Reach out to our customer service team with any questions or support needs.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                        {/* Contact Info */}
                        <div>
                            <h2 className="heading-md mb-4 text-primary">Get In Touch</h2>
                            <p className="text-muted mb-5" style={{ fontSize: '1.1rem' }}>
                                Please contact us on queries and support via the details below or use our contact form.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                    <div style={{ background: 'rgba(212, 47, 97, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--secondary)' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="mb-1" style={{ fontSize: '1.2rem' }}>Phone Support</h3>
                                        <p className="text-muted"><a href="tel:080000545" style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>080 000 0545</a></p>
                                        <p className="text-sm text-muted mt-1">Available 8am until 8pm</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                    <div style={{ background: 'rgba(212, 47, 97, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--secondary)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="mb-1" style={{ fontSize: '1.2rem' }}>Email Us</h3>
                                        <p className="text-muted"><a href="mailto:info@gh.milvik.com" style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>info@gh.milvik.com</a></p>
                                        <p className="text-sm text-muted mt-1">We aim to respond within 24 hours</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                    <div style={{ background: 'rgba(212, 47, 97, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--secondary)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="mb-1" style={{ fontSize: '1.2rem' }}>Our Office</h3>
                                        <p className="text-muted mb-1">BIMA Head Office<br />FAACO Complex, Alajo<br />Opposite Ghana Police Academy<br />Accra, Ghana</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1rem', boxShadow: 'var(--shadow-xl)' }}>
                            <h3 className="mb-4">Send a Message</h3>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-main)' }}>Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', outline: 'none', transition: 'border 0.3s' }}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div>
                                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-main)' }}>Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', outline: 'none' }}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-main)' }}>Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', outline: 'none' }}
                                            placeholder="054 000 0000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-main)' }}>Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', outline: 'none', resize: 'vertical' }}
                                        placeholder="How can we help you today?"
                                    ></textarea>
                                </div>

                                <p className="text-sm text-muted">
                                    I agree that BIMA may collect, use and disclose my personal data as set out in the Privacy Policy
                                </p>

                                <button type="submit" className="btn btn-secondary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
