import { useState } from 'react'
import './Pricing.css'

const Pricing = () => {
    const [billingPeriod, setBillingPeriod] = useState('monthly')
    const [activeCategory, setActiveCategory] = useState('cloud')

    const cloudPlans = {
        monthly: [
            {
                name: 'Starter',
                price: '$10',
                period: '/month',
                specs: {
                    cpu: '1 vCPU',
                    memory: '1 GB',
                    storage: '35 GB SSD',
                    bandwidth: '1 TB'
                },
                features: ['Full Root Access', '99.9% Uptime SLA', 'DDoS Protection', '24/7 Support']
            },
            {
                name: 'Professional',
                price: '$20',
                period: '/month',
                specs: {
                    cpu: '1 vCPU',
                    memory: '2 GB',
                    storage: '50 GB SSD',
                    bandwidth: '1 TB'
                },
                features: ['Full Root Access', '99.9% Uptime SLA', 'DDoS Protection', '24/7 Priority Support', 'Automated Backups'],
                popular: true
            },
            {
                name: 'Enterprise',
                price: '$30',
                period: '/month',
                specs: {
                    cpu: '2 vCPU',
                    memory: '2 GB',
                    storage: '70 GB SSD',
                    bandwidth: '1 TB'
                },
                features: ['Full Root Access', '99.99% Uptime SLA', 'DDoS Protection', '24/7 Priority Support', 'Automated Backups', 'Dedicated IP']
            }
        ],
        yearly: [
            {
                name: 'Starter',
                price: '$96',
                period: '/year',
                savings: 'Save $24',
                specs: {
                    cpu: '1 vCPU',
                    memory: '1 GB',
                    storage: '35 GB SSD',
                    bandwidth: '1 TB'
                },
                features: ['Full Root Access', '99.9% Uptime SLA', 'DDoS Protection', '24/7 Support']
            },
            {
                name: 'Professional',
                price: '$192',
                period: '/year',
                savings: 'Save $48',
                specs: {
                    cpu: '1 vCPU',
                    memory: '2 GB',
                    storage: '50 GB SSD',
                    bandwidth: '1 TB'
                },
                features: ['Full Root Access', '99.9% Uptime SLA', 'DDoS Protection', '24/7 Priority Support', 'Automated Backups'],
                popular: true
            },
            {
                name: 'Enterprise',
                price: '$288',
                period: '/year',
                savings: 'Save $72',
                specs: {
                    cpu: '2 vCPU',
                    memory: '2 GB',
                    storage: '70 GB SSD',
                    bandwidth: '1 TB'
                },
                features: ['Full Root Access', '99.99% Uptime SLA', 'DDoS Protection', '24/7 Priority Support', 'Automated Backups', 'Dedicated IP']
            }
        ]
    }

    const erpPlans = {
        monthly: [
            { name: 'Starter', price: '$49', period: '/month', users: '5 Users', features: ['Basic ERP Modules', 'Cloud Hosting', 'Email Support'] },
            { name: 'Business', price: '$99', period: '/month', users: '15 Users', features: ['All ERP Modules', 'Cloud Hosting', 'Priority Support', 'Custom Domains'], popular: true },
            { name: 'Enterprise', price: '$199', period: '/month', users: 'Unlimited', features: ['All ERP Modules', 'Dedicated Server', '24/7 Support', 'Custom Development'] }
        ],
        yearly: [
            { name: 'Starter', price: '$470', period: '/year', savings: 'Save $118', users: '5 Users', features: ['Basic ERP Modules', 'Cloud Hosting', 'Email Support'] },
            { name: 'Business', price: '$950', period: '/year', savings: 'Save $238', users: '15 Users', features: ['All ERP Modules', 'Cloud Hosting', 'Priority Support', 'Custom Domains'], popular: true },
            { name: 'Enterprise', price: '$1,900', period: '/year', savings: 'Save $488', users: 'Unlimited', features: ['All ERP Modules', 'Dedicated Server', '24/7 Support', 'Custom Development'] }
        ]
    }

    const starlinkPlans = {
        monthly: [
            { name: 'Residential', price: '$120', period: '/month', speed: 'Up to 200 Mbps', features: ['Home Use', 'Standard Hardware', 'Easy Setup'] },
            { name: 'Business', price: '$250', period: '/month', speed: 'Up to 350 Mbps', features: ['Business Priority', 'Enhanced Hardware', 'Priority Support'], popular: true },
            { name: 'Maritime', price: '$500', period: '/month', speed: 'Up to 700 Mbps', features: ['Ocean Coverage', 'Marine Hardware', 'Global Support'] }
        ],
        yearly: [
            { name: 'Residential', price: '$1,152', period: '/year', savings: 'Save $288', speed: 'Up to 200 Mbps', features: ['Home Use', 'Standard Hardware', 'Easy Setup'] },
            { name: 'Business', price: '$2,400', period: '/year', savings: 'Save $600', speed: 'Up to 350 Mbps', features: ['Business Priority', 'Enhanced Hardware', 'Priority Support'], popular: true },
            { name: 'Maritime', price: '$4,800', period: '/year', savings: 'Save $1,200', speed: 'Up to 220 Mbps', features: ['Ocean Coverage', 'Marine Hardware', 'Global Support'] }
        ]
    }

    const categories = [
        { id: 'cloud', name: 'Cloud', icon: '☁️' },
        { id: 'erp', name: 'ERP Odoo SaaS', icon: '💼' },
        { id: 'starlink', name: 'Starlink', icon: '🛰️' }
    ]

    const getCurrentPlans = () => {
        switch (activeCategory) {
            case 'cloud': return cloudPlans[billingPeriod]
            case 'erp': return erpPlans[billingPeriod]
            case 'starlink': return starlinkPlans[billingPeriod]
            default: return cloudPlans[billingPeriod]
        }
    }

    return (
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="section-header text-center scroll-reveal">
                    <h2 className="header-white-cool">Pricing Plans</h2>
                    <p className="section-subtitle">
                        Choose the perfect plan for your business needs
                    </p>
                </div>

                <div className="pricing-categories scroll-reveal">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`category-btn glass-card ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <span className="cat-icon">{cat.icon}</span>
                            <span className="cat-name">{cat.name}</span>
                        </button>
                    ))}
                </div>

                <div className="billing-toggle scroll-reveal">
                    <button
                        className={`toggle-btn ${billingPeriod === 'monthly' ? 'active' : ''}`}
                        onClick={() => setBillingPeriod('monthly')}
                    >
                        Monthly
                    </button>
                    <button
                        className={`toggle-btn ${billingPeriod === 'yearly' ? 'active' : ''}`}
                        onClick={() => setBillingPeriod('yearly')}
                    >
                        Yearly
                        <span className="save-badge">Save 20%</span>
                    </button>
                </div>

                <div className="pricing-grid grid grid-3">
                    {getCurrentPlans().map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card glass-card scroll-reveal ${plan.popular ? 'popular' : ''}`}
                        >
                            {plan.popular && <div className="popular-badge">Most Popular</div>}
                            {plan.savings && <div className="savings-badge">{plan.savings}</div>}

                            <h3 className="plan-name">{plan.name}</h3>

                            <div className="plan-price">
                                <span className="price">{plan.price}</span>
                                <span className="period">{plan.period}</span>
                            </div>

                            {plan.specs && (
                                <div className="plan-specs">
                                    <div className="spec-item">
                                        <span className="spec-label">CPU:</span>
                                        <span className="spec-value">{plan.specs.cpu}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-label">Memory:</span>
                                        <span className="spec-value">{plan.specs.memory}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-label">Storage:</span>
                                        <span className="spec-value">{plan.specs.storage}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-label">Bandwidth:</span>
                                        <span className="spec-value">{plan.specs.bandwidth}</span>
                                    </div>
                                </div>
                            )}

                            {plan.users && (
                                <div className="plan-users">
                                    <span className="users-icon">👥</span>
                                    <span>{plan.users}</span>
                                </div>
                            )}

                            {plan.speed && (
                                <div className="plan-speed">
                                    <span className="speed-icon">⚡</span>
                                    <span>{plan.speed}</span>
                                </div>
                            )}

                            <ul className="plan-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-glass'} plan-btn`}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
