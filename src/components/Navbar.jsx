import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { id: 'services', label: 'Services' },
        { id: 'solutions', label: 'Solutions' },
        { id: 'datacenter', label: 'Data Center' },
        { id: 'technology', label: 'Technology' },
        { id: 'careers', label: 'Careers' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'learning', label: 'Learning' },
        { id: 'contact', label: 'Contact Us' }
    ]

    const isActive = (path) => {
        if (path === '' && (location.pathname === '/' || location.pathname === '/home')) return true
        return location.pathname === `/${path}`
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="EUROSOM" className="logo-image" />
                    </Link>

                    <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                        {navItems.map(item => (
                            <Link
                                key={item.id}
                                to={`/${item.id}`}
                                className={`nav-link ${isActive(item.id) ? 'active' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
