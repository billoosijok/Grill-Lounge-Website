import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { About } from '../components/About';
import { Reviews } from '../components/Reviews';
import { BottomCTA } from '../components/BottomCTA';
import { MapSection } from '../components/MapSection';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export const HomePage = () => {
    return (
        <div className="home-layout-container animate__animated animate__fadeIn">
            <Header />
            <div className="home-layout-content">
                <Hero />
                <div className="section-divider" />
                <Features />
                <div className="section-divider" />
                <About />
                <div className="section-divider" />
                <Reviews />
                <div className="section-divider" />
                <BottomCTA />
                <div className="section-divider" />
                <MapSection />
                <div className="section-divider" />
                <FAQ />
            </div>
            <Footer />
        </div>
    );
};
