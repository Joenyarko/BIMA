import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';

const Home = () => {
    return (
        <div className="home-page fade-in">
            <HeroCarousel />

            {/* Featured Products Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="heading-lg mb-2">Our Products</h2>
                        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            BIMA offers a wide range of health and insurance services, tailor-made to create short-term and long-term value for our customers.
                        </p>
                    </div>

                    <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'B-Health', desc: 'Unlimited access to qualified doctors and health programs with Single, Joint, and Family covers.' },
                            { title: 'B-Life', desc: 'Life insurance cover up to GH¢ 44,856 to protect your family\'s financial future.' },
                            { title: 'B-Care', desc: 'Bundled comprehensive care options merging B-Health and B-Life for full protection.' }
                        ].map((product, idx) => (
                            <div key={idx} className="glass-panel" style={{ padding: '2rem', textAlign: 'center', transition: 'var(--transition)' }}>
                                <h3 className="mb-2">{product.title}</h3>
                                <p className="text-muted mb-3">{product.desc}</p>
                                <Link to="/products" className="text-secondary" style={{ fontWeight: '600' }}>Learn more &rarr;</Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <p className="mb-2"><strong>Affordable plans starting from GH¢ 18/month</strong></p>
                        <p className="text-muted">Simple registration via SMS or call • Paperless and no medical check-up</p>
                    </div>
                </div>
            </section>

            {/* How to Claim Section */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="heading-md mb-2" style={{ color: 'white' }}>How To Claim</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
                            Reporting and processing claims with BIMA is simple and fast.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {/* Call to report */}
                        <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '1rem' }}>
                                <div style={{ background: 'white', color: 'var(--primary)', padding: '0.75rem', borderRadius: '50%', display: 'flex' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <h3 style={{ color: 'white', margin: 0 }}>Call to Report</h3>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                                Call <strong>0800000545</strong> to report claims within 180 days of the event or after hospital discharge. Valid claims will be paid within 3 working days.
                            </p>
                        </div>

                        {/* WhatsApp */}
                        <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '1rem' }}>
                                <div style={{ background: '#25D366', color: 'white', padding: '0.75rem', borderRadius: '50%', display: 'flex' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                </div>
                                <h3 style={{ color: 'white', margin: 0 }}>WhatsApp Claims</h3>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                                Claims documents can be sent via WhatsApp. Call <strong>0800000545</strong> to initiate the claims process directly from your phone.
                            </p>
                        </div>

                        {/* Required Documents */}
                        <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '1rem' }}>
                                <div style={{ background: 'white', color: 'var(--primary)', padding: '0.75rem', borderRadius: '50%', display: 'flex' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                </div>
                                <h3 style={{ color: 'white', margin: 0 }}>Required Documents</h3>
                            </div>
                            <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', paddingLeft: '1.2rem', marginBottom: 0 }}>
                                <li style={{ marginBottom: '0.5rem' }}>Valid national ID (Voters' ID, Passport, Ghana Card)</li>
                                <li>Evidence of Hospitalisation (Discharge notice/summary, patient bill, doctor's report, death cert. or BIMA claims form)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Methods Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="heading-lg mb-2">Other Ways to Register</h2>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                        <div className="glass-panel" style={{ flex: '1 1 300px', padding: '2rem', textAlign: 'center' }}>
                            <h3 className="mb-2">Customer Service</h3>
                            <p className="text-muted mb-3">Call our support team from 8am – 8pm (Mon-Sat)</p>
                            <a href="tel:080000545" className="btn btn-outline" style={{ width: '100%' }}>Call 080 000 0545</a>
                        </div>
                        <div className="glass-panel" style={{ flex: '1 1 300px', padding: '2rem', textAlign: 'center' }}>
                            <h3 className="mb-2">Subscription via dial pad</h3>
                            <p className="text-muted mb-3">Dial *714*99# to self-register</p>
                            <button className="btn btn-primary" style={{ width: '100%' }}>*714*99#</button>
                        </div>
                        <div className="glass-panel" style={{ flex: '1 1 300px', padding: '2rem', textAlign: 'center' }}>
                            <h3 className="mb-2">Confirmation</h3>
                            <p className="text-muted mb-3">MTN: Dial *714*90#<br />AirtelTigo: Dial *110*4*3#</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
