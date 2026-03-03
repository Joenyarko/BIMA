import React from 'react';
import { ShieldCheck, Heart, UserPlus, FileText, Download } from 'lucide-react';

const Products = () => {

    return (
        <div className="page-container fade-in" style={{ paddingTop: '100px' }}>

            <section className="section bg-light" style={{ padding: '5rem 0 3rem 0' }}>
                <div className="container text-center">
                    <h1 className="heading-lg mb-3 text-primary">Our Policies</h1>
                    <p className="text-muted heading-sm" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Explore our comprehensive health, life, and bundled care insurance policies designed to give you and your family ultimate peace of mind.
                    </p>
                </div>
            </section>

            {/* B-Health Policy */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ padding: '1rem', background: 'var(--primary)', color: 'white', borderRadius: '1rem' }}>
                            <Heart size={36} />
                        </div>
                        <div>
                            <h2 className="heading-lg">B-Health</h2>
                            <p className="text-muted" style={{ fontSize: '1.2rem' }}>Unlimited access to qualified doctors and medical support.</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        {/* Single Cover */}
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h3 className="mb-2 text-secondary">Single Cover</h3>
                            <p className="text-muted mb-3">Coverage for one individual.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Unlimited Doctor consultations</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Medication advice & prescriptions</li>
                            </ul>
                        </div>
                        {/* Joint Cover */}
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h3 className="mb-2 text-secondary">Joint Cover</h3>
                            <p className="text-muted mb-3">Coverage for you and one dependent.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Covers 2 individuals</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Shared health benefits</li>
                            </ul>
                        </div>
                        {/* Family Cover */}
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h3 className="mb-2 text-secondary">Family Cover</h3>
                            <p className="text-muted mb-3">Comprehensive coverage for the family.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Covers multiple dependents</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Extended health network access</li>
                            </ul>
                        </div>
                        {/* Family Plus Cover */}
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h3 className="mb-2 text-secondary">Family Plus</h3>
                            <p className="text-muted mb-3">Premium family health protection.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Maximum dependent coverage</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Highest cash back limits</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <a href="/BIMA_B-Health%20Single%20Joint_Final.pdf" download className="btn btn-outline">
                            <Download size={18} /> Download Single/Joint Brochure
                        </a>
                        <a href="/BIMA_B-Health%20Family_Final.pdf" download className="btn btn-outline">
                            <Download size={18} /> Download Family Brochure
                        </a>
                    </div>
                </div>
            </section>

            {/* B-Life Policy */}
            <section className="section bg-light" style={{ background: 'var(--surface-hover)' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ padding: '1rem', background: 'var(--primary)', color: 'white', borderRadius: '1rem' }}>
                            <ShieldCheck size={36} />
                        </div>
                        <div>
                            <h2 className="heading-lg">B-Life</h2>
                            <p className="text-muted" style={{ fontSize: '1.2rem' }}>Simple life insurance cover to protect your family's future.</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                        {/* Joint Cover */}
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h3 className="mb-2 text-secondary">Joint Cover</h3>
                            <p className="text-muted mb-3">Provides life insurance protection for you and one chosen family member, ensuring peace of mind.</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Rapid claims payout</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ No medical examination required</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Immediate cover upon registration</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <a href="/BIMA_B-Life%20Joint_Final.pdf" download className="btn btn-outline">
                            <Download size={18} /> Download B-Life Brochure
                        </a>
                    </div>
                </div>
            </section>

            {/* B-Care Policy */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ padding: '1rem', background: 'var(--primary)', color: 'white', borderRadius: '1rem' }}>
                            <UserPlus size={36} />
                        </div>
                        <div>
                            <h2 className="heading-lg">B-Care</h2>
                            <p className="text-muted" style={{ fontSize: '1.2rem' }}>Bundled comprehensive care offering both health and life coverage.</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '3rem' }}>
                        <div className="glass-panel" style={{ padding: '3rem' }}>
                            <h3 className="mb-2 text-secondary">Combined Coverage</h3>
                            <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                                B-Care is the ultimate all-in-one package. It merges the unlimited access to doctors found in B-Health with the robust financial protection of B-Life, offering an unprecedented level of security for you and your loved ones.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Comprehensive life & health benefits</li>
                                    <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Discounted combined premiums</li>
                                </ul>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ Centralized policy management</li>
                                    <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>✓ 24/7 dedicated support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <a href="/B-Care%20Brochure%202026%20output%20Draft%2025.02.26%201.pdf" download className="btn btn-outline">
                            <Download size={18} /> Download B-Care Brochure
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Products;
