import './Services.css'

const Services = () => {
    const services = [
        {
            icon: '☁️',
            title: 'Cloud Services',
            description: 'Elevate your business with Eurosom\'s premier cloud services, providing flexibility, scalability, and reliability. Our cloud solutions empower you to innovate faster, reduce IT costs, and enhance data accessibility across your organization.',
            features: ['Cloud Migration', 'Infrastructure Setup', 'Auto Scaling', 'Cloud Security']
        },
        {
            icon: '⚙️',
            title: 'Data Processing',
            description: 'We offer data processing services that include cleaning, validating, transforming, and integrating data from multiple sources. We use various tools and technologies to ensure that the data is accurate, consistent, and ready for analysis.',
            features: ['Data Cleaning', 'Data Validation', 'Data Transformation', 'Multi-source Integration']
        },
        {
            icon: '💾',
            title: 'Data Storing',
            description: 'We offer data storage solutions that include cloud-based storage, on-premise storage, and hybrid solutions. Our team will work with you to identify the most suitable storage solution for your business needs.',
            features: ['Cloud Storage', 'On-premise Storage', 'Hybrid Solutions', 'Backup & Recovery']
        },
        {
            icon: '📱',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android with modern frameworks like React Native and Flutter.',
            features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Deployment']
        },
        {
            icon: '🤖',
            title: 'AI/ML & IoT Applications',
            description: 'Cutting-edge artificial intelligence, machine learning models, and IoT solutions for smart automation and insights.',
            features: ['Machine Learning', 'Computer Vision', 'IoT Integration', 'Smart Automation']
        },
        {
            icon: '🔒',
            title: 'Cyber & Information Security',
            description: 'Comprehensive cybersecurity solutions to protect your digital assets, ensure compliance, and prevent threats.',
            features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response']
        }
    ]

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header text-center scroll-reveal">
                    <h2>Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive technology solutions tailored to your business needs
                    </p>
                </div>

                <div className="services-grid grid grid-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card glass-card scroll-reveal"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="service-link btn btn-glass">
                                Learn More
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
