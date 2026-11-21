import React, { useState } from 'react';

const styles = {
    categorySection: {
        marginBottom: 45,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        borderBottom: '2px solid #52525B',
        paddingBottom: 8,
        marginBottom: 20,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
    },
    card: {
        border: '1px solid #3F3F46',
        borderRadius: 8,
        padding: 22,
        backgroundColor: '#18181B',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
        cursor: 'pointer',
    },
    cardHovered: {
        backgroundColor: '#27272A',
        borderColor: '#71717A',
    },
    summary: {
        color: '#FFFFFF',
        lineHeight: 1.5,
        marginTop: 0,
        marginBottom: 18,
    },
    caseBtn: {
        padding: '8px 14px',
        backgroundColor: '#FFFFFF',
        color: '#111113',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: 5,
        cursor: 'pointer',
        fontSize: 13,
    },
    stickyBar: {
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: '#111113',
        paddingTop: 10,
        paddingBottom: 12,
        marginBottom: 15,
        borderBottom: '1px solid #27272A',
    },
    backBtn: {
        cursor: 'pointer',
        padding: '8px 14px',
        backgroundColor: '#18181B',
        color: '#FFFFFF',
        border: '1px solid #52525B',
        borderRadius: 5,
        fontSize: 14,
        transition: 'background-color 0.2s ease',
    },
    backBtnHovered: {
        backgroundColor: '#27272A',
    },
    detailText: {
        color: '#FFFFFF',
        lineHeight: 1.6,
    },
    videoWrapper: {
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 25,
        border: '1px solid #3F3F46',
    },
    iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
    },
    repoLink: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textDecoration: 'underline',
    },
};

const CATEGORIES = [
    'Web Application',
    'Game Development',
    'VR / Immersive Tech',
    'Video Editing',
];

const PROJECTS = [
    {
        id: 1,
        title: 'E-Commerce Web Store',
        category: 'Web Application',
        summary: 'A responsive full-stack web application for browsing and purchasing tech gadgets.',
        problem: 'Small local sellers need an easy, mobile-friendly storefront without high platform fees.',
        swot: [
            { competitor: 'Shopee', pros: 'Huge user base', cons: 'Cluttered interface and high seller fees' },
            { competitor: 'Carousell', pros: 'Easy listing', cons: 'No built-in shopping cart checkout' },
        ],
        features: ['Product Filtering', 'Shopping Cart', 'User Authentication'],
        skills: ['Full Stack Web Development', 'Database Design'],
        videoUrl: 'https://youtube.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 2,
        title: 'Task Tracker Dashboard',
        category: 'Web Application',
        summary: 'A clean productivity web app for managing school project deadlines and milestones.',
        problem: 'Students juggle multiple module deliverables across separate spreadsheets and notes.',
        swot: [
            { competitor: 'Trello', pros: 'Visual Kanban boards', cons: 'Can feel cluttered for simple personal lists' },
            { competitor: 'Notion', pros: 'Highly customizable', cons: 'Requires heavy initial setup' },
        ],
        features: ['Drag-and-Drop Tasks', 'Deadline Reminders', 'Progress Bar'],
        skills: ['React', 'Front-End Development'],
        videoUrl: 'https://youtube.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 3,
        title: '3D Survival Adventure',
        category: 'Game Development',
        summary: 'A third-person 3D exploration and puzzle game built in Unity.',
        problem: 'Many indie 3D puzzle games lack intuitive visual cues for new players.',
        swot: [
            { competitor: 'Portal', pros: 'Strong physics mechanics', cons: 'Steep learning curve for casual players' },
            { competitor: 'Monument Valley', pros: 'Clean visual guidance', cons: 'Limited 3D camera freedom' },
        ],
        features: ['Dynamic Lighting', 'Physics Puzzles', 'Checkpoint Save System'],
        skills: ['3D Game Development', 'C# Scripting', 'Level Design'],
        videoUrl: 'https://youtube.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 4,
        title: 'Retro 2D Platformer',
        category: 'Game Development',
        summary: 'A fast-paced 2D pixel-art action platformer with custom sprite animations.',
        problem: 'Browser-based 2D platformers often suffer from floaty jump physics and unresponsive controls.',
        swot: [
            { competitor: 'Celeste', pros: 'Tight movement controls', cons: 'High difficulty barrier' },
            { competitor: 'Super Mario Web', pros: 'Accessible gameplay', cons: 'Repetitive level mechanics' },
        ],
        features: ['Coyote-Time Jump Physics', 'Boss Fight AI', 'Collectible System'],
        skills: ['2D Game Development', 'Sprite Animation'],
        videoUrl: 'https://youtube.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 5,
        title: 'VR Escape Room Experience',
        category: 'VR / Immersive Tech',
        summary: 'An interactive virtual reality puzzle room built for Oculus/Meta Quest.',
        problem: 'First-time VR users often experience motion sickness from artificial joystick movement.',
        swot: [
            { competitor: 'The Room VR', pros: 'Tactile object interactions', cons: 'Paid title with long setup' },
            { competitor: 'Rec Room', pros: 'Free and social', cons: 'Can cause motion sickness during fast movement' },
        ],
        features: ['Teleport Locomotion', 'Hand-Tracking Grab Mechanics', 'Spatial Audio Clues'],
        skills: ['VR Development', '3D Interaction Design'],
        videoUrl: 'https://youtube.com',
        githubUrl: 'https://github.com',
    },
    {
        id: 6,
        title: 'VTuber Stream Highlights — YouTube Short',
        category: 'Video Editing',
        summary: 'A fast-paced, under-1-minute vertical highlight clip edited for a VTuber, turning livestream moments into engaging short-form content.',
        audience: 'General livestream viewers, VTuber fans, and casual mobile audiences scrolling short-form feeds.',
        concept: 'Focused on comedic timing and retention using layered sound effects (SFX), dynamic zoom cuts, and animated subtitles to highlight key reactions.',
        skills: ['Video Editing', 'Audio Mixing & SFX', 'Motion Graphics'],
        videoUrl: 'https://youtube.com',
        githubUrl: 'https://youtube.com',
    },
];

const Portfolio = ({ selectedProject, setSelectedProject }) => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [backHovered, setBackHovered] = useState(false);

    if (selectedProject) {
        const isVideo = selectedProject.category === 'Video Editing';

        return (
            <section style={styles.detailText}>
                <div style={styles.stickyBar}>
                    <button
                        onClick={() => setSelectedProject(null)}
                        onMouseEnter={() => setBackHovered(true)}
                        onMouseLeave={() => setBackHovered(false)}
                        style={{
                            ...styles.backBtn,
                            ...(backHovered ? styles.backBtnHovered : {}),
                        }}
                    >
                        ← Back to Portfolio
                    </button>
                </div>

                <h2>{selectedProject.title}</h2>
                <p>
                    <strong>Category:</strong> {selectedProject.category} | <strong>Skills:</strong> {selectedProject.skills.join(', ')}
                </p>

                {isVideo ? (
                    <>
                        <h3>1. Overview</h3>
                        <p>{selectedProject.summary}</p>

                        <h3>2. Target Audience</h3>
                        <p>{selectedProject.audience}</p>

                        <h3>3. Creative Concept & Execution</h3>
                        <p>{selectedProject.concept}</p>
                    </>
                ) : (
                    <>
                        <h3>1. Overview & Existing Problem</h3>
                        <p>{selectedProject.summary}</p>
                        <p><strong>Problem Statement:</strong> {selectedProject.problem}</p>

                        <h3>2. Competitive Analysis (SWOT)</h3>
                        <ul>
                            {selectedProject.swot?.map((item, idx) => (
                                <li key={idx} style={{ marginBottom: 8 }}>
                                    <strong>{item.competitor}:</strong> Pros — {item.pros} | Cons — {item.cons}
                                </li>
                            ))}
                        </ul>

                        <h3>3. Key Features</h3>
                        <ul>
                            {selectedProject.features?.map((feat, idx) => (
                                <li key={idx}>{feat}</li>
                            ))}
                        </ul>
                    </>
                )}

                <h3>{isVideo ? '4. Video Showcase' : '4. Demo Video'}</h3>
                <div style={styles.videoWrapper}>
                    <iframe
                        src={selectedProject.videoUrl}
                        title={selectedProject.title}
                        style={styles.iframe}
                        allowFullScreen
                    />
                </div>

                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" style={styles.repoLink}>
                    {isVideo ? 'Watch on YouTube →' : 'View Source Code / Project Link →'}
                </a>
            </section>
        );
    }

    return (
        <section>
            {CATEGORIES.map((category) => {
                const categoryProjects = PROJECTS.filter((p) => p.category === category);
                if (categoryProjects.length === 0) return null;

                return (
                    <div key={category} style={styles.categorySection}>
                        <h2 style={styles.categoryTitle}>{category}</h2>

                        <div style={styles.grid}>
                            {categoryProjects.map((project) => (
                                <div
                                    key={project.id}
                                    onClick={() => setSelectedProject(project)}
                                    onMouseEnter={() => setHoveredCard(project.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    style={{
                                        ...styles.card,
                                        ...(hoveredCard === project.id ? styles.cardHovered : {}),
                                    }}
                                >
                                    <p style={styles.summary}>{project.summary}</p>
                                    <button style={styles.caseBtn}>View Case Study</button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Portfolio;
