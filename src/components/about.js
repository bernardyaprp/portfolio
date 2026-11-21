import React from 'react';

const styles = {
    text: { color: '#FFFFFF', lineHeight: 1.6 },
    certGrid: { display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 15 },
    certCard: {
        border: '1px solid #27272A',
        padding: '15px 20px',
        borderRadius: 8,
        minWidth: 220,
        backgroundColor: '#18181B',
        color: '#FFFFFF',
    },
    link: {
        color: '#FFFFFF',
        textDecoration: 'underline',
    },
};

const About = () => {
    return (
        <section>
            <h2>About Me</h2>
            <p style={styles.text}>
                Write a brief introduction about yourself, your passion for software development, game design, and video editing, and your career goals.
            </p>

            <h3>Core Capabilities</h3>
            <ul style={styles.text}>
                <li>Full Stack Web Application Development</li>
                <li>2D, 3D & VR Game Development</li>
                <li>Video Editing & Motion Graphics</li>
            </ul>

            <h3>Certifications (Minimum 2 Required)</h3>
            <div style={styles.certGrid}>
                <div style={styles.certCard}>
                    <strong>HackerRank CSS (Basic)</strong>
                    <p>
                        <a href="https://hackerrank.com" target="_blank" rel="noreferrer" style={styles.link}>
                            View Certificate →
                        </a>
                    </p>
                </div>
                <div style={styles.certCard}>
                    <strong>HackerRank JavaScript (Basic)</strong>
                    <p>
                        <a href="https://hackerrank.com" target="_blank" rel="noreferrer" style={styles.link}>
                            View Certificate →
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
