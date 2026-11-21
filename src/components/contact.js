import React from 'react';

const styles = {
    text: { color: '#FFFFFF' },
    link: { color: '#FFFFFF', textDecoration: 'underline' },
    form: { display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 420, marginTop: 20 },
    input: {
        padding: 12,
        backgroundColor: '#18181B',
        color: '#FFFFFF',
        border: '1px solid #27272A',
        borderRadius: 5,
        fontFamily: 'inherit',
    },
    submitBtn: {
        padding: 12,
        backgroundColor: '#FFFFFF',
        color: '#111113',
        border: 'none',
        borderRadius: 5,
        cursor: 'pointer',
        fontWeight: 'bold',
    },
};

const Contact = () => {
    return (
        <section>
            <h2>Contact Me</h2>
            <p style={styles.text}><strong>Email:</strong> your.email@myrp.edu.sg</p>
            <p style={styles.text}>
                <strong>GitHub:</strong> <a href="https://github.com" target="_blank" rel="noreferrer" style={styles.link}>://github.com</a>
            </p>

            <form action="https://formspree.io" method="POST" style={styles.form}>
                <input type="text" name="name" placeholder="Your Name" required style={styles.input} />
                <input type="email" name="email" placeholder="Your Email" required style={styles.input} />
                <textarea name="message" rows="4" placeholder="Your Message" required style={styles.input} />
                <button type="submit" style={styles.submitBtn}>
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
