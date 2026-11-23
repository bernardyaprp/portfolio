import React, { useState } from 'react';

const styles = {
    section: {
        paddingTop: 70,
        paddingBottom: 70,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 48,
    },
    leftCol: {
        flex: '1 1 480px',
        maxWidth: 620,
    },
    badge: {
        display: 'inline-block',
        padding: '6px 12px',
        backgroundColor: '#18181B',
        border: '1px solid #27272A',
        borderRadius: 999,
        color: '#A1A1AA',
        fontSize: 13,
        marginBottom: 20,
        letterSpacing: '0.3px',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 48,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        marginTop: 0,
        marginBottom: 12,
    },
    tagline: {
        color: '#E4E4E7',
        fontSize: 22,
        fontWeight: 500,
        lineHeight: 1.4,
        marginTop: 0,
        marginBottom: 20,
    },
    intro: {
        fontSize: 16,
        lineHeight: 1.7,
        maxWidth: 540,
        color: '#A1A1AA', // Softer zinc for readability against #111113
        marginBottom: 32,
    },
    btnGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 14,
    },
    primaryBtn: {
        padding: '12px 24px',
        backgroundColor: '#FFFFFF',
        color: '#111113',
        fontWeight: 600,
        border: '1px solid #FFFFFF',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 15,
        transition: 'opacity 0.2s ease',
    },
    secondaryBtn: {
        padding: '12px 24px',
        backgroundColor: '#18181B',
        color: '#FFFFFF',
        fontWeight: 500,
        border: '1px solid #27272A',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 15,
        transition: 'border-color 0.2s ease, background-color 0.2s ease',
    },
    // Right-side monochrome developer card
    rightCol: {
        flex: '1 1 360px',
        maxWidth: 440,
        backgroundColor: '#18181B',
        border: '1px solid #27272A',
        borderRadius: 12,
        padding: 24,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        paddingBottom: 16,
        marginBottom: 16,
        borderBottom: '1px solid #27272A',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: '#52525B',
    },
    fileName: {
        marginLeft: 8,
        fontSize: 13,
        color: '#52525B',
        fontFamily: 'monospace',
    },
    codeBlock: {
        margin: 0,
        fontFamily: 'monospace',
        fontSize: 14,
        lineHeight: 1.7,
        color: '#D4D4D8',
        overflowX: 'auto',
    },
    mutedCode: {
        color: '#52525B',
    },
    highlightCode: {
        color: '#FFFFFF',
        fontWeight: 600,
    },
};

const Home = ({ onViewWork, onContact }) => {
    const [primaryHover, setPrimaryHover] = useState(false);
    const [secondaryHover, setSecondaryHover] = useState(false);

    return (
        <section style={styles.section}>
            {/* Left Content Column */}
            <div style={styles.leftCol}>
                <span style={styles.badge}>Based in Singapore • Year 2 IT @ RP</span>
                <h1 style={styles.title}>Hi, I'm Bernard.</h1>
                <h2 style={styles.tagline}>
                    Full Stack Developer, Game Creator & Video Editor.
                </h2>
                <p style={styles.intro}>
                    I build responsive web applications, interactive 2D/3D/VR games, and engaging video edits. Currently pursuing a Diploma in Information Technology at Republic Polytechnic.
                </p>
                <div style={styles.btnGroup}>
                    <button
                        style={{
                            ...styles.primaryBtn,
                            opacity: primaryHover ? 0.88 : 1,
                        }}
                        onMouseEnter={() => setPrimaryHover(true)}
                        onMouseLeave={() => setPrimaryHover(false)}
                        onClick={onViewWork}
                    >
                        View My Work
                    </button>
                    <button
                        style={{
                            ...styles.secondaryBtn,
                            borderColor: secondaryHover ? '#52525B' : '#27272A',
                            backgroundColor: secondaryHover ? '#27272A' : '#18181B',
                        }}
                        onMouseEnter={() => setSecondaryHover(true)}
                        onMouseLeave={() => setSecondaryHover(false)}
                        onClick={onContact}
                    >
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* Right Visual Column */}
            <div style={styles.rightCol}>
                <div style={styles.cardHeader}>
                    <span style={styles.dot} />
                    <span style={styles.dot} />
                    <span style={styles.dot} />
                    <span style={styles.fileName}>bernard.config.js</span>
                </div>
                <pre style={styles.codeBlock}>
                    <code>
                        <span style={styles.mutedCode}>// Developer Profile</span>{'\n'}
                        <span style={styles.mutedCode}>const</span>{' '}
                        <span style={styles.highlightCode}>bernard</span> = {'{\n'}
                        {'  '}location: <span style={styles.highlightCode}>"Singapore"</span>,{'\n'}
                        {'  '}education: <span style={styles.highlightCode}>"Republic Polytechnic"</span>,{'\n'}
                        {'  '}focus: [{'\n'}
                        {'    '}<span style={styles.highlightCode}>"Full Stack Web"</span>,{'\n'}
                        {'    '}<span style={styles.highlightCode}>"2D / 3D / VR Games"</span>,{'\n'}
                        {'    '}<span style={styles.highlightCode}>"Video Editing"</span>{'\n'}
                        {'  '}],{'\n'}
                        {'  '}availableForWork: <span style={styles.highlightCode}>true</span>{'\n'}
                        {'};'}
                    </code>
                </pre>
            </div>
        </section>
    );
};

export default Home;
