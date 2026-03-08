import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { About } from '../components/About';
import { Footer } from '../components/Footer';

export const HomePage = () => {
    return (
        <div className="home-layout-container animate__animated animate__fadeIn">
            <Header />
            <div className="home-layout-content">
                <Hero />
                <Features />
                <About />
            </div>
            <Footer />
        </div>
    );
};
