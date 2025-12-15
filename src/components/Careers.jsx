import './Careers.css'

const Careers = () => {
    const positions = [
        {
            title: 'Senior Full Stack Developer',
            department: 'Engineering',
            location: 'Mogadishu, Somalia',
            type: 'Full-time',
            description: 'Build scalable web applications using React, Node.js, and cloud technologies.'
        },
        {
            title: 'Cloud Solutions Architect',
            department: 'Cloud Services',
            location: 'Remote',
            type: 'Full-time',
            description: 'Design and implement cloud infrastructure solutions for enterprise clients.'
        },
        {
            title: 'AI/ML Engineer',
            department: 'Research & Development',
            location: 'Hybrid',
            type: 'Full-time',
            description: 'Develop machine learning models and AI solutions for various applications.'
        },
        {
            title: 'DevOps Engineer',
            department: 'Infrastructure',
            location: 'Mogadishu, Somalia',
            type: 'Full-time',
            description: 'Manage CI/CD pipelines, containerization, and cloud infrastructure.'
        },
        {
            title: 'Cybersecurity Specialist',
            department: 'Security',
            location: 'Mogadishu, Somalia',
            type: 'Full-time',
            description: 'Protect systems and data with advanced security measures and monitoring.'
        },
        {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            description: 'Create beautiful and intuitive user interfaces for web and mobile applications.'
        }
    ]

    const benefits = [
        { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
        { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical coverage' },
        { icon: '📚', title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
        { icon: '🏖️', title: 'Flexible Time Off', description: 'Generous vacation and sick leave policy' },
        { icon: '💻', title: 'Remote Work', description: 'Work from anywhere options available' },
        { icon: '🚀', title: 'Career Growth', description: 'Clear advancement paths and mentorship' }
    ]

    return (
        <section id="careers" className="careers">
            <div className="container">
                <div className="section-header text-center scroll-reveal">
                    <h2>Join Our Team</h2>
                    <p className="section-subtitle">
                        Be part of a dynamic team shaping the future of technology in East Africa
                    </p>
                </div>

                <div className="benefits-section scroll-reveal">
                    <h3 className="benefits-title">Why Work With Us?</h3>
                    <div className="benefits-grid grid grid-3">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card glass-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h4 className="benefit-title">{benefit.title}</h4>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="positions-section">
                    <h3 className="positions-title scroll-reveal">Open Positions</h3>
                    <div className="positions-list">
                        {positions.map((position, index) => (
                            <div key={index} className="position-card glass-card scroll-reveal">
                                <div className="position-header">
                                    <div className="position-main">
                                        <h3 className="position-title">{position.title}</h3>
                                        <p className="position-description">{position.description}</p>
                                    </div>
                                    <span className="position-type">{position.type}</span>
                                </div>
                                <div className="position-details">
                                    <span className="position-detail">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        {position.department}
                                    </span>
                                    <span className="position-detail">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 8.5C9.38071 8.5 10.5 7.38071 10.5 6C10.5 4.61929 9.38071 3.5 8 3.5C6.61929 3.5 5.5 4.61929 5.5 6C5.5 7.38071 6.61929 8.5 8 8.5Z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M3 13.5C3 11.5 5 10 8 10C11 10 13 11.5 13 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        {position.location}
                                    </span>
                                </div>
                                <button className="btn btn-primary apply-btn">
                                    Apply Now
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Careers
