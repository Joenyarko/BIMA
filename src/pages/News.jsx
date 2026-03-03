import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Newspaper } from 'lucide-react';

const News = () => {
    const newsItems = [
        {
            id: 1,
            type: 'News',
            title: 'BIMA HONORS HARDWORKING EMPLOYEES',
            date: 'December 15, 2022',
            excerpt: 'BIMA Ghana celebrates the dedication and hard work of its employees at the annual awards ceremony...',
            image: '/Employeeaward.jpg',
            icon: <Trophy size={20} />
        },
        {
            id: 2,
            type: 'Award',
            title: 'BIMA WIN AT THE GHANA INSURANCE AWARD 2020',
            date: 'August 28, 2020',
            excerpt: 'BIMA has been recognized for its outstanding contribution to the insurance sector in Ghana...',
            image: '/GIA-Awards_Jpeg-400x284.jpg',
            icon: <Trophy size={20} />
        },
        {
            id: 3,
            type: 'News',
            title: 'BIMA GHANA DISRUPTS THE INSURANCE INDUSTRY',
            date: 'May 10, 2020',
            excerpt: 'With mobile technology, BIMA is changing the way insurance is accessed and utilized in emerging markets...',
            image: '/news-featured-image-400x284.jpg',
            icon: <Newspaper size={20} />
        },
        {
            id: 4,
            type: 'Partnership',
            title: 'AIRTELTIGO PARTNERS BIMA',
            date: 'February 5, 2020',
            excerpt: 'A new strategic partnership aims to provide wider access to insurance products for mobile subscribers...',
            image: '/atpartner.jpg',
            icon: <Newspaper size={20} />
        }
    ];

    return (
        <div className="page-container fade-in" style={{ paddingTop: '100px' }}>

            <section style={{ display: 'flex', flexWrap: 'wrap', width: '100%', alignItems: 'stretch', background: 'var(--primary)' }}>
                {/* Left side: Image */}
                <div style={{ flex: '1 1 500px', minHeight: '400px', backgroundImage: 'url(/awardshero.png)', backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                </div>
                {/* Right side: Two-tone content block to match screenshot precisely */}
                <div style={{ flex: '1 1 500px', display: 'flex', minHeight: '400px' }}>
                    <div style={{ flex: '1 1 70%', background: 'var(--primary)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 3rem' }}>
                        <div style={{ maxWidth: '450px' }}>
                            <h1 className="mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', fontFamily: 'Georgia, serif', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                News & Awards
                            </h1>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.95)' }}>
                                BIMA is widely recognised as a leading force of innovation and inclusion. We have won major awards, including a GSMA Global Mobile Award 2019, the Oscars of the mobile industry. Read below for our latest news and award wins.
                            </p>
                        </div>
                    </div>
                    {/* The light blue empty block on the far right seen in the screenshot */}
                    <div style={{ flex: '1 1 30%', background: '#668ebd' }}></div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {newsItems.map((item) => (
                            <div key={item.id} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '220px', position: 'relative' }}>
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{
                                        position: 'absolute', top: '1rem', right: '1rem',
                                        background: 'var(--secondary)', color: 'white',
                                        padding: '0.25rem 0.75rem', borderRadius: '1rem',
                                        fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase',
                                        display: 'flex', alignItems: 'center', gap: '0.5rem'
                                    }}>
                                        {item.icon} {item.type}
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>{item.date}</p>
                                    <h3 className="mb-3" style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                                    <p className="text-muted mb-4" style={{ flexGrow: 1 }}>{item.excerpt}</p>
                                    <Link to={`/news/${item.id}`} className="btn btn-outline" style={{ display: 'inline-flex', alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>
                                        Read More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default News;
