import React from 'react';
import { Shield, Smartphone, HeartPulse } from 'lucide-react';

const About = () => {
    return (
        <div className="page-container fade-in" style={{ paddingTop: '100px' }}>

            {/* Header */}
            <section className="section bg-light" style={{ background: 'linear-gradient(135deg, var(--background), #e2e8f0)', padding: '6rem 0' }}>
                <div className="container text-center">
                    <h1 className="heading-lg mb-3">About BIMA</h1>
                    <p className="text-muted heading-sm" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        We are the leading provider of mobile-delivered insurance and health services in emerging markets.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                        <div>
                            <h2 className="heading-md mb-3 text-primary">Our Journey in Ghana</h2>
                            <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                BIMA Ghana since its inception in August 2010 continues to offer simple and affordable life, accident and health insurance services. We have disrupted the traditional insurance industry and allowed millions of low-income families to access insurance for the first time.
                            </p>
                            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                We established the mobile-delivered insurance model. Here customers can register for an insurance policy via their mobile handset and pay for cover through deduction of prepaid airtime credit, or through their postpaid bills.
                            </p>
                        </div>

                        <div className="glass-panel" style={{ padding: '3rem', background: 'var(--primary)', color: 'white', borderRadius: '1rem' }}>
                            <h3 className="mb-3" style={{ color: 'white' }}>Our Groundbreaking Model</h3>
                            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                We combine the power of mobile technology with a unique agent-led approach to consumer education to bring insurance to emerging markets.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span style={{ display: 'inline-flex', background: 'var(--secondary)', padding: '0.25rem', borderRadius: '50%', marginRight: '1rem' }}><Shield size={16} color="white" /></span>
                                    <span>Pay-as-you-go ('PAYG') insurance</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span style={{ display: 'inline-flex', background: 'var(--secondary)', padding: '0.25rem', borderRadius: '50%', marginRight: '1rem' }}><Smartphone size={16} color="white" /></span>
                                    <span>Paperless mobile registration</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span style={{ display: 'inline-flex', background: 'var(--secondary)', padding: '0.25rem', borderRadius: '50%', marginRight: '1rem' }}><HeartPulse size={16} color="white" /></span>
                                    <span>Unlimited doctor access</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* How we help */}
            <section className="section bg-light">
                <div className="container text-center">
                    <h2 className="heading-md mb-4">How We Help</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h4 className="mb-2">Health Management</h4>
                            <p className="text-muted">We offer a range of services that help customers manage their own health through tailored health programmes.</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h4 className="mb-2">Medical Access</h4>
                            <p className="text-muted">We provide unlimited access to qualified doctors and support with medication advice and discounts.</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h4 className="mb-2">Financial Protection</h4>
                            <p className="text-muted">With policies like B-Life offering up to GH¢ 44,856 in total disability cover and hospitalization cash backs, our policies ensure your financial security.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="heading-md mb-4 text-primary">Hear from our customers</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="glass-panel" style={{ overflow: 'hidden', borderRadius: '1rem', aspectRatio: '16/9', background: '#e2e8f0', position: 'relative' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/KkR_ksYsCEs"
                                title="Customer Testimonial 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                        </div>
                        <div className="glass-panel" style={{ overflow: 'hidden', borderRadius: '1rem', aspectRatio: '16/9', background: '#e2e8f0', position: 'relative' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/5p7B7i5gLxA"
                                title="Customer Testimonial 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                        </div>
                        <div className="glass-panel" style={{ overflow: 'hidden', borderRadius: '1rem', aspectRatio: '16/9', background: '#e2e8f0', position: 'relative' }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/Hqn634fiZBU"
                                title="Customer Testimonial 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
