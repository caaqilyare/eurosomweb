import './Solutions.css'

const Solutions = () => {
    const solutions = [
        {
            title: 'ERP Odoo',
            icon: '💼',
            description: 'Complete business management solution with Odoo ERP. Streamline your operations with integrated modules for accounting, inventory, sales, CRM, and more.',
            features: [
                'Financial Management',
                'Inventory & Warehouse',
                'Sales & CRM',
                'Manufacturing',
                'HR & Payroll',
                'E-commerce Integration'
            ]
        },
        {
            title: 'Cloud iLab',
            icon: '☁️',
            description: 'Advanced cloud laboratory platform for research, development, and innovation. Access powerful computing resources and collaboration tools.',
            features: [
                'Virtual Lab Environment',
                'High-Performance Computing',
                'Collaborative Workspace',
                'Data Analytics Tools',
                'Secure Cloud Storage',
                'API Integration'
            ]
        },
        {
            title: 'Digital Transformation',
            icon: '🚀',
            description: 'Transform your business with modern digital technologies. From legacy system modernization to cloud migration and process automation.',
            features: [
                'Legacy System Modernization',
                'Cloud Migration Services',
                'Process Automation',
                'Digital Strategy Consulting',
                'Change Management',
                'Training & Support'
            ]
        }
    ]

    return (
        <section id="solutions" className="solutions">
            <div className="container">
                <div className="section-header text-center scroll-reveal">
                    <h2 className="header-white-cool">Our Solutions</h2>
                    <p className="section-subtitle">
                        Innovative solutions designed to drive your business forward
                    </p>
                </div>

                <div className="solutions-grid grid grid-3">
                    {solutions.map((solution, index) => (
                        <div key={index} className="solution-card glass-card scroll-reveal">
                            <div className="solution-icon">{solution.icon}</div>
                            <h3 className="solution-title">{solution.title}</h3>
                            <p className="solution-description">{solution.description}</p>
                            <ul className="solution-features">
                                {solution.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <defs>
                                                <linearGradient id="gradient" x1="1" y1="1" x2="19" y2="19">
                                                    <stop offset="0%" stopColor="#667eea" />
                                                    <stop offset="100%" stopColor="#764ba2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-glass solution-btn">
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

export default Solutions
