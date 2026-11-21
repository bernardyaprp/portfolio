import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';

const styles = {
    pageWrapper: {
        backgroundColor: '#111113',
        color: '#FFFFFF',
        minHeight: '100vh',
        fontFamily: "'Montserrat', Arial, sans-serif",
    },
    container: {
        maxWidth: 1000,
        margin: '0 auto',
        padding: 20,
    },
};

export default function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.backgroundColor = '#111113';
        document.body.style.color = '#FFFFFF';
    }, []);

    const handleNavClick = (tab) => {
        setActiveTab(tab);
        setSelectedProject(null);
    };

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.container}>
                <Navbar activeTab={activeTab} onNavClick={handleNavClick} />

                {activeTab === 'home' && <Home onViewWork={() => handleNavClick('portfolio')} />}
                {activeTab === 'portfolio' && (
                    <Portfolio selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
                )}
                {activeTab === 'about' && <About />}
                {activeTab === 'contact' && <Contact />}
            </div>
        </div>
    );
}
