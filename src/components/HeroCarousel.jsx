import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroCarousel.css';
import bima1 from '../assets/Bima1.png';
import bima2 from '../assets/Bima2.png';
import bima3 from '../assets/Bima3.png';

const slides = [
    {
        id: 1,
        title: "Protecting the future of every family",
        subtitle: "Affordable health and life insurance plans designed for you",
        cta: "Sign Up Now",
        image: bima1
    },
    {
        id: 2,
        title: "Simple, affordable insurance services",
        subtitle: "Plans starting from GH¢ 10/month. No medical check-up required.",
        cta: "Explore Products",
        image: bima2
    },
    {
        id: 3,
        title: "Unlimited access to qualified doctors",
        subtitle: "Get tailored health programmes and medication advice whenever you need.",
        cta: "Learn More",
        image: bima3
    }
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="hero-carousel">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                    {/* Background Image */}
                    <div className="carousel-bg">
                        <img src={slide.image} alt="BIMA Carousel" className="carousel-image" />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="carousel-overlay"></div>

                    <div className="carousel-content container">
                        <h1 className="hero-title">{slide.title}</h1>
                        <p className="hero-subtitle">{slide.subtitle}</p>
                        <button className="btn btn-secondary hero-btn">{slide.cta}</button>
                    </div>
                </div>
            ))}


            {/* Indicators */}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
