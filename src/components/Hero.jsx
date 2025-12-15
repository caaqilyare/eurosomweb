import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content animate-fadeInUp">
                    <h1 className="hero-title">
                        Transforming Technology<br />
                        Landscape in Somalia
                    </h1>
                    <p className="hero-subtitle">
                        Leading provider of innovative cloud solutions, AI technologies, ERP systems,
                        and cutting-edge digital transformation services across East Africa
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">
                            <span>Get Started</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="btn btn-glass">
                            <span>Learn More</span>
                        </button>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="stat-card glass-card scroll-reveal">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Active Clients</div>
                    </div>
                    <div className="stat-card glass-card scroll-reveal">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Expert Team</div>
                    </div>
                    <div className="stat-card glass-card scroll-reveal">
                        <div className="stat-number">99.9%</div>
                        <div className="stat-label">Uptime</div>
                    </div>
                    <div className="stat-card glass-card scroll-reveal">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Support</div>
                    </div>
                </div>
            </div>

            <div className="hero-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
            </div>
        </section>
    )
}

export default Hero
