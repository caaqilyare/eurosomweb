import './Technology.css'

const Technology = () => {
    const technologies = [
        { name: 'React & Vue.js', icon: '⚛️', level: 95, category: 'Frontend' },
        { name: 'Node.js & Python', icon: '🟢', level: 92, category: 'Backend' },
        { name: 'AWS & Azure', icon: '☁️', level: 90, category: 'Cloud' },
        { name: 'Docker & Kubernetes', icon: '🐳', level: 88, category: 'DevOps' },
        { name: 'PostgreSQL & MongoDB', icon: '🗄️', level: 93, category: 'Database' },
        { name: 'TensorFlow & PyTorch', icon: '🤖', level: 85, category: 'AI/ML' }
    ]

    return (
        <section id="technology" className="technology">
            <div className="container">
                <div className="section-header text-center scroll-reveal">
                    <h2 className="header-white-cool">Technology Stack</h2>
                    <p className="section-subtitle">
                        We leverage cutting-edge technologies to build robust and scalable solutions
                    </p>
                </div>

                <div className="tech-grid grid grid-3">
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-card glass-card scroll-reveal">
                            <div className="tech-header">
                                <span className="tech-icon">{tech.icon}</span>
                                <div className="tech-info">
                                    <h3 className="tech-name">{tech.name}</h3>
                                    <span className="tech-category">{tech.category}</span>
                                </div>
                            </div>
                            <div className="tech-progress">
                                <div
                                    className="tech-progress-bar"
                                    style={{ width: `${tech.level}%` }}
                                >
                                    <span className="progress-glow"></span>
                                </div>
                            </div>
                            <div className="tech-level">{tech.level}% Expertise</div>
                        </div>
                    ))}
                </div>

                <div className="tech-certifications scroll-reveal">
                    <h3 className="certifications-title">Certifications & Partnerships</h3>
                    <div className="certifications-grid">
                        <div className="cert-badge glass-card">
                            <div className="cert-icon">🏆</div>
                            <p>AWS Certified Solutions Architect</p>
                        </div>
                        <div className="cert-badge glass-card">
                            <div className="cert-icon">✨</div>
                            <p>Microsoft Azure Partner</p>
                        </div>
                        <div className="cert-badge glass-card">
                            <div className="cert-icon">🎯</div>
                            <p>Google Cloud Partner</p>
                        </div>
                        <div className="cert-badge glass-card">
                            <div className="cert-icon">💎</div>
                            <p>Odoo Gold Partner</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technology
