import React, { useState } from 'react';

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #52525B', // Brighter, thicker line
        paddingBottom: 15,
        marginBottom: 30,
    },

    logo: {
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: '#FFFFFF',
        padding: '6px 10px',
        borderRadius: 6,
        transition: 'background-color 0.2s ease',
    },
    nav: {
        display: 'flex',
        gap: 10,
    },
    navBtn: {
        textTransform: 'uppercase',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: 6,
        padding: '8px 14px',
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#E4E4E7',
        transition: 'background-color 0.2s ease, color 0.2s ease',
    },
    hoveredBtn: {
        backgroundColor: '#27272A',
        color: '#FFFFFF',
    },
    activeBtn: {
        fontWeight: 'bold',
        backgroundColor: '#18181B',
        color: '#FFFFFF',
    },
};

const Navbar = ({ activeTab, onNavClick }) => {
    const [hoveredTab, setHoveredTab] = useState(null);

    return (
        <header style={styles.header}>
            <button
                style={{
                    ...styles.logo,
                    ...(hoveredTab === 'logo' ? styles.hoveredBtn : {}),
                }}
                onMouseEnter={() => setHoveredTab('logo')}
                onMouseLeave={() => setHoveredTab(null)}
                onClick={() => onNavClick('home')}
            >
                [YOUR LOGO]
            </button>

            <nav style={styles.nav}>
                {['home', 'portfolio', 'about', 'contact'].map((tab) => {
                    const isHovered = hoveredTab === tab;
                    const isActive = activeTab === tab;

                    return (
                        <button
                            key={tab}
                            onClick={() => onNavClick(tab)}
                            onMouseEnter={() => setHoveredTab(tab)}
                            onMouseLeave={() => setHoveredTab(null)}
                            style={{
                                ...styles.navBtn,
                                ...(isActive ? styles.activeBtn : {}),
                                ...(isHovered ? styles.hoveredBtn : {}),
                            }}
                        >
                            {tab}
                        </button>
                    );
                })}
            </nav>
        </header>
    );
};

export default Navbar;
