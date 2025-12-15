import './DataCenter.css'

const DataCenter = () => {
    return (
        <section id="datacenter" className="datacenter">
            <div className="container">
                <div className="datacenter-content">
                    <div className="datacenter-text scroll-reveal">
                        <h2>State-of-the-Art Data Center</h2>
                        <p className="datacenter-description">
                            Our enterprise-grade data center infrastructure ensures maximum uptime,
                            security, and performance for your critical applications and data. Located
                            in Mogadishu, Somalia, we provide world-class hosting services across East Africa.
                        </p>
                        <div className="datacenter-features">
                            <div className="feature-item glass-card">
                                <div className="feature-icon">🔒</div>
                                <div>
                                    <h4>Tier III Certified</h4>
                                    <p>99.982% uptime guarantee with redundant systems</p>
                                </div>
                            </div>
                            <div className="feature-item glass-card">
                                <div className="feature-icon">⚡</div>
                                <div>
                                    <h4>High Performance</h4>
                                    <p>Latest hardware & high-speed networking infrastructure</p>
                                </div>
                            </div>
                            <div className="feature-item glass-card">
                                <div className="feature-icon">🛡️</div>
                                <div>
                                    <h4>24/7 Security</h4>
                                    <p>Physical & digital protection with monitoring</p>
                                </div>
                            </div>
                            <div className="feature-item glass-card">
                                <div className="feature-icon">♻️</div>
                                <div>
                                    <h4>Green Energy</h4>
                                    <p>Environmentally sustainable power systems</p>
                                </div>
                            </div>
                            <div className="feature-item glass-card">
                                <div className="feature-icon">🌐</div>
                                <div>
                                    <h4>Global Connectivity</h4>
                                    <p>Multiple fiber connections & low latency</p>
                                </div>
                            </div>
                            <div className="feature-item glass-card">
                                <div className="feature-icon">🔧</div>
                                <div>
                                    <h4>Expert Support</h4>
                                    <p>Dedicated technical team available 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="datacenter-visual scroll-reveal">
                        <div className="server-rack glass-card">
                            <div className="rack-header">
                                <h3>Server Infrastructure</h3>
                            </div>
                            <div className="rack-lights">
                                {[...Array(20)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="light"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    ></div>
                                ))}
                            </div>
                            <div className="rack-stats">
                                <div className="rack-stat">
                                    <span className="stat-value">500+</span>
                                    <span className="stat-label">Servers</span>
                                </div>
                                <div className="rack-stat">
                                    <span className="stat-value">10TB</span>
                                    <span className="stat-label">Bandwidth</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataCenter
