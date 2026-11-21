import React from 'react';

const styles = {
    section: {
        paddingTop: 50,
        paddingBottom: 50,
    },
    title: {
        color: '#FFFFFF',
        marginBottom: 10,
    },
    tagline: {
        color: '#FFFFFF',
        fontWeight: 'normal',
        marginTop: 0,
        marginBottom: 20,
    },
    intro: {
        fontSize: 18,
        lineHeight: 1.6,
        maxWidth: 700,
        color: '#FFFFFF',
    },
    ctaBtn: {
        marginTop: 25,
        padding: '12px 24px',
        backgroundColor: '#FFFFFF',
        color: '#111113',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 15,
    },
};

const Home = ({ onViewWork }) => {
    return (
        <section style={styles.section}>
            <h1 style={styles.title}>Hi, I'm Bernard.</h1>
            <h2 style={styles.tagline}>Full Stack Developer, Game Creator & Video Editor based in Singapore.</h2>
            <p style={styles.intro}>
                I build responsive web applications, interactive 2D/3D/VR games, and engaging video edits. Currently a Year 2 Diploma in Information Technology student at Republic Polytechnic.
            </p>
            <button style={styles.ctaBtn} onClick={onViewWork}>
                View My Work
            </button>
        </section>
    );
};

export default Home;
