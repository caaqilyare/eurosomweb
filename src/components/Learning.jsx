import './Learning.css'

const Learning = () => {
    const courses = [
        {
            title: 'Cloud Computing Fundamentals',
            icon: '☁️',
            duration: '8 weeks',
            level: 'Beginner',
            students: '1,200+',
            description: 'Master AWS, Azure, and Google Cloud basics with hands-on projects.'
        },
        {
            title: 'Full Stack Web Development',
            icon: '💻',
            duration: '16 weeks',
            level: 'Intermediate',
            students: '950+',
            description: 'Learn React, Node.js, and modern web development practices.'
        },
        {
            title: 'AI & Machine Learning',
            icon: '🤖',
            duration: '12 weeks',
            level: 'Advanced',
            students: '720+',
            description: 'Build AI models with TensorFlow, PyTorch, and real-world datasets.'
        },
        {
            title: 'Cybersecurity Essentials',
            icon: '🔒',
            duration: '10 weeks',
            level: 'Intermediate',
            students: '880+',
            description: 'Learn ethical hacking, security audits, and threat prevention.'
        },
        {
            title: 'DevOps & CI/CD',
            icon: '🔧',
            duration: '8 weeks',
            level: 'Intermediate',
            students: '650+',
            description: 'Master Docker, Kubernetes, Jenkins, and deployment automation.'
        },
        {
            title: 'Odoo ERP Mastery',
            icon: '💼',
            duration: '6 weeks',
            level: 'Beginner',
            students: '1,500+',
            description: 'Learn Odoo implementation, customization, and business workflows.'
        }
    ]

    const certifications = [
        { name: 'AWS Solutions Architect', icon: '🏆' },
        { name: 'Google Cloud Professional', icon: '🎯' },
        { name: 'Microsoft Azure Expert', icon: '✨' },
        { name: 'Certified Kubernetes Admin', icon: '🐳' }
    ]

    return (
        <section id="learning" className="learning">
            <div className="container">
                <div className="section-header text-center scroll-reveal">
                    <h2>Learning Center</h2>
                    <p className="section-subtitle">
                        Expand your skills with our comprehensive training programs
                    </p>
                </div>

                <div className="courses-grid grid grid-3">
                    {courses.map((course, index) => (
                        <div key={index} className="course-card glass-card scroll-reveal">
                            <div className="course-header">
                                <span className="course-icon">{course.icon}</span>
                                <span className={`course-level level-${course.level.toLowerCase()}`}>
                                    {course.level}
                                </span>
                            </div>
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-description">{course.description}</p>
                            <div className="course-meta">
                                <span className="course-meta-item">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M9 5V9L12 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    {course.duration}
                                </span>
                                <span className="course-meta-item">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M12 15V13.5C12 12.5 11.5 11.5 10.5 11C9.5 10.5 8.5 10.5 7.5 11C6.5 11.5 6 12.5 6 13.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                    {course.students}
                                </span>
                            </div>
                            <button className="btn btn-glass course-btn">
                                Enroll Now
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="certifications-section scroll-reveal">
                    <h3 className="cert-section-title">Get Certified</h3>
                    <p className="cert-section-subtitle">Earn industry-recognized certifications</p>
                    <div className="cert-grid">
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-card glass-card">
                                <span className="cert-icon">{cert.icon}</span>
                                <span className="cert-name">{cert.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learning
